import React, { useEffect, useRef, useState } from "react";
import {
  FiMessageCircle,
  FiX,
  FiSend,
  FiUserCheck,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SaulTechLogo from "./SaulTechLogo";
import { submitLeadInquiry } from "../lib/supabase";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "What services do you offer?",
  "Can you manage & secure our existing app?",
  "How much does a project cost?",
];

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi there! I'm the SaulTech Support Assistant. Ask me about our custom software builds, QA & security audits, 24/7 managed support, or connect directly with an engineer.",
};

function renderFormattedText(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export const SupportChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Human handoff lead form state inside chat
  const [showHandoffForm, setShowHandoffForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadMessage, setLeadMessage] = useState("");
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);
  const [leadSent, setLeadSent] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, showHandoffForm, leadSent, isOpen]);

  const sendMessage = async (rawText: string) => {
    const text = rawText.trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        reply?: string;
      } | null;

      const replyText =
        data?.ok && data.reply
          ? data.reply
          : "You can reach our engineering team at **support@saultechitsolutions.com** or click **Talk to an Engineer** below and we'll respond within 24 hours.";

      setMessages((prev) => [
        ...prev,
        { id: `a-${Date.now()}`, role: "assistant", content: replyText },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `a-${Date.now()}`,
          role: "assistant",
          content:
            "I'm having trouble reaching the chat server right now, but you can still click **Talk to an Engineer** below or message us on WhatsApp!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError(null);

    if (!leadName.trim() || !leadEmail.trim() || !leadMessage.trim()) {
      setLeadError("Please fill in your name, email, and a short message.");
      return;
    }

    setLeadSubmitting(true);
    const res = await submitLeadInquiry({
      name: leadName,
      email: leadEmail,
      message: `[Support Chat Handoff] ${leadMessage}`,
      source: "contact_modal",
    });
    setLeadSubmitting(false);

    if (!res.ok) {
      setLeadError(res.error || "Could not send inquiry. Please try WhatsApp.");
      return;
    }

    setLeadSent(true);
    setShowHandoffForm(false);
    setMessages((prev) => [
      ...prev,
      {
        id: `a-handoff-${Date.now()}`,
        role: "assistant",
        content: `Thanks **${leadName.trim()}**! Your message has been sent to our engineering team (and a confirmation email is on its way to **${leadEmail.trim()}**). We'll reply within 24 hours.`,
      },
    ]);
    setLeadName("");
    setLeadEmail("");
    setLeadMessage("");
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Chat Drawer */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[75vh] rounded-2xl bg-[#08141C] border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3.5 bg-[#0B1622] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#1B243D] border border-[#EF5613]/40 flex items-center justify-center">
                <SaulTechLogo variant="mark" className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  SaulTech Support
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Replies in seconds</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <a
                href="https://wa.me/2347067659632"
                target="_blank"
                rel="noreferrer"
                title="Chat on WhatsApp"
                className="w-8 h-8 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 flex items-center justify-center transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close support chat"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#08141C]"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#EF5613] text-white rounded-br-sm"
                      : "bg-[#0F1E2B] border border-white/10 text-gray-200 rounded-bl-sm"
                  }`}
                >
                  {renderFormattedText(msg.content)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#0F1E2B] border border-white/10 rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF5613] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF5613] animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF5613] animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {/* Quick Prompts (only before user sends first message) */}
            {messages.length === 1 && !showHandoffForm && (
              <div className="pt-1 flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="text-left text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#EF5613]/20 border border-white/10 hover:border-[#EF5613]/50 text-gray-300 hover:text-white transition-all cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Inline Human Handoff Form */}
            {showHandoffForm && (
              <form
                onSubmit={handleLeadSubmit}
                className="mt-2 p-3.5 rounded-xl bg-[#0F1E2B] border border-[#EF5613]/40 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FB923C]">
                    Connect With an Engineer
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowHandoffForm(false)}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>

                {leadError && (
                  <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-2.5 py-1.5">
                    {leadError}
                  </p>
                )}

                <input
                  type="text"
                  placeholder="Your Name"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#08141C] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#EF5613]"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#08141C] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#EF5613]"
                />
                <textarea
                  rows={2}
                  placeholder="Briefly describe what you need..."
                  value={leadMessage}
                  onChange={(e) => setLeadMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#08141C] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#EF5613] resize-none"
                />
                <button
                  type="submit"
                  disabled={leadSubmitting}
                  className="w-full py-2 rounded-lg bg-[#EF5613] hover:bg-[#d94a0e] disabled:opacity-60 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {leadSubmitting ? "Sending..." : "Send to Engineering Team"}
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Action Bar: Talk to an Engineer */}
          {!showHandoffForm && (
            <div className="px-3.5 py-2 bg-[#0B1622] border-t border-white/5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setLeadSent(false);
                  setShowHandoffForm(true);
                }}
                className="text-xs font-semibold text-[#FB923C] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {leadSent ? (
                  <>
                    <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Sent — Send Another?</span>
                  </>
                ) : (
                  <>
                    <FiUserCheck className="w-3.5 h-3.5" />
                    <span>Talk to an Engineer</span>
                  </>
                )}
              </button>
              <span className="text-[11px] text-gray-500">24h SLA</span>
            </div>
          )}

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="p-3 bg-[#0B1622] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, audits, pricing..."
              className="flex-1 px-3.5 py-2 rounded-xl bg-[#08141C] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#EF5613]"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="w-9 h-9 rounded-xl bg-[#EF5613] hover:bg-[#d94a0e] disabled:opacity-40 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <FiSend className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close support chat" : "Open support chat"}
        className="group relative w-14 h-14 rounded-full bg-[#EF5613] hover:bg-[#d94a0e] text-white shadow-[0_10px_30px_rgba(239,86,19,0.45)] flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <>
            <FiMessageCircle className="w-6 h-6" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#08141C]" />
          </>
        )}
      </button>
    </div>
  );
};

export default SupportChatbot;
