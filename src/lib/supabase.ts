import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface LeadInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source: "landing_cta" | "contact_modal";
}

/**
 * Persists a visitor inquiry to the Supabase `inquiries` table
 * and triggers confirmation + notification emails via `/api/contact` (Resend).
 */
export async function submitLeadInquiry(
  payload: LeadInquiryPayload
): Promise<{ ok: boolean; error?: string; emailSent?: boolean }> {
  if (!supabase) {
    return {
      ok: false,
      error:
        "Supabase is not configured yet. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.",
    };
  }

  const trimmedPayload = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone?.trim() || null,
    message: payload.message.trim(),
    source: payload.source,
  };

  const { error } = await supabase.from("inquiries").insert([
    {
      ...trimmedPayload,
      message: trimmedPayload.message || null,
    },
  ]);

  if (error) {
    return { ok: false, error: error.message };
  }

  // Trigger Resend confirmation + team notification email (non-blocking if email service isn't configured yet)
  let emailSent = false;
  try {
    const emailRes = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trimmedPayload),
    });
    if (emailRes.ok) {
      const data = (await emailRes.json().catch(() => ({}))) as { ok?: boolean };
      emailSent = Boolean(data.ok);
    }
  } catch {
    // Keep Supabase lead capture successful even if email dispatch fails
  }

  return { ok: true, emailSent };
}
