import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

/* ─── Phase 1: Discovery — Radar + topology map ─── */
const DiscoveryArt: React.FC<{ active: boolean }> = ({ active }) => (
  <svg viewBox="0 0 320 220" className="w-full h-full" aria-hidden>
    {/* Background grid */}
    {Array.from({ length: 9 }).map((_, i) => (
      <line key={`hg${i}`} x1="0" y1={i * 28} x2="320" y2={i * 28}
        stroke="#1E3242" strokeWidth="0.6" strokeDasharray="4 6" />
    ))}
    {Array.from({ length: 12 }).map((_, i) => (
      <line key={`vg${i}`} x1={i * 29} y1="0" x2={i * 29} y2="220"
        stroke="#1E3242" strokeWidth="0.6" strokeDasharray="4 6" />
    ))}

    {/* Large radar dish circle */}
    <circle cx="160" cy="110" r="90" fill="none" stroke="#1E3242" strokeWidth="1.5" />
    <circle cx="160" cy="110" r="66" fill="none" stroke="#1E3242" strokeWidth="1" strokeDasharray="5 5" />
    <circle cx="160" cy="110" r="40" fill="none" stroke={active ? "#EF5613" : "#1E3242"} strokeWidth="1.5" />
    <circle cx="160" cy="110" r="14" fill={active ? "rgba(239,86,19,0.15)" : "none"} stroke="#EF5613" strokeWidth="2" />

    {/* Spinning sweep arm */}
    <motion.g
      style={{ originX: "160px", originY: "110px" }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
    >
      <line x1="160" y1="110" x2="160" y2="22" stroke="#EF5613" strokeWidth="2.5" strokeLinecap="round" />
      {/* Gradient trail approximation — 3 fading lines */}
      <line x1="160" y1="110" x2="193" y2="30" stroke="#EF5613" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="160" y1="110" x2="220" y2="58" stroke="#EF5613" strokeWidth="1" strokeOpacity="0.2" />
    </motion.g>

    {/* Pulsing range ring */}
    <motion.circle cx="160" cy="110" r="20" fill="none" stroke="#EF5613" strokeWidth="2"
      animate={{ r: [14, 90], opacity: [0.8, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
    />

    {/* Target blips */}
    <motion.circle cx="218" cy="58" r="6" fill="#4ADE80"
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
      transition={{ repeat: Infinity, duration: 2, delay: 0 }}
    />
    <motion.circle cx="104" cy="148" r="5" fill="#EF5613"
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
      transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}
    />
    <motion.circle cx="236" cy="142" r="4" fill="#60A5FA"
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
      transition={{ repeat: Infinity, duration: 2, delay: 1.3 }}
    />
    <circle cx="160" cy="110" r="5" fill="white" />

    {/* Corner metric badge */}
    <rect x="6" y="186" width="110" height="26" rx="5" fill="#101F2B" stroke="#EF5613" strokeWidth="1" />
    <text x="14" y="203" fill="#EF5613" fontSize="8" fontWeight="bold" fontFamily="monospace">SCOPE LOCKED — 100%</text>

    {/* Top-right label */}
    <rect x="204" y="6" width="108" height="20" rx="4" fill="#08141C" stroke="#1E3242" strokeWidth="1" />
    <text x="212" y="19" fill="#9CA3AF" fontSize="8" fontFamily="monospace">DISCOVERY ENGINE v2</text>
  </svg>
);

/* ─── Phase 2: Design — Figma-style artboard ─── */
const DesignArt: React.FC<{ active: boolean }> = ({ active }) => (
  <svg viewBox="0 0 320 220" className="w-full h-full" aria-hidden>
    {/* Background */}
    {Array.from({ length: 8 }).map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 32} x2="320" y2={i * 32}
        stroke="#1E3242" strokeWidth="0.5" strokeDasharray="3 8" />
    ))}

    {/* Main artboard */}
    <rect x="30" y="20" width="180" height="140" rx="8"
      fill="#08141C" stroke={active ? "#EF5613" : "#1E3242"} strokeWidth="2" />
    {/* Title bar */}
    <rect x="30" y="20" width="180" height="24" rx="8" fill="#101F2B" />
    <rect x="30" y="32" width="180" height="12" fill="#101F2B" />
    <circle cx="46" cy="32" r="4" fill="#FF5F56" />
    <circle cx="58" cy="32" r="4" fill="#FFBD2E" />
    <circle cx="70" cy="32" r="4" fill="#27C93F" />
    <text x="90" y="36" fill="#6B7280" fontSize="8" fontFamily="monospace">ui-system.fig</text>

    {/* Wireframe content inside artboard */}
    <rect x="42" y="54" width="80" height="8" rx="4" fill="#EF5613" />
    <rect x="42" y="68" width="56" height="5" rx="2.5" fill="#2D3D4A" />
    <rect x="42" y="79" width="68" height="5" rx="2.5" fill="#2D3D4A" />
    <rect x="42" y="90" width="48" height="5" rx="2.5" fill="#2D3D4A" />

    {/* Component preview card */}
    <rect x="130" y="54" width="68" height="90" rx="6" fill="#101F2B" stroke="#1E3242" strokeWidth="1" />
    <rect x="138" y="62" width="52" height="28" rx="4" fill="#EF5613" opacity="0.2" />
    <rect x="138" y="98" width="36" height="5" rx="2.5" fill="#3D4D5A" />
    <rect x="138" y="109" width="52" height="5" rx="2.5" fill="#3D4D5A" />
    <rect x="138" y="120" width="28" height="12" rx="4" fill="#EF5613" />

    {/* Animated bezier curve tool path */}
    <motion.path
      d="M 48 150 Q 90 108, 128 138 T 196 118"
      fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    />
    {/* Bezier anchor nodes */}
    <circle cx="48" cy="150" r="4" fill="#EF5613" />
    <circle cx="196" cy="118" r="4" fill="#EF5613" />
    <circle cx="128" cy="138" r="3" fill="white" />

    {/* Corner handles */}
    <rect x="26" y="16" width="8" height="8" rx="2" fill="#EF5613" />
    <rect x="206" y="16" width="8" height="8" rx="2" fill="#EF5613" />
    <rect x="26" y="156" width="8" height="8" rx="2" fill="#EF5613" />
    <rect x="206" y="156" width="8" height="8" rx="2" fill="#EF5613" />

    {/* Floating layer panel */}
    <rect x="224" y="20" width="88" height="130" rx="8" fill="#101F2B" stroke="#1E3242" strokeWidth="1" />
    <text x="234" y="36" fill="#9CA3AF" fontSize="8" fontFamily="monospace">LAYERS</text>
    {["NavBar", "HeroCard", "CtaBlock", "Footer"].map((name, i) => (
      <g key={name}>
        <rect x="232" y={46 + i * 24} width="72" height="18" rx="4"
          fill={i === 1 ? "#EF5613" : "#0D1A24"}
          stroke={i === 1 ? "#EF5613" : "#1E3242"} strokeWidth="1" />
        <text x="240" y={58 + i * 24} fill={i === 1 ? "white" : "#6B7280"} fontSize="8" fontFamily="monospace">{name}</text>
      </g>
    ))}

    {/* Color palette row */}
    {["#EF5613", "#3B82F6", "#4ADE80", "#A855F7", "#FFFFFF"].map((c, i) => (
      <circle key={c} cx={232 + i * 16} cy="176" r="6" fill={c} />
    ))}

    {/* Badge */}
    <rect x="6" y="186" width="92" height="26" rx="5" fill="#101F2B" stroke="#EF5613" strokeWidth="1" />
    <text x="14" y="203" fill="#EF5613" fontSize="8" fontWeight="bold" fontFamily="monospace">WCAG AAA — 100%</text>
  </svg>
);

/* ─── Phase 3: Development — Terminal + CI pipeline ─── */
const DevelopmentArt: React.FC<{ active: boolean }> = ({ active }) => {
  const lines = [
    { text: "pub async fn execute_settlement(", color: "#60A5FA" },
    { text: "  tx: Transaction) -> Result<Receipt> {", color: "#60A5FA" },
    { text: "  let v = tx.verify_crypto_sigs().await?;", color: "#9CA3AF" },
    { text: "  vault::commit_atomic(v, Instant).await", color: "#4ADE80" },
    { text: "}", color: "#60A5FA" },
  ];

  return (
    <svg viewBox="0 0 320 220" className="w-full h-full" aria-hidden>
      {/* Terminal window */}
      <rect x="10" y="10" width="195" height="155" rx="10"
        fill="#08141C" stroke={active ? "#EF5613" : "#1E3242"} strokeWidth="2" />
      {/* Title bar */}
      <rect x="10" y="10" width="195" height="26" rx="10" fill="#101F2B" />
      <rect x="10" y="24" width="195" height="12" fill="#101F2B" />
      <circle cx="26" cy="23" r="4" fill="#FF5F56" />
      <circle cx="40" cy="23" r="4" fill="#FFBD2E" />
      <circle cx="54" cy="23" r="4" fill="#27C93F" />
      <text x="68" y="27" fill="#6B7280" fontSize="8" fontFamily="monospace">core_engine.rs — compiled 100%</text>
      {/* Code lines */}
      {lines.map((l, i) => (
        <motion.text
          key={i} x="18" y={56 + i * 20}
          fill={l.color} fontSize="8.5" fontFamily="monospace"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.3, duration: 0.4 }}
        >
          {l.text}
        </motion.text>
      ))}
      {/* Cursor blink */}
      <motion.rect x="18" y="156" width="6" height="12" rx="1" fill="#EF5613"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
      />

      {/* CI/CD Pipeline — right side */}
      <rect x="216" y="10" width="96" height="155" rx="8" fill="#0A1822" stroke="#1E3242" strokeWidth="1" />
      <text x="226" y="28" fill="#9CA3AF" fontSize="8" fontFamily="monospace">CI / CD</text>

      {[
        { label: "Build", color: "#4ADE80", delay: 0 },
        { label: "Test", color: "#4ADE80", delay: 0.3 },
        { label: "Stage", color: "#FBBF24", delay: 0.6 },
        { label: "Deploy", color: "#EF5613", delay: 0.9 },
      ].map((step, i) => (
        <g key={step.label}>
          {/* Connector line */}
          {i < 3 && (
            <motion.line
              x1="264" y1={56 + i * 32 + 14} x2="264" y2={56 + i * 32 + 32}
              stroke={step.color} strokeWidth="1.5" strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: step.delay + 0.3, duration: 0.4 }}
            />
          )}
          <motion.rect
            x="224" y={52 + i * 32} width="80" height="22" rx="5"
            fill="#101F2B" stroke={step.color} strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: step.delay, duration: 0.3 }}
          />
          <motion.circle cx="238" cy={63 + i * 32} r="4" fill={step.color}
            animate={step.label === "Deploy" ? { scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] } : {}}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
          <text x="248" y={67 + i * 32} fill="white" fontSize="9" fontFamily="monospace">{step.label}</text>
        </g>
      ))}

      {/* Rotating gear in bottom-left */}
      <motion.g style={{ originX: "54px", originY: "178px" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <circle cx="54" cy="178" r="16" fill="#101F2B" stroke="#EF5613" strokeWidth="2" />
        <circle cx="54" cy="178" r="5" fill="#EF5613" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect key={deg} x="52.5" y="158" width="3" height="6" rx="1.5" fill="#EF5613"
            transform={`rotate(${deg} 54 178)`} />
        ))}
      </motion.g>

      {/* Throughput badge */}
      <rect x="80" y="168" width="122" height="26" rx="5" fill="#101F2B" stroke="#EF5613" strokeWidth="1" />
      <text x="90" y="185" fill="#EF5613" fontSize="8" fontWeight="bold" fontFamily="monospace">48,500 TPS READY</text>
    </svg>
  );
};

/* ─── Phase 4: Testing — Security + Telemetry ─── */
const TestingArt: React.FC<{ active: boolean }> = ({ active }) => (
  <svg viewBox="0 0 320 220" className="w-full h-full" aria-hidden>
    {/* Background radial lines */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      return (
        <line key={i}
          x1="160" y1="110"
          x2={160 + Math.cos(angle) * 140}
          y2={110 + Math.sin(angle) * 140}
          stroke="#1E3242" strokeWidth="0.5"
        />
      );
    })}

    {/* Shield */}
    <path
      d="M 160 18 L 230 46 V 102 C 230 148 196 174 160 190 C 124 174 90 148 90 102 V 46 L 160 18 Z"
      fill="#08141C" stroke={active ? "#EF5613" : "#1E3242"} strokeWidth="2.5"
    />
    {/* Inner shield detail */}
    <path
      d="M 160 36 L 212 56 V 100 C 212 136 190 155 160 168 C 130 155 108 136 108 100 V 56 L 160 36 Z"
      fill="none" stroke="#1E3242" strokeWidth="1.5"
    />

    {/* Checkmark */}
    <motion.path
      d="M 136 100 L 152 118 L 184 84"
      fill="none" stroke="#4ADE80" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />

    {/* Animated scan line */}
    <motion.line
      x1="94" x2="226" stroke="#EF5613" strokeWidth="2.5" strokeLinecap="round"
      animate={{ y1: [52, 158, 52], y2: [52, 158, 52], opacity: [0.3, 1, 0.3] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />

    {/* Live status nodes around shield */}
    {[
      { cx: 50, cy: 60, label: "WAF", color: "#4ADE80" },
      { cx: 270, cy: 60, label: "CDN", color: "#4ADE80" },
      { cx: 50, cy: 160, label: "PCI", color: "#EF5613" },
      { cx: 270, cy: 160, label: "SLA", color: "#EF5613" },
    ].map((n) => (
      <g key={n.label}>
        <motion.circle cx={n.cx} cy={n.cy} r="14"
          fill="#101F2B" stroke={n.color} strokeWidth="2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: Math.random() }}
        />
        <text x={n.cx} y={n.cy + 4} textAnchor="middle"
          fill={n.color} fontSize="8" fontWeight="bold" fontFamily="monospace">{n.label}</text>
        {/* Connector lines to shield */}
        <line x1={n.cx > 160 ? n.cx - 14 : n.cx + 14}
          y1={n.cy}
          x2={n.cx > 160 ? 230 : 90}
          y2={110}
          stroke={n.color} strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5" />
      </g>
    ))}

    {/* Uptime badge */}
    <rect x="80" y="192" width="160" height="22" rx="5" fill="#101F2B" stroke="#4ADE80" strokeWidth="1" />
    <text x="96" y="207" fill="#4ADE80" fontSize="8" fontWeight="bold" fontFamily="monospace">99.999% UPTIME — 0 BREACHES</text>
  </svg>
);

const artMap: Record<string, React.FC<{ active: boolean }>> = {
  discovery: DiscoveryArt,
  design: DesignArt,
  development: DevelopmentArt,
  testing: TestingArt,
};

const ProcessIllustration: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("development");
  const openModal = useModalStore((state) => state.openModal);
  const activePhase = processData.find((p) => p.id === activeId) || processData[0];

  const bgAccent: Record<string, string> = {
    discovery: "rgba(239,86,19,0.04)",
    design: "rgba(59,130,246,0.04)",
    development: "rgba(239,86,19,0.07)",
    testing: "rgba(74,222,128,0.04)",
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Phase Selector Strip */}
      <div className="flex gap-2 sm:gap-3 justify-center flex-wrap mb-6">
        {processData.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActiveId(phase.id)}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border cursor-pointer ${
              activeId === phase.id
                ? "bg-[#EF5613] text-white border-[#EF5613]"
                : "bg-transparent text-gray-400 border-white/15 hover:border-white/40 hover:text-white"
            }`}
          >
            <span className="text-[10px] opacity-60 mr-1">{phase.step}.</span>
            {phase.title}
          </button>
        ))}
      </div>

      {/* Main Illustrated Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="rounded-3xl border border-white/10 overflow-hidden"
          style={{ background: bgAccent[activeId] ?? "transparent" }}
        >
          {/* Top: 4 column visual grid  */}
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {processData.map((phase, idx) => {
              const Art = artMap[phase.id];
              const isActive = phase.id === activeId;
              return (
                <motion.div
                  key={phase.id}
                  onClick={() => setActiveId(phase.id)}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                  className={`relative cursor-pointer border-b lg:border-b-0 lg:border-r border-white/8 last:border-r-0 transition-all duration-300 ${
                    isActive ? "bg-[#101F2B]" : "bg-[#08141C]"
                  }`}
                >
                  {/* Active indicator bar at top */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[3px] bg-[#EF5613]"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Phase number */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`text-[10px] font-black tabular-nums ${
                      isActive ? "text-[#EF5613]" : "text-gray-600"
                    }`}>
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Large SVG illustration */}
                  <div className="p-4 pt-6 pb-2 h-52 flex items-center justify-center">
                    {Art && <Art active={isActive} />}
                  </div>

                  {/* Phase label */}
                  <div className="px-5 pb-5">
                    <div className={`text-[9px] font-black uppercase tracking-widest mb-1 ${
                      isActive ? "text-[#EF5613]" : "text-gray-500"
                    }`}>
                      {phase.tagline}
                    </div>
                    <div className={`text-sm font-black ${isActive ? "text-white" : "text-gray-400"}`}>
                      {phase.title}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Details Drawer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/10 bg-[#0A1620] px-6 sm:px-10 py-6 sm:py-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
                {/* Left — phase description */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#EF5613] text-white text-[10px] font-black">
                      PHASE {activePhase.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {activePhase.tagline}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white mb-2">{activePhase.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-lg">{activePhase.summary}</p>
                </div>

                {/* Right — deliverables + CTA */}
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start gap-6">
                  <ul className="space-y-2">
                    {(phaseDeliverables[activePhase.id] || []).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <FiCheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openModal(activePhase.id)}
                    className="shrink-0 px-6 py-3.5 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
                  >
                    Inspect Phase
                    <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Connecting timeline indicator (desktop only) */}
      <div className="hidden lg:flex items-center justify-between mt-4 px-2">
        {processData.map((phase, i) => (
          <React.Fragment key={phase.id}>
            <button
              onClick={() => setActiveId(phase.id)}
              className={`text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-colors ${
                activeId === phase.id ? "text-[#EF5613]" : "text-gray-600 hover:text-gray-400"
              }`}
            >
              {phase.id}
            </button>
            {i < processData.length - 1 && (
              <div className="flex-1 mx-3 h-px bg-white/8" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProcessIllustration;
