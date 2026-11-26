import React from "react";
import { motion } from "framer-motion";

const itemsRow1 = [
  "FUNDY PAY — FINTECH MOBILE & WEB",
  "MUNE WORK — AI TALENT MATCHING",
  "MUSESPOT — PAID STREAMING PLATFORM",
  "KRIDENCE — FULL SCHOOL MANAGEMENT SAAS",
  "WORKSYNC — UNIFIED WORKSPACE OS",
  "AFFIX AI — SMART DOCUMENT SIGNER",
  "SYSTEM TIGHT — 360° FINANCIAL SECURITY",
  "HESTANE — ENTERPRISE HOSPITAL OS",
];

const itemsRow2 = [
  "48,500 TPS CORE THROUGHPUT",
  "PCI-DSS LEVEL 1 ARCHITECTURE",
  "SUB-20MS SETTLEMENT LATENCY",
  "NATIVE IOS & ANDROID ENGINEERING",
  "HIGH-AVAILABILITY KUBERNETES",
  "AUTONOMOUS MULTI-AGENT AI",
  "HL7 / FHIR CLINICAL COMPLIANCE",
  "99.999% PRODUCTION UPTIME",
];

export const VelocityTicker: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-4 bg-[#050D13] border-y border-white/10 select-none flex flex-col gap-2.5">
      {/* Row 1: Left Scroll */}
      <div className="flex w-max">
        <motion.div
          className="flex gap-4 whitespace-nowrap text-xs font-bold tracking-wider text-gray-300"
          animate={{ x: [0, -1400] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...itemsRow1, ...itemsRow1, ...itemsRow1].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-1.5 rounded-lg bg-[#101F2B] border border-white/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF5613]" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Right Scroll */}
      <div className="flex w-max">
        <motion.div
          className="flex gap-4 whitespace-nowrap text-[11px] font-mono font-semibold tracking-widest text-gray-400"
          animate={{ x: [-1400, 0] }}
          transition={{ repeat: Infinity, duration: 34, ease: "linear" }}
        >
          {[...itemsRow2, ...itemsRow2, ...itemsRow2].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-1.5 rounded-lg bg-[#08141C] border border-white/5"
            >
              <span className="text-[#EF5613]">/</span>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VelocityTicker;
