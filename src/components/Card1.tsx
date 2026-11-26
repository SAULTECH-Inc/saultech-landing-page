import React from "react";
import { motion } from "framer-motion";
import { Right_arrow } from "../assets/svg";
import { useModalStore } from "./useModalStore";

interface CardProps {
  cardsData: {
    id: number;
    image: string;
    title: string;
    content: string;
    services: string[];
    link?: string;
  }[];
}

const BespokeSoftwareIllustration: React.FC = () => (
  <svg viewBox="0 0 360 240" className="w-full max-w-[360px] h-auto">
    {/* Desktop App Frame */}
    <rect x="18" y="22" width="250" height="170" rx="14" fill="#08141C" stroke="#1E3242" strokeWidth="2" />
    <line x1="18" y1="48" x2="268" y2="48" stroke="#1E3242" strokeWidth="1.5" />
    <circle cx="36" cy="35" r="4" fill="#FF5F56" />
    <circle cx="50" cy="35" r="4" fill="#FFBD2E" />
    <circle cx="64" cy="35" r="4" fill="#27C93F" />

    {/* Sidebar inside Desktop */}
    <rect x="28" y="60" width="48" height="118" rx="8" fill="#101F2B" />
    <rect x="36" y="72" width="32" height="6" rx="3" fill="#EF5613" />
    <rect x="36" y="88" width="26" height="5" rx="2.5" fill="#475569" />
    <rect x="36" y="102" width="30" height="5" rx="2.5" fill="#475569" />
    <rect x="36" y="116" width="22" height="5" rx="2.5" fill="#475569" />

    {/* Animated Main Dashboard Widgets */}
    <motion.rect
      x="88"
      y="60"
      width="164"
      height="48"
      rx="10"
      fill="#101F2B"
      stroke="#EF5613"
      strokeWidth="1.5"
      animate={{ opacity: [0.85, 1, 0.85] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />
    <rect x="102" y="72" width="68" height="7" rx="3.5" fill="#FFFFFF" />
    <motion.rect
      x="102"
      y="88"
      height="6"
      rx="3"
      fill="#EF5613"
      animate={{ width: [50, 125, 50] }}
      transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
    />

    <rect x="88" y="120" width="76" height="58" rx="10" fill="#101F2B" />
    <polyline points="98,162 114,148 128,154 146,134 156,140" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    <rect x="174" y="120" width="78" height="58" rx="10" fill="#101F2B" />
    <circle cx="213" cy="149" r="16" fill="none" stroke="#1E3242" strokeWidth="4" />
    <motion.circle
      cx="213"
      cy="149"
      r="16"
      fill="none"
      stroke="#EF5613"
      strokeWidth="4"
      strokeDasharray="72 100"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      style={{ originX: "213px", originY: "149px" }}
    />

    {/* Overlapping Mobile Companion Frame */}
    <motion.g
      animate={{ y: [-4, 4, -4] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
    >
      <rect x="242" y="68" width="96" height="154" rx="18" fill="#08141C" stroke="#EF5613" strokeWidth="2.5" />
      <rect x="275" y="76" width="30" height="4" rx="2" fill="#1E3242" />
      <rect x="254" y="92" width="72" height="40" rx="8" fill="#EF5613" />
      <rect x="262" y="102" width="42" height="5" rx="2.5" fill="#FFFFFF" />
      <rect x="262" y="114" width="54" height="8" rx="4" fill="#08141C" />
      <rect x="254" y="142" width="72" height="26" rx="7" fill="#101F2B" />
      <circle cx="268" cy="155" r="5" fill="#4ADE80" />
      <rect x="280" y="152" width="36" height="5" rx="2.5" fill="#FFFFFF" />
      <rect x="254" y="176" width="72" height="26" rx="7" fill="#101F2B" />
      <circle cx="268" cy="189" r="5" fill="#3B82F6" />
      <rect x="280" y="186" width="32" height="5" rx="2.5" fill="#94A3B8" />
    </motion.g>
  </svg>
);

const TeamExtensionIllustration: React.FC = () => (
  <svg viewBox="0 0 360 240" className="w-full max-w-[360px] h-auto">
    {/* Connecting Signal Lines */}
    <line x1="70" y1="60" x2="180" y2="120" stroke="#1E3242" strokeWidth="2" strokeDasharray="5 5" />
    <line x1="290" y1="60" x2="180" y2="120" stroke="#1E3242" strokeWidth="2" strokeDasharray="5 5" />
    <line x1="70" y1="180" x2="180" y2="120" stroke="#1E3242" strokeWidth="2" strokeDasharray="5 5" />
    <line x1="290" y1="180" x2="180" y2="120" stroke="#1E3242" strokeWidth="2" strokeDasharray="5 5" />

    {/* Traveling Signal Dots toward Core */}
    <motion.circle
      r="4"
      fill="#EF5613"
      animate={{ cx: [70, 180], cy: [60, 120] }}
      transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
    />
    <motion.circle
      r="4"
      fill="#4ADE80"
      animate={{ cx: [290, 180], cy: [60, 120] }}
      transition={{ repeat: Infinity, duration: 2.1, ease: "linear" }}
    />
    <motion.circle
      r="4"
      fill="#3B82F6"
      animate={{ cx: [70, 180], cy: [180, 120] }}
      transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
    />
    <motion.circle
      r="4"
      fill="#EF5613"
      animate={{ cx: [290, 180], cy: [180, 120] }}
      transition={{ repeat: Infinity, duration: 1.9, ease: "linear" }}
    />

    {/* Central Client Core Hub */}
    <motion.circle
      cx="180"
      cy="120"
      r="44"
      fill="none"
      stroke="#EF5613"
      strokeWidth="1.5"
      animate={{ r: [38, 56], opacity: [0.8, 0] }}
      transition={{ repeat: Infinity, duration: 2.4, ease: "easeOut" }}
    />
    <circle cx="180" cy="120" r="36" fill="#08141C" stroke="#EF5613" strokeWidth="3" />
    <text x="180" y="116" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">
      YOUR
    </text>
    <text x="180" y="131" textAnchor="middle" fill="#EF5613" fontSize="11" fontWeight="bold" fontFamily="monospace">
      TEAM
    </text>

    {/* 4 Embedded Engineer Nodes */}
    {[
      { x: 70, y: 60, role: "FE", color: "#EF5613" },
      { x: 290, y: 60, role: "BE", color: "#4ADE80" },
      { x: 70, y: 180, role: "MOB", color: "#3B82F6" },
      { x: 290, y: 180, role: "OPS", color: "#EF5613" },
    ].map((node, i) => (
      <g key={i}>
        <rect
          x={node.x - 30}
          y={node.y - 22}
          width="60"
          height="44"
          rx="12"
          fill="#08141C"
          stroke={node.color}
          strokeWidth="2"
        />
        <circle cx={node.x - 14} cy={node.y} r="4" fill="#4ADE80" />
        <text
          x={node.x + 8}
          y={node.y + 4}
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="bold"
          fontFamily="monospace"
        >
          {node.role}
        </text>
      </g>
    ))}
  </svg>
);

const DevOpsCloudIllustration: React.FC = () => (
  <svg viewBox="0 0 360 240" className="w-full max-w-[360px] h-auto">
    {/* Load Balancer Top Node */}
    <rect x="115" y="20" width="130" height="44" rx="12" fill="#08141C" stroke="#EF5613" strokeWidth="2.5" />
    <circle cx="136" cy="42" r="5" fill="#4ADE80" />
    <text x="190" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">
      EDGE ROUTER
    </text>

    {/* Routing Lines to 3 Regional Pods */}
    <line x1="180" y1="64" x2="68" y2="114" stroke="#1E3242" strokeWidth="2" />
    <line x1="180" y1="64" x2="180" y2="114" stroke="#EF5613" strokeWidth="2" />
    <line x1="180" y1="64" x2="292" y2="114" stroke="#1E3242" strokeWidth="2" />

    {/* 3 Auto-Scaled Server Pods */}
    {[
      { x: 24, region: "US-EAST", color: "#4ADE80" },
      { x: 136, region: "EU-WEST", color: "#EF5613" },
      { x: 248, region: "AF-SOUTH", color: "#4ADE80" },
    ].map((pod, idx) => (
      <g key={idx}>
        <rect x={pod.x} y="114" width="88" height="54" rx="10" fill="#08141C" stroke={pod.color} strokeWidth="2" />
        <motion.circle
          cx={pod.x + 18}
          cy="134"
          r="4.5"
          fill={pod.color}
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, delay: idx * 0.4 }}
        />
        <text x={pod.x + 54} y="138" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="monospace">
          {pod.region}
        </text>
        <rect x={pod.x + 14} y="150" width="60" height="5" rx="2.5" fill="#1E3242" />
        <rect x={pod.x + 14} y="150" width="48" height="5" rx="2.5" fill={pod.color} />
      </g>
    ))}

    {/* Live Telemetry Wave Bar */}
    <rect x="24" y="184" width="312" height="36" rx="10" fill="#08141C" stroke="#1E3242" strokeWidth="1.5" />
    <text x="40" y="206" fill="#4ADE80" fontSize="10" fontWeight="bold" fontFamily="monospace">
      99.999% SLA
    </text>
    <motion.polyline
      points="130,206 155,196 180,208 205,194 230,204 255,192 280,206 305,196 320,202"
      fill="none"
      stroke="#EF5613"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
  </svg>
);

const renderIllustration = (id: number) => {
  switch (id) {
    case 1:
      return <BespokeSoftwareIllustration />;
    case 2:
      return <TeamExtensionIllustration />;
    case 3:
    default:
      return <DevOpsCloudIllustration />;
  }
};

const Card1: React.FC<CardProps> = ({ cardsData }) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
      {cardsData.map((card, index) => {
        const isReversed = index % 2 === 1;

        return (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`flex flex-col ${
              isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10 lg:gap-16`}
          >
            {/* Visual Graphic Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#101F2B] border border-white/10 shadow-2xl relative">
              <span className="absolute top-4 left-5 text-xs font-mono font-bold text-[#EF5613]">
                0{index + 1} / ARCHITECTURE
              </span>
              <div className="pt-4 w-full flex justify-center">
                {renderIllustration(card.id)}
              </div>
            </div>

            {/* Editorial Copy Side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative">
              <span className="text-5xl sm:text-6xl font-black text-white/5 font-mono select-none leading-none mb-2">
                0{index + 1}
              </span>

              <h3 className="font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
                {card.title}
              </h3>

              <div className="w-16 h-1 bg-[#EF5613] rounded-full mt-4 mb-5" />

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                {card.content}
              </p>

              <div className="flex flex-wrap gap-2.5 mt-6">
                {card.services.map((service, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#101F2B] border border-white/10 text-gray-200"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <button
                onClick={() => openModal("intouch")}
                className="flex items-center gap-2.5 mt-8 text-sm font-bold text-[#EF5613] hover:text-white transition-colors cursor-pointer group/link"
              >
                <span>Learn More &amp; Consult</span>
                <img
                  src={Right_arrow}
                  alt="Arrow"
                  className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1.5"
                />
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Card1;
