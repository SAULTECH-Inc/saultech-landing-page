export interface ContactEmailData {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  source: "landing_cta" | "contact_modal";
  submittedAt?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getFirstName(fullName: string): string {
  const trimmed = fullName.trim();
  if (!trimmed) return "there";
  return trimmed.split(/\s+/)[0];
}

/**
 * Branded confirmation email sent to the visitor who submitted a contact/inquiry form.
 */
export function buildUserConfirmationEmail(data: ContactEmailData): {
  subject: string;
  html: string;
  text: string;
} {
  const firstName = escapeHtml(getFirstName(data.name));
  const safeName = escapeHtml(data.name.trim());
  const safeEmail = escapeHtml(data.email.trim());
  const safePhone = data.phone?.trim() ? escapeHtml(data.phone.trim()) : null;
  const safeMessage = escapeHtml(data.message.trim()).replace(/\n/g, "<br />");

  const subject = "We received your inquiry — SaulTech IT Solutions";

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#08141C;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#E2E8F0;">
  <!-- Preheader -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
    Thanks for reaching out, ${firstName}. Our engineering team will review your inquiry and reply within 24 hours.
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#08141C;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#0F1E2B;border:1px solid #1E3246;border-radius:16px;overflow:hidden;">
          
          <!-- Orange Top Accent -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#FBBF24 0%,#EF5613 60%,#EA580C 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:28px 32px 20px 32px;background-color:#0B1622;border-bottom:1px solid #1E3246;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="left" valign="middle">
                    <span style="display:inline-block;vertical-align:middle;width:10px;height:24px;background-color:#EF5613;border-radius:5px;margin-right:10px;"></span>
                    <span style="font-size:22px;font-weight:800;letter-spacing:1.5px;color:#FFFFFF;vertical-align:middle;">SAUL<span style="color:#EF5613;">TECH</span></span>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;padding:4px 10px;background-color:rgba(239,86,19,0.14);border:1px solid rgba(239,86,19,0.35);border-radius:999px;font-size:11px;font-weight:600;color:#FB923C;letter-spacing:0.4px;">
                      INQUIRY RECEIVED
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Body -->
          <tr>
            <td style="padding:32px;">
              <h1 style="margin:0 0 14px 0;font-size:24px;line-height:1.3;font-weight:700;color:#FFFFFF;">
                Hi ${firstName}, thanks for reaching out!
              </h1>
              <p style="margin:0 0 24px 0;font-size:15px;line-height:1.65;color:#CBD5E1;">
                We have received your message at <strong style="color:#FFFFFF;">SaulTech IT Solutions</strong>. Whether you are building a new digital product, securing an existing platform, or looking for ongoing engineering management, our team is on it.
              </p>

              <!-- What Happens Next -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#0B1622;border:1px solid #1E3246;border-radius:12px;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 22px;">
                    <p style="margin:0 0 14px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#EF5613;">
                      What Happens Next
                    </p>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td width="28" valign="top" style="padding-bottom:12px;font-size:13px;font-weight:700;color:#EF5613;">01</td>
                        <td valign="top" style="padding-bottom:12px;font-size:14px;line-height:1.5;color:#CBD5E1;">
                          <strong style="color:#FFFFFF;">Technical Review:</strong> A senior engineer reviews your brief and requirements.
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top" style="padding-bottom:12px;font-size:13px;font-weight:700;color:#EF5613;">02</td>
                        <td valign="top" style="padding-bottom:12px;font-size:14px;line-height:1.5;color:#CBD5E1;">
                          <strong style="color:#FFFFFF;">Response Within 24 Hours:</strong> We reach out by email or phone/WhatsApp to schedule a focused 20-minute discovery call.
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top" style="font-size:13px;font-weight:700;color:#EF5613;">03</td>
                        <td valign="top" style="font-size:14px;line-height:1.5;color:#CBD5E1;">
                          <strong style="color:#FFFFFF;">Actionable Roadmap:</strong> You get a clear technical plan, timeline, and transparent estimate.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Submission Summary -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#132536;border-left:3px solid #EF5613;border-radius:8px;margin-bottom:28px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 10px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:#94A3B8;">
                      Copy of Your Submission
                    </p>
                    <p style="margin:0 0 6px 0;font-size:13px;color:#CBD5E1;">
                      <strong style="color:#FFFFFF;">Name:</strong> ${safeName}
                    </p>
                    <p style="margin:0 0 6px 0;font-size:13px;color:#CBD5E1;">
                      <strong style="color:#FFFFFF;">Email:</strong> ${safeEmail}
                    </p>
                    ${
                      safePhone
                        ? `<p style="margin:0 0 6px 0;font-size:13px;color:#CBD5E1;"><strong style="color:#FFFFFF;">Phone:</strong> ${safePhone}</p>`
                        : ""
                    }
                    <p style="margin:10px 0 0 0;font-size:13px;line-height:1.6;color:#E2E8F0;">
                      <strong style="color:#FFFFFF;">Message:</strong><br />${safeMessage}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- CTAs -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="border-radius:8px;background-color:#EF5613;">
                    <a href="https://wa.me/2347067659632" target="_blank" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:#FFFFFF;text-decoration:none;">
                      Need a Faster Reply? Chat on WhatsApp &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;background-color:#0B1622;border-top:1px solid #1E3246;font-size:12px;line-height:1.6;color:#94A3B8;">
              <p style="margin:0 0 4px 0;color:#CBD5E1;font-weight:600;">SaulTech IT Solutions</p>
              <p style="margin:0;">
                <a href="mailto:support@saultechitsolutions.com" style="color:#FB923C;text-decoration:none;">support@saultechitsolutions.com</a>
                &nbsp;&middot;&nbsp; +234 706 765 9632 &nbsp;&middot;&nbsp; Abuja, Nigeria
              </p>
              <p style="margin:6px 0 0 0;">
                <a href="https://saultechitsolutions.com" style="color:#94A3B8;text-decoration:underline;">saultechitsolutions.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `Hi ${getFirstName(data.name)},`,
    "",
    "Thanks for reaching out to SaulTech IT Solutions! We have received your inquiry and our engineering team will review it and get back to you within 24 hours.",
    "",
    "WHAT HAPPENS NEXT:",
    "1. Technical Review — A senior engineer reviews your brief and requirements.",
    "2. Discovery Call — We reach out via email, phone, or WhatsApp within 24 hours.",
    "3. Actionable Roadmap — You receive a clear plan, timeline, and transparent estimate.",
    "",
    "YOUR SUBMISSION:",
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    data.phone?.trim() ? `Phone: ${data.phone.trim()}` : null,
    `Message:\n${data.message.trim()}`,
    "",
    "Need an immediate response? Chat with us on WhatsApp: https://wa.me/2347067659632",
    "",
    "—",
    "SaulTech IT Solutions",
    "support@saultechitsolutions.com | +234 706 765 9632 | Abuja, Nigeria",
    "https://saultechitsolutions.com",
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return { subject, html, text };
}

/**
 * Internal notification email sent to the SaulTech team when a new lead submits a form.
 */
export function buildTeamNotificationEmail(data: ContactEmailData): {
  subject: string;
  html: string;
  text: string;
} {
  const safeName = escapeHtml(data.name.trim());
  const safeEmail = escapeHtml(data.email.trim());
  const safePhone = data.phone?.trim() ? escapeHtml(data.phone.trim()) : "Not provided";
  const safeMessage = escapeHtml(data.message.trim()).replace(/\n/g, "<br />");
  const sourceLabel = data.source === "contact_modal" ? "Contact Modal" : "Landing Page CTA";
  const timestamp = data.submittedAt || new Date().toISOString();

  const subject = `New Lead Inquiry: ${data.name.trim()} (${sourceLabel})`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0F172A;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="padding:28px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:580px;background-color:#FFFFFF;border:1px solid #CBD5E1;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:20px 24px;background-color:#0B1622;color:#FFFFFF;">
              <span style="font-size:18px;font-weight:800;letter-spacing:1px;">SAUL<span style="color:#EF5613;">TECH</span></span>
              <span style="float:right;font-size:12px;font-weight:600;color:#FB923C;">${escapeHtml(sourceLabel)}</span>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <h2 style="margin:0 0 16px 0;font-size:20px;color:#0F172A;">New Website Inquiry</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="6" border="0" style="font-size:14px;border-collapse:collapse;">
                <tr>
                  <td width="110" style="color:#64748B;font-weight:600;">Name:</td>
                  <td style="color:#0F172A;font-weight:600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="color:#64748B;font-weight:600;">Email:</td>
                  <td><a href="mailto:${safeEmail}" style="color:#EF5613;text-decoration:none;font-weight:600;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="color:#64748B;font-weight:600;">Phone:</td>
                  <td style="color:#0F172A;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="color:#64748B;font-weight:600;">Source:</td>
                  <td style="color:#0F172A;">${escapeHtml(sourceLabel)}</td>
                </tr>
                <tr>
                  <td style="color:#64748B;font-weight:600;">Submitted:</td>
                  <td style="color:#475569;font-size:13px;">${escapeHtml(timestamp)}</td>
                </tr>
              </table>
              <div style="margin-top:18px;padding:16px;background-color:#F8FAFC;border:1px solid #E2E8F0;border-left:4px solid #EF5613;border-radius:6px;">
                <p style="margin:0 0 6px 0;font-size:12px;font-weight:700;text-transform:uppercase;color:#64748B;">Message</p>
                <p style="margin:0;font-size:14px;line-height:1.6;color:#1E293B;">${safeMessage}</p>
              </div>
              <div style="margin-top:20px;">
                <a href="mailto:${safeEmail}?subject=Re:%20Your%20SaulTech%20Inquiry" style="display:inline-block;padding:10px 18px;background-color:#EF5613;color:#FFFFFF;font-size:13px;font-weight:700;text-decoration:none;border-radius:6px;">
                  Reply to ${safeName}
                </a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `New Website Inquiry (${sourceLabel})`,
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    `Phone: ${data.phone?.trim() || "Not provided"}`,
    `Submitted: ${timestamp}`,
    "",
    "Message:",
    data.message.trim(),
  ].join("\n");

  return { subject, html, text };
}
