import React from "react";
import { motion } from "framer-motion";

const itemsRow1 = [
  "⚡ FUNDY PAY • FINTECH MOBILE & WEB",
  "💼 MUNE WORK • AI TALENT MATCHING",
  "🎵 MUSESPOT • GET-PAID STREAMING",
  "🏫 KRIDENCE • FULL SCHOOL OS",
  "📊 WORKSYNC • ZOHO & CLICKUP RIVAL",
  "📄 AFFIX AI • AUTO-APPEND SIGNER",
  "🛡️ SYSTEM TIGHT • 360° FINANCIAL SECURITY",
  "🏥 HESTANE • 18+ HOSPITAL NETWORKS",
];

const itemsRow2 = [
  "🚀 48,500 TPS ENGINE",
  "🔒 PCI-DSS LEVEL 1 COMPLIANT",
  "🤸 60 FPS FLUID MOTION",
  "⚙️ SYNCHRONIZED ARCHITECTURE",
  "📱 IOS & ANDROID APPS",
  "🌐 CLOUD-NATIVE DEPLOYMENTS",
  "🤖 AUTONOMOUS MULTI-AGENT AI",
  "✨ SUB-20MS API SETTLEMENT",
];

export const VelocityTicker: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-4 bg-[#050D13] border-y border-white/10 select-none flex flex-col gap-2">
      {/* Row 1: Fast Left Scroll */}
      <div className="flex w-max">
        <motion.div
          className="flex gap-6 whitespace-nowrap text-xs sm:text-sm font-black tracking-wider text-gray-300"
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...itemsRow1, ...itemsRow1, ...itemsRow1].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-[#101F2B] border border-white/5 hover:border-[#EF5613] transition-colors cursor-pointer"
            >
              <span className="text-[#EF5613] font-bold">●</span>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Smooth Right Scroll */}
      <div className="flex w-max">
        <motion.div
          className="flex gap-6 whitespace-nowrap text-xs sm:text-sm font-mono font-bold tracking-widest text-[#EF5613]"
          animate={{ x: [-1200, 0] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          {[...itemsRow2, ...itemsRow2, ...itemsRow2].map((text, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-3 py-1 rounded-lg bg-[#08141C] border border-[#EF5613]/20 hover:border-[#EF5613] transition-colors"
            >
              <span className="text-green-400">⚡</span>
              <span>{text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default VelocityTicker;
