import React, { useState } from "react";
import { useModalStore } from "./useModalStore";
import { flagshipApps, FlagshipProduct } from "../utils/Card1Data";
import {
  FiCheckCircle,
  FiDollarSign,
  FiBriefcase,
  FiMusic,
  FiBookOpen,
  FiTrello,
  FiFileText,
  FiShield,
  FiActivity,
  FiTerminal,
  FiArrowRight,
  FiSmartphone,
  FiGlobe,
} from "react-icons/fi";

const productIcons: Record<string, React.ReactNode> = {
  fundypay: <FiDollarSign className="w-4 h-4" />,
  munework: <FiBriefcase className="w-4 h-4" />,
  musespot: <FiMusic className="w-4 h-4" />,
  kridence: <FiBookOpen className="w-4 h-4" />,
  worksync: <FiTrello className="w-4 h-4" />,
  affixai: <FiFileText className="w-4 h-4" />,
  systemtight: <FiShield className="w-4 h-4" />,
  hestane: <FiActivity className="w-4 h-4" />,
};

const Card3: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>("fundypay");
  const [activeTab, setActiveTab] = useState<"interface" | "architecture" | "metrics">("interface");
  const openModal = useModalStore((state) => state.openModal);

  const currentApp: FlagshipProduct =
    flagshipApps.find((app) => app.id === selectedAppId) || flagshipApps[0];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4">
      {/* 8 Product Quick Selector Tabs */}
      <div className="w-full flex items-center justify-start xl:justify-center overflow-x-auto gap-2.5 pb-4 mb-8 scrollbar-none">
        {flagshipApps.map((app) => {
          const isSelected = app.id === selectedAppId;
          return (
            <button
              key={app.id}
              onClick={() => {
                setSelectedAppId(app.id);
                setActiveTab("interface");
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? "bg-[#EF5613] text-white border-[#EF5613] shadow-[0_0_16px_rgba(239,86,19,0.35)]"
                  : "bg-[#101F2B] text-gray-300 border-white/10 hover:border-white/25 hover:text-white"
              }`}
            >
              <span className={isSelected ? "text-white" : "text-[#EF5613]"}>
                {productIcons[app.id]}
              </span>
              <span>{app.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Flagship App Showcase Container */}
      <div className="w-full rounded-3xl bg-[#101F2B] border border-white/10 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left Column: Product Specs & Architecture Brief */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EF5613]">
                {currentApp.category}
              </span>
              <span className="text-gray-500">•</span>
              <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                <FiGlobe className="w-3 h-3" />
                <FiSmartphone className="w-3 h-3" />
                <span>{currentApp.platform}</span>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {currentApp.name}
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {currentApp.badge}
              </span>
            </div>

            <p className="text-sm sm:text-base font-semibold text-gray-200 mt-2">
              {currentApp.tagline}
            </p>

            <div className="w-12 h-1 bg-[#EF5613] rounded-full my-4" />

            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {currentApp.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {currentApp.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#08141C] border border-white/5 flex flex-col"
                >
                  <span className="text-lg sm:text-xl font-black text-[#EF5613]">
                    {metric.value}
                  </span>
                  <span className="text-xs text-gray-400 font-medium mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Engineered With:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentApp.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#08141C] border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => openModal("contactform")}
              className="flex-1 py-3 px-5 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_16px_rgba(239,86,19,0.3)]"
            >
              <span>Request System Demo</span>
              <FiArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => openModal("discovery")}
              className="py-3 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
            >
              Build Similar Solution
            </button>
          </div>
        </div>

        {/* Right Column: High-Graphics Interactive Mockup Window */}
        <div className="w-full lg:w-[55%] rounded-2xl bg-[#08141C] border border-white/15 flex flex-col overflow-hidden shadow-2xl">
          {/* macOS Window Title Bar */}
          <div className="h-11 px-4 bg-[#050D13] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-[11px] text-gray-400 font-mono">
              <FiTerminal className="w-3 h-3 text-[#EF5613]" />
              <span>saultech://built/{currentApp.id}.sys</span>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-green-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Sub-navigation Tabs */}
          <div className="flex border-b border-white/10 bg-[#08141C] text-xs">
            <button
              onClick={() => setActiveTab("interface")}
              className={`flex-1 py-2.5 font-semibold text-center transition-colors cursor-pointer ${
                activeTab === "interface"
                  ? "text-[#EF5613] border-b-2 border-[#EF5613] bg-white/5"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Live UI Interface
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`flex-1 py-2.5 font-semibold text-center transition-colors cursor-pointer ${
                activeTab === "architecture"
                  ? "text-[#EF5613] border-b-2 border-[#EF5613] bg-white/5"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Architecture & Security
            </button>
            <button
              onClick={() => setActiveTab("metrics")}
              className={`flex-1 py-2.5 font-semibold text-center transition-colors cursor-pointer ${
                activeTab === "metrics"
                  ? "text-[#EF5613] border-b-2 border-[#EF5613] bg-white/5"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Real-Time Metrics
            </button>
          </div>

          {/* Interactive Simulated Screen Content */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between min-h-[360px]">
            {activeTab === "interface" && (
              <div className="space-y-4">
                {/* 1. FUNDY PAY */}
                {selectedAppId === "fundypay" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Wallet Balance</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">$14,820.50</p>
                        <span className="text-[10px] text-green-400">+12.4% yield</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">P2P Speed</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">18ms Instant</p>
                        <span className="text-[10px] text-gray-400">Zero fee</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Virtual Card</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">Active • 9012</p>
                        <span className="text-[10px] text-green-400">PCI-DSS Vault</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-white">Live Payment Flow & Settlement</span>
                        <span className="text-[10px] text-[#EF5613] font-mono">45k+ Users Active</span>
                      </div>
                      <svg viewBox="0 0 400 50" className="w-full h-12 stroke-[#EF5613] fill-none">
                        <polyline strokeWidth="2.5" points="0,35 50,30 100,38 150,20 200,28 250,10 300,22 350,8 400,16" />
                      </svg>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-400" />
                          <span className="font-semibold text-white">Instant Bank Payout #FND-8821</span>
                        </div>
                        <span className="font-mono text-gray-300">$1,250.00 USD</span>
                        <span className="text-green-400 font-semibold text-[10px]">SETTLED (18ms)</span>
                      </div>
                    </div>
                  </>
                )}

                {/* 2. MUNE WORK */}
                {selectedAppId === "munework" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">AI Match Score</span>
                        <p className="text-base sm:text-lg font-black text-green-400 mt-1">98.4% Match</p>
                        <span className="text-[10px] text-gray-400">Senior React Eng</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Escrow Value</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">$45,000</p>
                        <span className="text-[10px] text-green-400">Locked & Verified</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Hire Speed</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">3.2 Days Avg</p>
                        <span className="text-[10px] text-green-400">10x Faster</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-white">Semantic AI Job Pipeline</span>
                        <span className="text-[10px] text-purple-400 font-mono">Vector Embeddings Active</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="p-2 rounded bg-[#08141C] border border-[#EF5613] text-white font-bold">1. Match Found</div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/10 text-gray-300">2. Interview Room</div>
                        <div className="p-2 rounded bg-[#08141C] border border-green-500/40 text-green-400 font-bold">3. Escrow Funded</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                      <span className="font-semibold text-white">Candidate: Alex Morgan (Fullstack)</span>
                      <span className="text-green-400 text-xs font-mono font-bold">Hired & Milestone 1 Active</span>
                    </div>
                  </>
                )}

                {/* 3. MUSESPOT */}
                {selectedAppId === "musespot" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Total Streams</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">2,540,120</p>
                        <span className="text-[10px] text-green-400">This month</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Royalty Paid</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">$18,420.00</p>
                        <span className="text-[10px] text-green-400">Per-Second Payout</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Audio Stream</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">320k Lossless</p>
                        <span className="text-[10px] text-blue-400">HLS Adaptive</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-white">Now Playing: "Neon Horizons" (Lossless HD)</span>
                        <span className="text-[10px] text-green-400 font-mono">Live Earner: $0.008/sec</span>
                      </div>
                      <svg viewBox="0 0 400 45" className="w-full h-10 stroke-green-400 fill-none">
                        <polyline strokeWidth="2.5" points="0,22 40,10 80,35 120,5 160,30 200,8 240,32 280,12 320,28 360,6 400,20" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                      <span className="font-semibold text-white">Artist: Kaelen Vance (Verified Creator)</span>
                      <span className="px-2.5 py-1 rounded bg-[#EF5613] text-white text-[10px] font-bold">Direct Tip Sent</span>
                    </div>
                  </>
                )}

                {/* 4. KRIDENCE */}
                {selectedAppId === "kridence" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Active Students</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">40,820</p>
                        <span className="text-[10px] text-green-400">35 Campuses</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Fee Clearance</span>
                        <p className="text-base sm:text-lg font-black text-green-400 mt-1">99.8%</p>
                        <span className="text-[10px] text-gray-400">Auto-Reconciled</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">AI Grading</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">Instant</p>
                        <span className="text-[10px] text-blue-400">Report Cards Gen</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">School ERP Command Center</span>
                        <span className="text-[10px] text-blue-400 font-mono">Syncing All Campuses</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 rounded bg-[#08141C] border border-white/5 flex justify-between">
                          <span className="text-gray-300">Biometric Attendance</span>
                          <span className="text-green-400 font-bold">96.4% Present</span>
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/5 flex justify-between">
                          <span className="text-gray-300">Term Exam Pipeline</span>
                          <span className="text-[#EF5613] font-bold">Graded & Published</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                      <span className="font-semibold text-white">Automated SMS/WhatsApp Parent Alerts</span>
                      <span className="text-green-400 font-mono text-xs font-bold">Delivered (100%)</span>
                    </div>
                  </>
                )}

                {/* 5. WORKSYNC */}
                {selectedAppId === "worksync" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Sprint Health</span>
                        <p className="text-base sm:text-lg font-black text-green-400 mt-1">94% Done</p>
                        <span className="text-[10px] text-gray-400">Sprint #42</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">CRM Pipeline</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">$420,000</p>
                        <span className="text-[10px] text-green-400">18 Deals Closing</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Canvas Speed</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">60 FPS</p>
                        <span className="text-[10px] text-blue-400">&lt;10ms Sync</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-white">Agile Sprint & Team Collaborative Docs</span>
                        <span className="text-[10px] text-yellow-400 font-mono">Zoho & ClickUp Alternative</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="p-2 rounded bg-[#08141C] border border-white/10 text-gray-300">To-Do (4)</div>
                        <div className="p-2 rounded bg-[#08141C] border border-[#EF5613] text-white font-bold">In Progress (8)</div>
                        <div className="p-2 rounded bg-[#08141C] border border-green-500/40 text-green-400 font-bold">Production Ready (12)</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                      <span className="font-semibold text-white">Live Collab: Sarah & David editing PRD doc</span>
                      <span className="text-green-400 font-mono text-xs font-bold">WebSockets Live</span>
                    </div>
                  </>
                )}

                {/* 6. AFFIX AI */}
                {selectedAppId === "affixai" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Auto Append</span>
                        <p className="text-base sm:text-lg font-black text-green-400 mt-1">99.1% Acc</p>
                        <span className="text-[10px] text-gray-400">Vision Layout AI</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Audit Security</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">SHA-256</p>
                        <span className="text-[10px] text-green-400">Tamper-Proof</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Legality</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">100% Valid</p>
                        <span className="text-[10px] text-blue-400">ESIGN & eIDAS</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">Document Signer & Verification Matrix</span>
                        <span className="text-[10px] text-green-400 font-mono">Zero Config Needed</span>
                      </div>
                      <div className="p-3 rounded bg-[#08141C] border border-[#EF5613] flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white">Enterprise Master Service Agreement (MSA.pdf)</p>
                          <p className="text-[10px] text-gray-400">Signature field auto-detected on page 14</p>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#EF5613] text-white text-[10px] font-bold">Auto-Appended</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                      <span className="font-semibold text-white">Cryptographic Certificate Hash: 8f9b...3c1a</span>
                      <span className="text-green-400 font-mono text-xs font-bold">Signed & Sealed</span>
                    </div>
                  </>
                )}

                {/* 7. SYSTEM TIGHT */}
                {selectedAppId === "systemtight" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Threat Mitigation</span>
                        <p className="text-base sm:text-lg font-black text-green-400 mt-1">99.999%</p>
                        <span className="text-[10px] text-gray-400">0 Breaches</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Attacks Blocked</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">4,821 / Day</p>
                        <span className="text-[10px] text-green-400">DDoS & Injection</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">WAF Overhead</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">&lt; 1.8ms</p>
                        <span className="text-[10px] text-blue-400">Kernel eBPF</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-white">360° Financial Perimeter Defense Radar</span>
                        <span className="text-[10px] text-green-400 font-mono">SOC 2 & ISO 27001 Active</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 pt-1 text-center text-[10px]">
                        <div className="p-2 rounded bg-[#08141C] border border-green-500/40 text-green-400 font-bold">Core API Shield</div>
                        <div className="p-2 rounded bg-[#08141C] border border-green-500/40 text-green-400 font-bold">SQL Injection Block</div>
                        <div className="p-2 rounded bg-[#08141C] border border-green-500/40 text-green-400 font-bold">DDoS Scrubbing</div>
                        <div className="p-2 rounded bg-[#08141C] border border-green-500/40 text-green-400 font-bold">Audit Certified</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                      <span className="font-semibold text-white">Central Bank & PCI-DSS Audit Stream</span>
                      <span className="text-green-400 font-mono text-xs font-bold">Compliant & Secure</span>
                    </div>
                  </>
                )}

                {/* 8. HESTANE */}
                {selectedAppId === "hestane" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Hospital Centers</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">18 Facilities</p>
                        <span className="text-[10px] text-green-400">Full Hospital OS</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Patient Records</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">500,000+</p>
                        <span className="text-[10px] text-green-400">HL7 / FHIR Standard</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">ICU Bed Tracking</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">88% Capacity</p>
                        <span className="text-[10px] text-blue-400">Real-Time Dispatch</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-white">Clinical Emergency & Pharmacy Dispenser</span>
                        <span className="text-[10px] text-green-400 font-mono">Zero Downtime SLA</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2 rounded bg-[#08141C] border border-white/5 flex justify-between">
                          <span className="text-gray-300">ER Triage Queue</span>
                          <span className="text-green-400 font-bold">4.2 min Avg Wait</span>
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/5 flex justify-between">
                          <span className="text-gray-300">Pharmacy Dispatch</span>
                          <span className="text-[#EF5613] font-bold">Barcode Verified</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                      <span className="font-semibold text-white">Medical Doctors On-Call: 48 Specialists Active</span>
                      <span className="text-green-400 font-mono text-xs font-bold">Clinical OS Connected</span>
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                    <FiShield className="w-4 h-4 text-[#EF5613]" />
                    <span>System Engineering & Deployment Standard</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Designed and built by SaulTech following zero-downtime microservice architecture, strict data isolation, and automated cloud CI/CD pipelines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Key Architectural Pillars:
                  </span>
                  <ul className="space-y-2">
                    {currentApp.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                        <FiCheckCircle className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "metrics" && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white">Platform Availability SLA</span>
                    <span className="text-xs font-mono text-green-400">99.999%</span>
                  </div>
                  <div className="w-full bg-[#08141C] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-green-400 h-full w-[99.99%]" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white">Global Response Time (P99)</span>
                    <span className="text-xs font-mono text-[#EF5613]">18ms</span>
                  </div>
                  <div className="w-full bg-[#08141C] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#EF5613] h-full w-[88%]" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white">Security & Test Coverage</span>
                    <span className="text-xs font-mono text-blue-400">99.2%</span>
                  </div>
                  <div className="w-full bg-[#08141C] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-[99.2%]" />
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Window Footer */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500 font-mono">
              <span>Built by SaulTech Engineering</span>
              <span>Solid Enterprise Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
