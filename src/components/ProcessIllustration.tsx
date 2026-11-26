import React, { useState } from "react";
import { motion } from "framer-motion";
import { useModalStore } from "./useModalStore";
import { processData } from "../utils/Card1Data";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const phaseDeliverables: Record<string, string[]> = {
  discovery: [
    "Technical Requirement Document (TRD)",
    "System Architecture & Stack Blueprint",
    "Sprint Roadmap & Milestone Estimates",
  ],
  design: [
    "User Journey Maps & Wireframes",
    "Interactive High-Fidelity Figma Prototypes",
    "Tokenized Design System & Brand UI",
  ],
  development: [
    "Modular, Production-Tested Codebase",
    "Automated CI/CD & Staging Pipelines",
    "Bi-Weekly Sprint Demos & Reviews",
  ],
  testing: [
    "Penetration & Automated QA Audits",
    "Zero-Downtime Edge Deployment",
    "24/7/365 Telemetry & SLA Monitoring",
  ],
};

const DiscoveryGraphic: React.FC<{ active: boolean }> = ({ active }) => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28">
    {/* Radar Rings */}
    <circle cx="60" cy="60" r="46" fill="#08141C" stroke={active ? "#EF5613" : "#1E3242"} strokeWidth="2" />
    <circle cx="60" cy="60" r="30" fill="none" stroke={active ? "#EF5613" : "#1E3242"} strokeWidth="1.5" strokeDasharray="4 4" />
    <circle cx="60" cy="60" r="14" fill="none" stroke={active ? "#EF5613" : "#1E3242"} strokeWidth="1.5" />
    {/* Animated Pulse Ring */}
    <motion.circle
      cx="60"
      cy="60"
      r="16"
      fill="none"
      stroke="#EF5613"
      strokeWidth="2"
      animate={{ r: [14, 44], opacity: [0.9, 0] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
    />
    {/* Rotating Radar Sweep */}
    <motion.line
      x1="60"
      y1="60"
      x2="60"
      y2="16"
      stroke="#EF5613"
      strokeWidth="2.5"
      strokeLinecap="round"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      style={{ originX: "60px", originY: "60px" }}
    />
    {/* Target Nodes */}
    <circle cx="80" cy="40" r="4" fill="#4ADE80" />
    <circle cx="42" cy="76" r="3.5" fill="#EF5613" />
    <circle cx="60" cy="60" r="4.5" fill="#FFFFFF" />
  </svg>
);

const DesignGraphic: React.FC<{ active: boolean }> = ({ active }) => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28">
    {/* Artboard Frame */}
    <rect x="18" y="22" width="84" height="76" rx="10" fill="#08141C" stroke={active ? "#EF5613" : "#1E3242"} strokeWidth="2" />
    {/* Corner Anchor Handles */}
    <rect x="14" y="18" width="8" height="8" rx="2" fill="#EF5613" />
    <rect x="98" y="18" width="8" height="8" rx="2" fill="#EF5613" />
    <rect x="14" y="94" width="8" height="8" rx="2" fill="#EF5613" />
    <rect x="98" y="94" width="8" height="8" rx="2" fill="#EF5613" />
    {/* Top Header Bar Inside Artboard */}
    <rect x="28" y="32" width="38" height="7" rx="3.5" fill="#EF5613" />
    <circle cx="88" cy="35.5" r="4" fill="#4ADE80" />
    {/* Animated Bezier Vector Curve */}
    <motion.path
      d="M 28 76 Q 48 44, 64 66 T 92 52"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />
    {/* Color Swatches */}
    <circle cx="34" cy="86" r="4" fill="#EF5613" />
    <circle cx="46" cy="86" r="4" fill="#3B82F6" />
    <circle cx="58" cy="86" r="4" fill="#4ADE80" />
  </svg>
);

const DevelopmentGraphic: React.FC<{ active: boolean }> = ({ active }) => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28">
    {/* Terminal Window */}
    <rect x="14" y="24" width="92" height="72" rx="10" fill="#08141C" stroke={active ? "#EF5613" : "#1E3242"} strokeWidth="2" />
    <line x1="14" y1="40" x2="106" y2="40" stroke="#1E3242" strokeWidth="1.5" />
    <circle cx="25" cy="32" r="2.5" fill="#FF5F56" />
    <circle cx="34" cy="32" r="2.5" fill="#FFBD2E" />
    <circle cx="43" cy="32" r="2.5" fill="#27C93F" />
    {/* Animated Code Lines */}
    <motion.rect
      x="24"
      y="50"
      height="5"
      rx="2.5"
      fill="#EF5613"
      animate={{ width: [24, 52, 24] }}
      transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
    />
    <motion.rect
      x="32"
      y="62"
      height="5"
      rx="2.5"
      fill="#FFFFFF"
      animate={{ width: [46, 28, 46] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
    />
    <rect x="24" y="74" width="38" height="5" rx="2.5" fill="#4ADE80" />
    {/* Rotating Interlocked Gear on Corner */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      style={{ originX: "88px", originY: "76px" }}
    >
      <circle cx="88" cy="76" r="11" fill="#101F2B" stroke="#EF5613" strokeWidth="2.5" />
      <circle cx="88" cy="76" r="3.5" fill="#EF5613" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <rect
          key={deg}
          x="86.5"
          y="61"
          width="3"
          height="5"
          rx="1"
          fill="#EF5613"
          transform={`rotate(${deg} 88 76)`}
        />
      ))}
    </motion.g>
  </svg>
);

const TestingGraphic: React.FC<{ active: boolean }> = ({ active }) => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 sm:w-28 sm:h-28">
    {/* Security Shield */}
    <path
      d="M 60 16 L 96 30 V 58 C 96 80 78 96 60 104 C 42 96 24 80 24 58 V 30 L 60 16 Z"
      fill="#08141C"
      stroke={active ? "#EF5613" : "#1E3242"}
      strokeWidth="2.5"
    />
    {/* Inner Checkmark */}
    <path
      d="M 46 60 L 56 70 L 76 48"
      fill="none"
      stroke="#4ADE80"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Animated Security Scan Line */}
    <motion.line
      x1="32"
      x2="88"
      stroke="#EF5613"
      strokeWidth="2"
      strokeLinecap="round"
      animate={{ y1: [34, 86, 34], y2: [34, 86, 34], opacity: [0.4, 1, 0.4] }}
      transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
    />
    {/* Live Satellite Nodes */}
    <circle cx="20" cy="28" r="3.5" fill="#4ADE80" />
    <circle cx="100" cy="28" r="3.5" fill="#4ADE80" />
    <circle cx="60" cy="108" r="3.5" fill="#EF5613" />
  </svg>
);

const renderGraphic = (id: string, active: boolean) => {
  switch (id) {
    case "discovery":
      return <DiscoveryGraphic active={active} />;
    case "design":
      return <DesignGraphic active={active} />;
    case "development":
      return <DevelopmentGraphic active={active} />;
    case "testing":
    default:
      return <TestingGraphic active={active} />;
  }
};

const ProcessIllustration: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("development");
  const openModal = useModalStore((state) => state.openModal);

  const activePhase = processData.find((p) => p.id === activeId) || processData[0];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Staggered S-Curve Illustrated Pipeline */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start py-6">
        {/* Desktop Connecting Signal Path behind nodes */}
        <svg
          viewBox="0 0 1000 180"
          className="hidden lg:block absolute top-16 left-0 w-full h-44 pointer-events-none z-0"
          preserveAspectRatio="none"
        >
          <path
            d="M 120 45 C 240 45, 250 125, 375 125 C 500 125, 500 45, 625 45 C 750 45, 760 125, 880 125"
            fill="none"
            stroke="#1E3242"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <motion.path
            d="M 120 45 C 240 45, 250 125, 375 125 C 500 125, 500 45, 625 45 C 750 45, 760 125, 880 125"
            fill="none"
            stroke="#EF5613"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>

        {processData.map((phase, idx) => {
          const isActive = phase.id === activeId;
          const isStaggeredDown = idx % 2 === 1;

          return (
            <motion.div
              key={phase.id}
              onClick={() => setActiveId(phase.id)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative z-10 flex flex-col items-center text-center cursor-pointer group ${
                isStaggeredDown ? "lg:mt-16" : ""
              }`}
            >
              {/* Illustrated Graphic Hub */}
              <div
                className={`relative p-5 rounded-3xl border-2 transition-all duration-300 shadow-2xl ${
                  isActive
                    ? "bg-[#101F2B] border-[#EF5613] shadow-[0_0_35px_rgba(239,86,19,0.28)] scale-105"
                    : "bg-[#0D1A24] border-white/10 hover:border-white/30"
                }`}
              >
                {/* Step Number Pill */}
                <span
                  className={`absolute -top-3 -right-3 w-8 h-8 rounded-full text-xs font-black flex items-center justify-center border ${
                    isActive
                      ? "bg-[#EF5613] text-white border-white/30"
                      : "bg-[#08141C] text-gray-400 border-white/15"
                  }`}
                >
                  {phase.step}
                </span>

                {renderGraphic(phase.id, isActive)}
              </div>

              {/* Minimal Label Under Graphic */}
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#EF5613] mt-5">
                {phase.tagline}
              </span>
              <h3
                className={`text-xl font-black mt-1 transition-colors ${
                  isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                }`}
              >
                {phase.title}
              </h3>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Phase Specification Bar */}
      <motion.div
        key={activePhase.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-10 rounded-3xl bg-[#101F2B] border border-white/10 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-2xl"
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#EF5613] text-white text-xs font-black">
              PHASE {activePhase.step}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {activePhase.tagline}
            </span>
          </div>
          <h4 className="text-2xl font-black text-white">{activePhase.title}</h4>
          <p className="text-sm text-gray-300 mt-2 leading-relaxed">
            {activePhase.summary}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center gap-6 w-full lg:w-auto">
          <ul className="space-y-2 text-xs text-gray-200">
            {(phaseDeliverables[activePhase.id] || []).map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => openModal(activePhase.id)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Inspect Phase</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessIllustration;
