import {
  buildTeamNotificationEmail,
  buildUserConfirmationEmail,
  type ContactEmailData,
} from "../lib/emailTemplates";

interface Env {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  RESEND_NOTIFY_EMAIL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const RESEND_API_URL = "https://api.resend.com/emails";
const DEFAULT_FROM_EMAIL = "SaulTech IT Solutions <support@saultechitsolutions.com>";
const DEFAULT_NOTIFY_EMAIL = "support@saultechitsolutions.com";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

async function sendViaResend(
  apiKey: string,
  payload: {
    from: string;
    to: string[];
    reply_to?: string;
    subject: string;
    html: string;
    text: string;
  }
): Promise<{ id?: string; error?: string }> {
  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => ({}))) as {
    id?: string;
    message?: string;
    error?: string;
  };

  if (!res.ok) {
    return { error: data.message || data.error || `Resend HTTP ${res.status}` };
  }

  return { id: data.id };
}

export const onRequestOptions = async (): Promise<Response> => {
  return jsonResponse({ ok: true }, 204);
};

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { request, env } = context;

  if (!env.RESEND_API_KEY) {
    return jsonResponse(
      {
        ok: false,
        error: "RESEND_API_KEY is not configured in Cloudflare Pages environment.",
      },
      503
    );
  }

  let body: Partial<ContactEmailData>;
  try {
    body = (await request.json()) as Partial<ContactEmailData>;
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON payload." }, 400);
  }

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const phone = body.phone?.trim() || null;
  const message = body.message?.trim() || "";
  const source = body.source === "contact_modal" ? "contact_modal" : "landing_cta";

  if (!name || !email || !message) {
    return jsonResponse(
      { ok: false, error: "Fields 'name', 'email', and 'message' are required." },
      400
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ ok: false, error: "Invalid email address." }, 400);
  }

  const fromEmail = env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;
  const notifyEmail = env.RESEND_NOTIFY_EMAIL?.trim() || DEFAULT_NOTIFY_EMAIL;

  const emailData: ContactEmailData = {
    name,
    email,
    phone,
    message,
    source,
    submittedAt: new Date().toISOString(),
  };

  const userMail = buildUserConfirmationEmail(emailData);
  const teamMail = buildTeamNotificationEmail(emailData);

  const [userResult, teamResult] = await Promise.all([
    sendViaResend(env.RESEND_API_KEY, {
      from: fromEmail,
      to: [email],
      reply_to: notifyEmail,
      subject: userMail.subject,
      html: userMail.html,
      text: userMail.text,
    }),
    sendViaResend(env.RESEND_API_KEY, {
      from: fromEmail,
      to: [notifyEmail],
      reply_to: email,
      subject: teamMail.subject,
      html: teamMail.html,
      text: teamMail.text,
    }),
  ]);

  if (userResult.error && teamResult.error) {
    return jsonResponse(
      {
        ok: false,
        error: `Failed to send emails: ${userResult.error}`,
      },
      502
    );
  }

  return jsonResponse({
    ok: true,
    userEmailId: userResult.id || null,
    userEmailError: userResult.error || null,
    teamEmailId: teamResult.id || null,
    teamEmailError: teamResult.error || null,
  });
};
