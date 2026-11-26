import React, { useState } from "react";
import { motion } from "framer-motion";
import { useModalStore } from "./useModalStore";
import { FiArrowUpRight, FiCheck, FiTerminal } from "react-icons/fi";

interface Card2Props {
  cardsData?: unknown;
}

interface CapabilityItem {
  id: string;
  title: string;
  tag: string;
  metric: string;
  description: string;
  highlights: string[];
}

const capabilities: CapabilityItem[] = [
  {
    id: "enterprise",
    title: "Custom Enterprise Software",
    tag: "Core Architecture",
    metric: "48,500 TPS Ready",
    description:
      "We architect and engineer high-concurrency, mission-critical platforms tailored to your exact business workflows and long-term scale.",
    highlights: ["Rust & Node.js Microservices", "Atomic Ledger Settlements", "Zero-Downtime Migrations"],
  },
  {
    id: "mobile",
    title: "Mobile App Engineering",
    tag: "iOS & Android",
    metric: "60 FPS Fluidity",
    description:
      "Native and cross-platform React Native & Flutter applications crafted for instant tactile responsiveness and offline-first reliability.",
    highlights: ["Biometric Auth & Secure Enclave", "Offline-First Local Sync", "App Store & Play Store Ready"],
  },
  {
    id: "design",
    title: "UI/UX Product Design",
    tag: "Figma & Design Systems",
    metric: "WCAG AAA 100%",
    description:
      "Tokenized design systems, interactive prototypes, and high-contrast visual interfaces engineered to convert and command authority.",
    highlights: ["Atomic Component Libraries", "Interactive Motion Specs", "Executive Dark-Mode Craft"],
  },
  {
    id: "cloud",
    title: "Cloud & Kubernetes DevOps",
    tag: "AWS / GCP / Bare-Metal",
    metric: "99.999% SLA",
    description:
      "Automated CI/CD pipelines, container orchestration, and multi-region failover infrastructure built for unstoppable uptime.",
    highlights: ["Terraform Infrastructure-as-Code", "Auto-Scaling Pod Clusters", "24/7 Telemetry & Alerting"],
  },
  {
    id: "ai",
    title: "AI & Autonomous Agents",
    tag: "PyTorch & Vector RAG",
    metric: "12x Workflow Speedup",
    description:
      "Enterprise generative AI pipelines, semantic vector retrieval, and multi-agent automation running securely inside your private VPC.",
    highlights: ["Private Tenant Vector DBs", "Automated Document Intelligence", "Human-in-the-Loop Audits"],
  },
  {
    id: "security",
    title: "Cybersecurity & Defense",
    tag: "eBPF & Zero-Trust",
    metric: "0 Breaches Recorded",
    description:
      "Bank-grade penetration defense, kernel-level packet inspection, and automated compliance auditing for financial institutions.",
    highlights: ["Sub-2ms eBPF WAF Shield", "PCI-DSS & ISO 27001 Ready", "Real-Time Threat Mitigation"],
  },
  {
    id: "api",
    title: "API & Microservices",
    tag: "GraphQL / gRPC / REST",
    metric: "14ms Avg Latency",
    description:
      "High-throughput API gateways unifying payment rails, legacy ERPs, and third-party SaaS into one low-latency ecosystem.",
    highlights: ["Bi-Directional WebSockets", "Idempotent Payment Connectors", "OpenAPI & SDK Generation"],
  },
];

const CapabilityIllustration: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case "enterprise":
      return (
        <svg viewBox="0 0 260 180" className="w-full max-w-[260px] h-auto">
          <rect x="20" y="20" width="220" height="140" rx="14" fill="#08141C" stroke="#EF5613" strokeWidth="2" />
          <line x1="20" y1="46" x2="240" y2="46" stroke="#1E3242" strokeWidth="1.5" />
          <circle cx="38" cy="33" r="4" fill="#FF5F56" />
          <circle cx="52" cy="33" r="4" fill="#FFBD2E" />
          <circle cx="66" cy="33" r="4" fill="#27C93F" />
          {/* Animated Code Blocks */}
          <motion.rect x="36" y="64" height="8" rx="4" fill="#EF5613" animate={{ width: [60, 120, 60] }} transition={{ repeat: Infinity, duration: 2.8 }} />
          <motion.rect x="52" y="84" height="8" rx="4" fill="#FFFFFF" animate={{ width: [110, 70, 110] }} transition={{ repeat: Infinity, duration: 2.3 }} />
          <motion.rect x="52" y="104" height="8" rx="4" fill="#4ADE80" animate={{ width: [80, 130, 80] }} transition={{ repeat: Infinity, duration: 3.1 }} />
          <rect x="36" y="124" width="44" height="8" rx="4" fill="#3B82F6" />
          {/* Orbiting Sync Ring */}
          <motion.circle
            cx="204"
            cy="116"
            r="22"
            fill="#101F2B"
            stroke="#EF5613"
            strokeWidth="2.5"
            strokeDasharray="8 5"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            style={{ originX: "204px", originY: "116px" }}
          />
          <circle cx="204" cy="116" r="8" fill="#4ADE80" />
        </svg>
      );

    case "mobile":
      return (
        <svg viewBox="0 0 260 180" className="w-full max-w-[260px] h-auto">
          {/* Phone Outline */}
          <rect x="85" y="14" width="90" height="152" rx="18" fill="#08141C" stroke="#EF5613" strokeWidth="2.5" />
          <rect x="115" y="22" width="30" height="5" rx="2.5" fill="#1E3242" />
          {/* Floating Pop-out UI Layers */}
          <motion.rect
            x="55"
            y="45"
            width="110"
            height="36"
            rx="8"
            fill="#101F2B"
            stroke="#4ADE80"
            strokeWidth="1.5"
            animate={{ x: [55, 62, 55] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          <circle cx="72" cy="63" r="7" fill="#EF5613" />
          <rect x="88" y="57" width="60" height="5" rx="2.5" fill="#FFFFFF" />
          <rect x="88" y="67" width="40" height="4" rx="2" fill="#64748B" />

          <motion.rect
            x="95"
            y="95"
            width="110"
            height="42"
            rx="8"
            fill="#101F2B"
            stroke="#EF5613"
            strokeWidth="1.5"
            animate={{ x: [95, 88, 95] }}
            transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
          />
          <rect x="108" y="108" width="70" height="6" rx="3" fill="#EF5613" />
          <rect x="108" y="120" width="50" height="5" rx="2.5" fill="#4ADE80" />
        </svg>
      );

    case "design":
      return (
        <svg viewBox="0 0 260 180" className="w-full max-w-[260px] h-auto">
          {/* Overlapping Artboards */}
          <rect x="35" y="28" width="130" height="100" rx="12" fill="#08141C" stroke="#1E3242" strokeWidth="2" />
          <rect x="90" y="48" width="135" height="104" rx="12" fill="#08141C" stroke="#EF5613" strokeWidth="2" />
          {/* Bezier Curve */}
          <motion.path
            d="M 105 125 Q 140 65, 165 105 T 210 75"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
          {/* Color Token Swatches */}
          <circle cx="60" cy="60" r="10" fill="#EF5613" />
          <circle cx="60" cy="88" r="10" fill="#3B82F6" />
          <circle cx="60" cy="116" r="10" fill="#4ADE80" />
          {/* Anchor Handles */}
          <rect x="86" y="44" width="8" height="8" rx="2" fill="#EF5613" />
          <rect x="221" y="44" width="8" height="8" rx="2" fill="#EF5613" />
          <rect x="221" y="148" width="8" height="8" rx="2" fill="#EF5613" />
        </svg>
      );

    case "cloud":
      return (
        <svg viewBox="0 0 260 180" className="w-full max-w-[260px] h-auto">
          {/* 3 Interconnected Server Pods */}
          {[
            { x: 30, y: 35, label: "POD 01", color: "#4ADE80" },
            { x: 150, y: 35, label: "POD 02", color: "#4ADE80" },
            { x: 90, y: 105, label: "EDGE LB", color: "#EF5613" },
          ].map((pod, idx) => (
            <g key={idx}>
              <rect x={pod.x} y={pod.y} width="80" height="44" rx="10" fill="#08141C" stroke={pod.color} strokeWidth="2" />
              <motion.circle
                cx={pod.x + 18}
                cy={pod.y + 22}
                r="5"
                fill={pod.color}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.4 }}
              />
              <rect x={pod.x + 30} y={pod.y + 15} width="36" height="5" rx="2.5" fill="#FFFFFF" />
              <rect x={pod.x + 30} y={pod.y + 25} width="24" height="4" rx="2" fill="#64748B" />
            </g>
          ))}
          {/* Connecting Data Lines */}
          <line x1="110" y1="57" x2="150" y2="57" stroke="#EF5613" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="70" y1="79" x2="115" y2="105" stroke="#4ADE80" strokeWidth="2" />
          <line x1="190" y1="79" x2="145" y2="105" stroke="#4ADE80" strokeWidth="2" />
        </svg>
      );

    case "ai":
      return (
        <svg viewBox="0 0 260 180" className="w-full max-w-[260px] h-auto">
          {/* Neural Mesh Connections */}
          <line x1="55" y1="50" x2="130" y2="90" stroke="#1E3242" strokeWidth="2" />
          <line x1="55" y1="130" x2="130" y2="90" stroke="#1E3242" strokeWidth="2" />
          <line x1="130" y1="90" x2="205" y2="50" stroke="#EF5613" strokeWidth="2" />
          <line x1="130" y1="90" x2="205" y2="130" stroke="#4ADE80" strokeWidth="2" />
          <line x1="55" y1="50" x2="205" y2="50" stroke="#1E3242" strokeWidth="1.5" strokeDasharray="4 4" />
          <line x1="55" y1="130" x2="205" y2="130" stroke="#1E3242" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Central Core Pulse */}
          <motion.circle
            cx="130"
            cy="90"
            r="26"
            fill="none"
            stroke="#EF5613"
            strokeWidth="2"
            animate={{ r: [18, 34], opacity: [0.9, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
          />
          <circle cx="130" cy="90" r="18" fill="#08141C" stroke="#EF5613" strokeWidth="3" />
          <circle cx="130" cy="90" r="7" fill="#FFFFFF" />
          {/* Outer Synaptic Nodes */}
          <circle cx="55" cy="50" r="10" fill="#08141C" stroke="#3B82F6" strokeWidth="2.5" />
          <circle cx="55" cy="130" r="10" fill="#08141C" stroke="#3B82F6" strokeWidth="2.5" />
          <circle cx="205" cy="50" r="10" fill="#08141C" stroke="#EF5613" strokeWidth="2.5" />
          <circle cx="205" cy="130" r="10" fill="#08141C" stroke="#4ADE80" strokeWidth="2.5" />
        </svg>
      );

    case "security":
      return (
        <svg viewBox="0 0 260 180" className="w-full max-w-[260px] h-auto">
          {/* Radar Concentric Circles */}
          <circle cx="130" cy="90" r="68" fill="#08141C" stroke="#1E3242" strokeWidth="1.5" />
          <circle cx="130" cy="90" r="46" fill="none" stroke="#1E3242" strokeWidth="1.5" strokeDasharray="4 4" />
          {/* Shield */}
          <path
            d="M 130 42 L 166 56 V 86 C 166 112 148 128 130 138 C 112 128 94 112 94 86 V 56 L 130 42 Z"
            fill="#101F2B"
            stroke="#4ADE80"
            strokeWidth="2.5"
          />
          <path d="M 116 90 L 126 100 L 146 78" fill="none" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Rotating Perimeter Scan */}
          <motion.circle
            cx="130"
            cy="90"
            r="68"
            fill="none"
            stroke="#EF5613"
            strokeWidth="2.5"
            strokeDasharray="30 180"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            style={{ originX: "130px", originY: "90px" }}
          />
        </svg>
      );

    case "api":
    default:
      return (
        <svg viewBox="0 0 260 180" className="w-full max-w-[260px] h-auto">
          {/* Gateway Hub */}
          <rect x="28" y="64" width="60" height="52" rx="10" fill="#08141C" stroke="#3B82F6" strokeWidth="2" />
          <rect x="172" y="64" width="60" height="52" rx="10" fill="#08141C" stroke="#4ADE80" strokeWidth="2" />
          <rect x="106" y="48" width="48" height="84" rx="12" fill="#101F2B" stroke="#EF5613" strokeWidth="2.5" />
          {/* Traveling Data Packets */}
          <line x1="88" y1="90" x2="106" y2="90" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="154" y1="90" x2="172" y2="90" stroke="#FFFFFF" strokeWidth="2" />
          <motion.circle
            cy="90"
            r="4.5"
            fill="#EF5613"
            animate={{ cx: [88, 172] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          />
          <rect x="118" y="72" width="24" height="6" rx="3" fill="#EF5613" />
          <rect x="118" y="87" width="24" height="6" rx="3" fill="#4ADE80" />
          <rect x="118" y="102" width="24" height="6" rx="3" fill="#FFFFFF" />
        </svg>
      );
  }
};

const Card2: React.FC<Card2Props> = () => {
  const [activeId, setActiveId] = useState<string>("enterprise");
  const openModal = useModalStore((state) => state.openModal);

  const activeItem = capabilities.find((c) => c.id === activeId) || capabilities[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#EF5613]">
            Interactive Engineering Ecosystem
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-2 tracking-tight">
            Capabilities Built to Scale
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
          Select any node in our engineering architecture below to inspect live visual schematics, deliverables, and system guarantees.
        </p>
      </div>

      {/* Main Split: Interactive Visual Node Orbital Selector + Live Graphic Blueprint Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Non-Boxy Staggered Node Selector (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          {capabilities.map((cap, idx) => {
            const isSelected = cap.id === activeId;
            return (
              <motion.button
                key={cap.id}
                onClick={() => setActiveId(cap.id)}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all duration-200 flex items-center justify-between cursor-pointer border-l-4 ${
                  isSelected
                    ? "bg-[#101F2B] border-l-[#EF5613] text-white shadow-xl"
                    : "bg-transparent border-l-white/10 text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? "text-[#EF5613]" : "text-gray-600"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <div>
                    <p className="text-sm sm:text-base font-bold">{cap.title}</p>
                    <p className="text-[11px] text-gray-400 font-mono">{cap.tag}</p>
                  </div>
                </div>

                <span
                  className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full ${
                    isSelected
                      ? "bg-[#EF5613] text-white"
                      : "bg-white/5 text-gray-500"
                  }`}
                >
                  {cap.metric}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Right: Borderless Visual Blueprint & Animated SVG Stage (7 cols) */}
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:col-span-7 relative rounded-3xl bg-[#101F2B] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden"
        >
          {/* Subtle Blueprint Dot Grid */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #EF5613 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Animated Graphic Illustration */}
            <div className="w-full md:w-[46%] flex items-center justify-center p-4 rounded-2xl bg-[#08141C] border border-white/10">
              <CapabilityIllustration id={activeItem.id} />
            </div>

            {/* Specification & Deliverables */}
            <div className="w-full md:w-[54%] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FiTerminal className="w-3.5 h-3.5 text-[#EF5613]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#EF5613]">
                    {activeItem.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  {activeItem.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {activeItem.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-200 font-medium">
                      <FiCheck className="w-4 h-4 text-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 block">
                    Benchmark
                  </span>
                  <span className="text-sm font-mono font-black text-white">
                    {activeItem.metric}
                  </span>
                </div>

                <button
                  onClick={() => openModal("contactform")}
                  className="px-5 py-3 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Commission Solution</span>
                  <FiArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card2;
