interface Env {
  GEMINI_API_KEY?: string;
  OPENAI_API_KEY?: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const SYSTEM_PROMPT = `You are the SaulTech IT Solutions Support & Consultancy Assistant.
Be concise, helpful, warm, and practical (2-4 short sentences unless a list is helpful).

Company facts:
- Name: SaulTech IT Solutions (Abuja, Nigeria; serving clients globally)
- Full-lifecycle software consultancy: we build custom web & mobile apps, run QA testing & security audits, and deploy, monitor & manage existing software 24/7.
- Key capabilities: Custom Web & Mobile Apps, UI/UX & Product Design, Cloud & DevOps (AWS, Cloudflare, CI/CD), QA & Security Audits, API & Systems Integration, Legacy Modernization, 24/7 Managed Support.
- Flagship work: FinTech & Payment Systems, E-Commerce Platforms, Healthcare Portals, Logistics & Fleet Tracking, Enterprise SaaS Dashboards.
- Process: 1) Discovery & Audit, 2) Architecture & Design, 3) Agile Build & QA, 4) Launch & 24/7 Support.
- Contact: support@saultechitsolutions.com | Phone/WhatsApp: +234 706 765 9632 / +234 808 830 56 | Website: https://saultechitsolutions.com

If a user wants a quote, project scoping, or to speak with an engineer, encourage them to share their email/project brief in the chat or click "Talk to an Engineer" so we can follow up within 24 hours.`;

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

function getRuleBasedReply(userMessage: string): string {
  const q = userMessage.toLowerCase();

  if (/(price|cost|quote|budget|how much|rate|pricing)/.test(q)) {
    return "Project pricing depends on scope, integrations, and timeline. Small MVPs or audits typically start with a fixed-scope milestone, while ongoing engineering and 24/7 management are billed monthly. Click **Talk to an Engineer** below to share a quick brief and get a transparent estimate within 24 hours.";
  }

  if (/(existing|manage|maintain|legacy|audit|security|test|qa|bug|fix)/.test(q)) {
    return "Yes! Beyond building new products, we step into existing codebases to run QA & security audits, fix reliability bottlenecks, modernize infrastructure, and provide 24/7 monitoring & managed support. Want us to review your current system?";
  }

  if (/(service|offer|do you do|build|capabilit|stack|tech)/.test(q)) {
    return "We cover the full software lifecycle: **Custom Web & Mobile Apps**, **UI/UX Design**, **Cloud & DevOps**, **QA & Security Audits**, and **24/7 Managed Support**. Which area are you looking to get help with?";
  }

  if (/(time|long|timeline|duration|fast|when)/.test(q)) {
    return "Most discovery & technical audits take 1–2 weeks, MVPs ship in 4–8 weeks, and full production platforms follow 2-week sprint milestones with live staging previews. We'll map out an exact timeline on our 20-minute scoping call.";
  }

  if (/(contact|email|phone|whatsapp|call|human|engineer|agent|speak|talk|location|office|abuja)/.test(q)) {
    return "You can reach our team directly at **support@saultechitsolutions.com**, call/WhatsApp **+234 706 765 9632**, or click **Talk to an Engineer** below to leave your details—we respond within 24 hours (Abuja, Nigeria & global remote).";
  }

  if (/(hi|hello|hey|good morning|good afternoon|good evening)/.test(q)) {
    return "Hello! Welcome to **SaulTech IT Solutions**. I can help with questions about our software engineering, QA & security audits, 24/7 managed support, or connect you directly with an engineer. What are you working on?";
  }

  return "Thanks for sharing! Our engineering team handles custom builds, QA/security audits, and ongoing 24/7 software management. Click **Talk to an Engineer** below to send your brief directly to our team, or chat with us on WhatsApp for an immediate response.";
}

async function callGemini(apiKey: string, messages: ChatMessage[]): Promise<string | null> {
  const contents = messages.slice(-10).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { temperature: 0.5, maxOutputTokens: 350 },
      }),
    }
  );

  if (!res.ok) return null;
  const data = (await res.json().catch(() => null)) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  } | null;

  return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
}

async function callOpenAI(apiKey: string, messages: ChatMessage[]): Promise<string | null> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.5,
      max_tokens: 350,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages.slice(-10)],
    }),
  });

  if (!res.ok) return null;
  const data = (await res.json().catch(() => null)) as {
    choices?: Array<{ message?: { content?: string } }>;
  } | null;

  return data?.choices?.[0]?.message?.content?.trim() || null;
}

export const onRequestOptions = async (): Promise<Response> => {
  return jsonResponse({ ok: true }, 204);
};

export const onRequestPost = async (context: PagesContext): Promise<Response> => {
  const { request, env } = context;

  let body: { messages?: ChatMessage[] };
  try {
    body = (await request.json()) as { messages?: ChatMessage[] };
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON." }, 400);
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content?.trim() || "";

  if (!lastUser) {
    return jsonResponse({ ok: false, error: "Message is required." }, 400);
  }

  let reply: string | null = null;
  let mode: "gemini" | "openai" | "assistant" = "assistant";

  if (env.GEMINI_API_KEY) {
    reply = await callGemini(env.GEMINI_API_KEY, messages).catch(() => null);
    if (reply) mode = "gemini";
  } else if (env.OPENAI_API_KEY) {
    reply = await callOpenAI(env.OPENAI_API_KEY, messages).catch(() => null);
    if (reply) mode = "openai";
  }

  if (!reply) {
    reply = getRuleBasedReply(lastUser);
    mode = "assistant";
  }

  return jsonResponse({ ok: true, reply, mode });
};
