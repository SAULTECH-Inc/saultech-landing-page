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
 * Persists a visitor inquiry to the Supabase `inquiries` table.
 */
export async function submitLeadInquiry(
  payload: LeadInquiryPayload
): Promise<{ ok: boolean; error?: string }> {
  if (!supabase) {
    return {
      ok: false,
      error:
        "Supabase is not configured yet. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.",
    };
  }

  const { error } = await supabase.from("inquiries").insert([
    {
      name: payload.name.trim(),
      email: payload.email.trim(),
      phone: payload.phone?.trim() || null,
      message: payload.message.trim() || null,
      source: payload.source,
    },
  ]);

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true };
}
