import React, { useState } from "react";
import { motion } from "framer-motion";
import { useModalStore } from "./useModalStore";
import { FiCpu, FiGitCommit, FiLayers, FiCheckCircle, FiArrowRight } from "react-icons/fi";

export const MechanicalGears: React.FC<{ speedMultiplier?: number }> = ({
  speedMultiplier = 1,
}) => {
  return (
    <div className="relative flex items-center justify-center py-6 select-none">
      {/* Large Primary Gear */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-28 h-28 sm:w-32 sm:h-32"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 16 / speedMultiplier,
          ease: "linear",
        }}
      >
        <circle cx="50" cy="50" r="32" fill="#08141C" stroke="#EF5613" strokeWidth="3" />
        <circle cx="50" cy="50" r="14" fill="none" stroke="#EF5613" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="50" cy="50" r="6" fill="#EF5613" />
        {[...Array(12)].map((_, i) => (
          <rect
            key={i}
            x="46.5"
            y="6"
            width="7"
            height="13"
            rx="1.5"
            fill="#EF5613"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </motion.svg>

      {/* Medium Interlocked Counter-Rotating Gear */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-20 h-20 sm:w-24 sm:h-24 -ml-5 -mt-12"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 10.6 / speedMultiplier,
          ease: "linear",
        }}
      >
        <circle cx="50" cy="50" r="28" fill="#08141C" stroke="#E2E8F0" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="8" fill="#E2E8F0" />
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="46"
            y="12"
            width="8"
            height="11"
            rx="1.5"
            fill="#E2E8F0"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
      </motion.svg>

      {/* Precision High-Speed Pinion Gear */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-14 h-14 sm:w-16 sm:h-16 -ml-4 mt-14"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 5.3 / speedMultiplier,
          ease: "linear",
        }}
      >
        <circle cx="50" cy="50" r="20" fill="#08141C" stroke="#4ADE80" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="5" fill="#4ADE80" />
        {[...Array(6)].map((_, i) => (
          <rect
            key={i}
            x="47"
            y="20"
            width="6"
            height="10"
            rx="1.5"
            fill="#4ADE80"
            transform={`rotate(${i * 60} 50 50)`}
          />
        ))}
      </motion.svg>
    </div>
  );
};

const pipelineStages = [
  { label: "Commit & Static Analysis", latency: "1.2s", icon: <FiGitCommit className="w-4 h-4 text-[#EF5613]" /> },
  { label: "Distributed Container Build", latency: "8.4s", icon: <FiLayers className="w-4 h-4 text-blue-400" /> },
  { label: "Automated Security & Load Test", latency: "4.1s", icon: <FiCpu className="w-4 h-4 text-purple-400" /> },
  { label: "Global Edge Propagation", latency: "0.8s", icon: <FiCheckCircle className="w-4 h-4 text-green-400" /> },
];

const KineticShowcase: React.FC = () => {
  const [throughputMode, setThroughputMode] = useState<1 | 3 | 6>(1);
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#EF5613]">
            Infrastructure & Execution Velocity
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-2 tracking-tight">
            Precision-Engineered Delivery Engine
          </h2>
        </div>
        <p className="text-sm text-gray-400 max-w-md leading-relaxed">
          Every product we ship runs on synchronized CI/CD pipelines, automated failover clusters, and sub-second edge telemetry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Synchronized Precision Gearbox (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-[#101F2B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                Core Execution Clock
              </span>
              <span className="text-xs font-mono font-bold text-[#EF5613]">
                {throughputMode === 1 ? "1.8k req/s" : throughputMode === 3 ? "14.5k req/s" : "48.5k req/s"}
              </span>
            </div>

            <div className="h-56 rounded-2xl bg-[#08141C] border border-white/5 flex items-center justify-center relative overflow-hidden">
              <MechanicalGears speedMultiplier={throughputMode} />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>SYNC: LOCKED</span>
                <span className="text-green-400">0.00% PACKET LOSS</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-3">
              Simulate Cluster Load Tier
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { mode: 1 as const, label: "Standard" },
                { mode: 3 as const, label: "Scale 3x" },
                { mode: 6 as const, label: "Peak 48k TPS" },
              ].map((tier) => (
                <button
                  key={tier.mode}
                  onClick={() => setThroughputMode(tier.mode)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    throughputMode === tier.mode
                      ? "bg-[#EF5613] text-white border-[#EF5613]"
                      : "bg-[#08141C] text-gray-300 border-white/10 hover:border-white/25"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Live Animated Deployment Pipeline (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-[#101F2B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                Zero-Downtime Deployment Topology
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                ALL REGIONS HEALTHY
              </span>
            </div>

            <div className="space-y-3">
              {pipelineStages.map((stage, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="p-4 rounded-2xl bg-[#08141C] border border-white/5 flex items-center justify-between hover:border-[#EF5613]/50 transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#101F2B] border border-white/10 flex items-center justify-center">
                      {stage.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{stage.label}</p>
                      <p className="text-[11px] text-gray-400 font-mono">
                        Stage 0{idx + 1} • Automated Verification
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-gray-400">{stage.latency}</span>
                    <span className="px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] font-bold font-mono">
                      PASS
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400">
              Built for mission-critical uptime across Africa, Europe, and North America.
            </span>
            <button
              onClick={() => openModal("contactform")}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss Your Infrastructure</span>
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KineticShowcase;
