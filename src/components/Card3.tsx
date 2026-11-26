import React, { useState } from "react";
import { useModalStore } from "./useModalStore";
import { flagshipApps, FlagshipProduct } from "../utils/Card1Data";
import { PhoneFrame, LaptopFrame } from "./DeviceFrames";
import {
  FiDollarSign,
  FiBriefcase,
  FiMusic,
  FiBookOpen,
  FiTrello,
  FiFileText,
  FiShield,
  FiActivity,
  FiArrowRight,
  FiPlay,
  FiCheck,
  FiUsers,
  FiSend,
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
  const [deviceMode, setDeviceMode] = useState<"dual" | "laptop" | "phone">("dual");
  const openModal = useModalStore((state) => state.openModal);

  const currentApp: FlagshipProduct =
    flagshipApps.find((app) => app.id === selectedAppId) || flagshipApps[0];

  const hasMobile = currentApp.platform.includes("Mobile") || currentApp.platform.includes("App");

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-2 sm:px-4">
      {/* 8 Product Quick Selector Tabs */}
      <div className="w-full flex items-center justify-start xl:justify-center overflow-x-auto gap-2.5 pb-4 mb-8 scrollbar-none">
        {flagshipApps.map((app) => {
          const isSelected = app.id === selectedAppId;
          return (
            <button
              key={app.id}
              onClick={() => setSelectedAppId(app.id)}
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

      {/* Main Flagship Container */}
      <div className="w-full rounded-3xl bg-[#101F2B] border border-white/10 p-5 sm:p-8 lg:p-10 shadow-2xl flex flex-col gap-10">
        {/* Top Product Specs & Architecture Brief */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-8 border-b border-white/10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EF5613]">
                {currentApp.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {currentApp.platform}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs font-semibold text-green-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {currentApp.liveStatus}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {currentApp.name} — <span className="text-gray-300 font-semibold text-lg sm:text-2xl">{currentApp.tagline}</span>
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mt-3">
              {currentApp.description}
            </p>
          </div>

          {/* Action Button & Device Mode Toggles */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            {/* Device Switcher */}
            <div className="flex items-center rounded-xl bg-[#08141C] p-1 border border-white/10 text-xs">
              {hasMobile && (
                <button
                  onClick={() => setDeviceMode("dual")}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    deviceMode === "dual" ? "bg-[#EF5613] text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Laptop + Phone
                </button>
              )}
              <button
                onClick={() => setDeviceMode("laptop")}
                className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                  deviceMode === "laptop" || !hasMobile
                    ? "bg-[#EF5613] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Web App
              </button>
              {hasMobile && (
                <button
                  onClick={() => setDeviceMode("phone")}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    deviceMode === "phone" ? "bg-[#EF5613] text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Mobile App
                </button>
              )}
            </div>

            <button
              onClick={() => openModal("contactform")}
              className="py-3 px-6 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_16px_rgba(239,86,19,0.3)]"
            >
              <span>Build Solution Like {currentApp.name}</span>
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Real Device Showcase Canvas */}
        <div className="relative w-full rounded-2xl bg-[#08141C] border border-white/10 p-4 sm:p-8 overflow-hidden min-h-[580px] flex items-center justify-center">
          {/* Subtle Canvas Grid Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #EF5613 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* DUAL DEVICE OR LAPTOP VIEW */}
          {(deviceMode === "dual" || deviceMode === "laptop" || !hasMobile) && (
            <div
              className={`w-full transition-all duration-300 ${
                deviceMode === "dual" && hasMobile
                  ? "lg:max-w-[75%] lg:mr-28"
                  : "max-w-4xl"
              }`}
            >
              <LaptopFrame url={`https://${currentApp.id}.app.saultech.internal`}>
                {/* 1. FUNDY PAY WEB DASHBOARD */}
                {selectedAppId === "fundypay" && (
                  <div className="p-4 sm:p-6 space-y-4">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EF5613] flex items-center justify-center font-black text-white text-sm">
                          FP
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Fundy Pay Institutional Treasury</p>
                          <p className="text-[10px] text-gray-400">Account #8849-2041-USD</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-green-400 font-mono">● LIVE SETTLEMENT (18ms)</span>
                        <button className="px-3 py-1 rounded bg-[#EF5613] text-white text-[10px] font-bold">
                          + New Transfer
                        </button>
                      </div>
                    </div>

                    {/* Financial Metrics */}
                    <div className="grid grid-cols-4 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">USD Vault Balance</span>
                        <p className="text-base font-black text-white mt-1">$1,482,910.40</p>
                        <span className="text-[9px] text-green-400">+14.2% Yield APY</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">EUR Reserve</span>
                        <p className="text-base font-black text-white mt-1">€840,200.00</p>
                        <span className="text-[9px] text-gray-400">Hedged Fixed</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Active Virtual Cards</span>
                        <p className="text-base font-black text-[#EF5613] mt-1">1,248 Cards</p>
                        <span className="text-[9px] text-green-400">PCI-DSS Level 1</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">P2P Speed</span>
                        <p className="text-base font-black text-white mt-1">18ms Instant</p>
                        <span className="text-[9px] text-green-400">Zero Network Slip</span>
                      </div>
                    </div>

                    {/* Real Transaction Table */}
                    <div className="rounded-xl bg-[#101F2B] border border-white/5 overflow-hidden text-xs">
                      <div className="px-3 py-2 bg-[#0C1A24] font-bold text-[11px] text-gray-300 flex justify-between">
                        <span>Real-Time P2P Ledger</span>
                        <span className="text-gray-400">Showing last 4 transactions</span>
                      </div>
                      <div className="divide-y divide-white/5">
                        <div className="px-3 py-2 flex items-center justify-between text-[11px]">
                          <span className="text-white font-semibold">Automated Payroll Batch #441</span>
                          <span className="font-mono text-white">$45,210.00</span>
                          <span className="text-green-400 font-bold text-[10px]">VERIFIED</span>
                        </div>
                        <div className="px-3 py-2 flex items-center justify-between text-[11px]">
                          <span className="text-white font-semibold">P2P Cross-Border Wire: US -&gt; NG</span>
                          <span className="font-mono text-white">$8,400.00</span>
                          <span className="text-green-400 font-bold text-[10px]">SETTLED</span>
                        </div>
                        <div className="px-3 py-2 flex items-center justify-between text-[11px]">
                          <span className="text-white font-semibold">Virtual Card Spend: AWS Cloud Infrastructure</span>
                          <span className="font-mono text-white">$3,210.45</span>
                          <span className="text-green-400 font-bold text-[10px]">CLEARED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. MUNE WORK WEB DASHBOARD */}
                {selectedAppId === "munework" && (
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EF5613] flex items-center justify-center font-bold text-white text-sm">
                          MW
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Mune Work Enterprise Talent Hub</p>
                          <p className="text-[10px] text-gray-400">Semantic AI Match Pipeline Active</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-400 font-mono">85,000+ Vetted Candidates</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Active Roles</span>
                        <p className="text-lg font-black text-white mt-1">24 Open Positions</p>
                        <span className="text-[10px] text-green-400">10x Hire Velocity</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Avg AI Match Precision</span>
                        <p className="text-lg font-black text-green-400 mt-1">98.4% Match</p>
                        <span className="text-[10px] text-gray-400">Vector Embeddings</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Escrow Milestone Value</span>
                        <p className="text-lg font-black text-[#EF5613] mt-1">$45,000 Locked</p>
                        <span className="text-[10px] text-green-400">Safe Settlement</span>
                      </div>
                    </div>

                    {/* Candidate Match Rows */}
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center text-xs">
                            AM
                          </div>
                          <div>
                            <p className="font-bold text-white">Alex Morgan — Senior React & Node Architect</p>
                            <p className="text-[10px] text-gray-400">Matches 14/14 technical requirements</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-400 font-bold text-[10px]">
                          98.4% AI Match
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold flex items-center justify-center text-xs">
                            CN
                          </div>
                          <div>
                            <p className="font-bold text-white">Chioma Nnamdi — Lead Mobile Engineer (Flutter)</p>
                            <p className="text-[10px] text-gray-400">Matches 12/12 technical requirements</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-400 font-bold text-[10px]">
                          97.8% AI Match
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. MUSESPOT WEB DASHBOARD */}
                {selectedAppId === "musespot" && (
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EF5613] flex items-center justify-center text-white text-sm">
                          <FiMusic className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">MuseSpot Creator Royalty Command</p>
                          <p className="text-[10px] text-gray-400">Streaming Telemetry & Micro-Payouts</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-400 font-mono">2,540,120 Streams This Month</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Real-time Royalty Earned</span>
                        <p className="text-lg font-black text-[#EF5613] mt-1">$18,420.00</p>
                        <span className="text-[10px] text-green-400">Per-Second Payout</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Audio Quality</span>
                        <p className="text-lg font-black text-white mt-1">320kbps Lossless</p>
                        <span className="text-[10px] text-blue-400">Adaptive HLS</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Direct Fan Tips</span>
                        <p className="text-lg font-black text-green-400 mt-1">$4,120.50</p>
                        <span className="text-[10px] text-gray-400">0% Intermediary Fee</span>
                      </div>
                    </div>

                    {/* Audio Player Strip */}
                    <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#EF5613] flex items-center justify-center text-white">
                          <FiPlay className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Neon Horizons — Kaelen Vance</p>
                          <p className="text-[10px] text-gray-400">Generating $0.008 per second streamed</p>
                        </div>
                      </div>
                      <div className="w-36 h-2 bg-[#08141C] rounded-full overflow-hidden">
                        <div className="bg-green-400 h-full w-[65%]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. KRIDENCE WEB DASHBOARD */}
                {selectedAppId === "kridence" && (
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EF5613] flex items-center justify-center text-white text-sm">
                          <FiBookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Kridence Institutional ERP Matrix</p>
                          <p className="text-[10px] text-gray-400">Multi-Campus Command Console (35 Schools)</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-400 font-mono">40,000+ Students Active</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Tuition Fee Reconciliation</span>
                        <p className="text-lg font-black text-green-400 mt-1">99.8% Cleared</p>
                        <span className="text-[10px] text-gray-400">Auto-Bank Sync</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Attendance Today</span>
                        <p className="text-lg font-black text-white mt-1">96.4% Present</p>
                        <span className="text-[10px] text-blue-400">Biometric & RFID</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">AI Report Cards</span>
                        <p className="text-lg font-black text-[#EF5613] mt-1">Instant Gen</p>
                        <span className="text-[10px] text-green-400">OCR Grading</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-white">SMS & WhatsApp Real-Time Parent Alerts</p>
                        <p className="text-[10px] text-gray-400">Dispatched fee receipts and grade cards</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-400 font-bold text-[10px]">
                        100% Broadcast
                      </span>
                    </div>
                  </div>
                )}

                {/* 5. WORKSYNC WEB DASHBOARD (Zoho & ClickUp Rival) */}
                {selectedAppId === "worksync" && (
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EF5613] flex items-center justify-center text-white text-sm">
                          <FiTrello className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">WorkSync Enterprise Work Suite</p>
                          <p className="text-[10px] text-yellow-400">Zoho & ClickUp Alternative • 60 FPS Canvas</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-400 font-mono">15,000+ Teams Active</span>
                    </div>

                    {/* Kanban Board Columns */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold uppercase text-gray-400">Sprint Backlog</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-300">4</span>
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/10 text-[11px] mb-1.5">
                          Implement OAuth2 SSO Provider
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/10 text-[11px]">
                          PostgreSQL Partitioning Optimization
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#101F2B] border border-[#EF5613]">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold uppercase text-[#EF5613]">In Progress</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#EF5613] text-white">8</span>
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/10 text-[11px] mb-1.5">
                          Real-time Collaborative Doc Sync
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/10 text-[11px]">
                          Sales CRM Funnel: Deal #481 ($120k)
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-bold uppercase text-green-400">Shipped</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-400">12</span>
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/10 text-[11px]">
                          WebSockets State Channel (&lt;10ms)
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5 flex items-center justify-between text-xs">
                      <span className="text-white font-semibold">CRM Active Pipeline: $420,000 (18 Deals Closing)</span>
                      <span className="text-green-400 text-xs font-mono font-bold">60 FPS Real-time Sync</span>
                    </div>
                  </div>
                )}

                {/* 6. AFFIX AI (Web App Document Signer) */}
                {selectedAppId === "affixai" && (
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EF5613] flex items-center justify-center text-white text-sm">
                          <FiFileText className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Affix AI Intelligent Contract Signer</p>
                          <p className="text-[10px] text-gray-400">Vision Layout Auto-Append Engine</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-400 font-mono">ESIGN & eIDAS Valid</span>
                    </div>

                    {/* PDF Mockup Preview */}
                    <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5 relative">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3 text-xs">
                        <span className="font-bold text-white">Document: Enterprise_Master_Agreement_2026.pdf</span>
                        <span className="text-green-400 font-bold text-[10px]">99.1% AUTO-APPEND ACCURACY</span>
                      </div>

                      <div className="h-28 bg-[#08141C] rounded-lg border border-dashed border-[#EF5613] p-4 flex flex-col justify-between">
                        <p className="text-xs text-gray-300">
                          "IN WITNESS WHEREOF, the parties hereto have executed this Agreement..."
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 rounded bg-[#EF5613] text-white text-[10px] font-bold">
                              ✓ Auto-Signed by Authorized Signatory
                            </span>
                            <span className="text-[10px] font-mono text-gray-400">Hash: 8f9b...3c1a</span>
                          </div>
                          <span className="text-[10px] text-green-400 font-bold">SHA-256 Verified Seal</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Turnaround</span>
                        <p className="text-base font-black text-white mt-1">3x Faster</p>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Legal Standard</span>
                        <p className="text-base font-black text-green-400 mt-1">100% Binding</p>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Audit Trail</span>
                        <p className="text-base font-black text-[#EF5613] mt-1">Cryptographic</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. SYSTEM TIGHT (Web & API Security) */}
                {selectedAppId === "systemtight" && (
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EF5613] flex items-center justify-center text-white text-sm">
                          <FiShield className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">System Tight Financial Security Shield</p>
                          <p className="text-[10px] text-green-400 font-mono">Kernel-Level eBPF WAF Active</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-400 font-mono">0 Breaches Recorded</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Attacks Deflected</span>
                        <p className="text-base font-black text-[#EF5613] mt-1">4,821 Threats</p>
                        <span className="text-[9px] text-green-400">Today</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Threat Mitigation</span>
                        <p className="text-base font-black text-green-400 mt-1">99.999%</p>
                        <span className="text-[9px] text-gray-400">Automated</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">WAF Latency</span>
                        <p className="text-base font-black text-white mt-1">&lt; 1.8ms</p>
                        <span className="text-[9px] text-blue-400">Zero Lag</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Compliance</span>
                        <p className="text-base font-black text-white mt-1">PCI-DSS / SOC 2</p>
                        <span className="text-[9px] text-green-400">Passed Audit</span>
                      </div>
                    </div>

                    {/* Threat Radar Log */}
                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5 text-xs font-mono space-y-1.5">
                      <div className="flex justify-between text-gray-400 text-[10px] pb-1 border-b border-white/5">
                        <span>LIVE FINANCIAL API TRAFFIC MONITOR</span>
                        <span className="text-green-400">ALL PORTS SECURED</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-red-400">
                        <span>[BLOCKED] 185.220.101.4 - SQLi Attempt on /api/v1/auth/transfer</span>
                        <span className="text-gray-400">0.2ms</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-red-400">
                        <span>[BLOCKED] 92.118.160.19 - Credential Stuffing on /oauth2/token</span>
                        <span className="text-gray-400">0.4ms</span>
                      </div>
                      <div className="flex justify-between text-[11px] text-green-400">
                        <span>[CLEARED] Core Banking Settlement Gateway API Stream</span>
                        <span className="text-gray-400">1.2ms</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 8. HESTANE WEB DASHBOARD (Hospital OS) */}
                {selectedAppId === "hestane" && (
                  <div className="p-4 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EF5613] flex items-center justify-center text-white text-sm">
                          <FiActivity className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Hestane Hospital Operating System</p>
                          <p className="text-[10px] text-gray-400">Operating across 18 Facilities • 500k+ Records</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-400 font-mono">HL7 / FHIR Standard</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 text-xs">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">ICU Bed Occupancy</span>
                        <p className="text-base font-black text-white mt-1">88% (42/48)</p>
                        <span className="text-[9px] text-yellow-400">6 Beds Ready</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">ER Triage Wait</span>
                        <p className="text-base font-black text-green-400 mt-1">4.2 Minutes</p>
                        <span className="text-[9px] text-green-400">Optimal Triage</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">Doctors On-Call</span>
                        <p className="text-base font-black text-[#EF5613] mt-1">48 Specialists</p>
                        <span className="text-[9px] text-gray-400">All Shifts Active</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] text-gray-400">System Availability</span>
                        <p className="text-base font-black text-white mt-1">99.999%</p>
                        <span className="text-[9px] text-green-400">Zero Downtime</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-white">Automated Pharmacy Dispensing & Bed Allocation</p>
                        <p className="text-[10px] text-gray-400">Prescription #RX-9912 verified with barcode match</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-400 font-bold text-[10px]">
                        Dispensed
                      </span>
                    </div>
                  </div>
                )}
              </LaptopFrame>
            </div>
          )}

          {/* REAL IPHONE MOBILE APP VIEW */}
          {(deviceMode === "dual" || deviceMode === "phone") && hasMobile && (
            <div
              className={`transition-all duration-300 ${
                deviceMode === "dual"
                  ? "hidden lg:block absolute right-4 xl:right-10 top-1/2 -translate-y-1/2 z-20 scale-95 hover:scale-100"
                  : "w-full max-w-xs"
              }`}
            >
              <PhoneFrame appName={currentApp.name}>
                {/* 1. FUNDY PAY PHONE APP */}
                {selectedAppId === "fundypay" && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#EF5613] flex items-center justify-center font-bold text-xs text-white">
                          FP
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400">Welcome Back</p>
                          <p className="text-xs font-bold text-white">Alex Morgan</p>
                        </div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>

                    {/* Virtual Card */}
                    <div className="rounded-2xl bg-[#EF5613] p-4 text-white shadow-lg relative overflow-hidden">
                      <div className="flex justify-between items-center text-[10px] font-bold tracking-wider opacity-80">
                        <span>FUNDY PAY PLATINUM</span>
                        <span>VISA</span>
                      </div>
                      <p className="text-lg font-black my-2 font-mono tracking-wider">$14,820.50</p>
                      <div className="flex justify-between items-center text-[9px] font-mono opacity-90">
                        <span>•••• 9012</span>
                        <span>12/28</span>
                      </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="grid grid-cols-4 gap-1.5 text-center text-[9px] font-semibold text-gray-300">
                      <div className="p-2 rounded-xl bg-[#101F2B] border border-white/5 flex flex-col items-center gap-1 cursor-pointer hover:bg-white/10">
                        <FiSend className="w-3.5 h-3.5 text-[#EF5613]" />
                        <span>Send</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#101F2B] border border-white/5 flex flex-col items-center gap-1 cursor-pointer hover:bg-white/10">
                        <FiDollarSign className="w-3.5 h-3.5 text-green-400" />
                        <span>Add</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#101F2B] border border-white/5 flex flex-col items-center gap-1 cursor-pointer hover:bg-white/10">
                        <FiUsers className="w-3.5 h-3.5 text-blue-400" />
                        <span>P2P</span>
                      </div>
                      <div className="p-2 rounded-xl bg-[#101F2B] border border-white/5 flex flex-col items-center gap-1 cursor-pointer hover:bg-white/10">
                        <FiCheck className="w-3.5 h-3.5 text-yellow-400" />
                        <span>Bills</span>
                      </div>
                    </div>

                    {/* Recent Transactions List */}
                    <div className="space-y-1.5 flex-1">
                      <span className="text-[10px] font-bold text-gray-400">Recent Transfers</span>
                      <div className="p-2 rounded-lg bg-[#101F2B] flex items-center justify-between text-[10px]">
                        <span>Sarah Jenkins</span>
                        <span className="text-green-400 font-bold">+$450.00</span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#101F2B] flex items-center justify-between text-[10px]">
                        <span>Spotify Premium</span>
                        <span className="text-gray-300 font-bold">-$14.99</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. MUNE WORK PHONE APP */}
                {selectedAppId === "munework" && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white">Mune Work AI Matches</p>
                      <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[9px] font-bold">
                        98.4% Precision
                      </span>
                    </div>

                    {/* Job Card */}
                    <div className="p-3.5 rounded-2xl bg-[#101F2B] border border-[#EF5613] space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs font-bold text-white">Staff Software Engineer</p>
                          <p className="text-[10px] text-gray-400">Fintech Global Inc • Remote</p>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[#EF5613] text-white text-[9px] font-bold">
                          $160k - $210k
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 text-gray-300">React</span>
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 text-gray-300">Rust</span>
                        <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/5 text-gray-300">Kafka</span>
                      </div>
                      <button className="w-full py-1.5 rounded-lg bg-[#EF5613] text-white text-[10px] font-bold">
                        1-Click AI Apply
                      </button>
                    </div>

                    {/* Escrow Status */}
                    <div className="p-2.5 rounded-xl bg-[#101F2B] border border-white/5 text-[10px] flex items-center justify-between">
                      <span>Milestone #1 Escrow</span>
                      <span className="text-green-400 font-bold">$4,500 Secured</span>
                    </div>
                  </div>
                )}

                {/* 3. MUSESPOT PHONE APP */}
                {selectedAppId === "musespot" && (
                  <div className="flex flex-col justify-between h-full space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 text-center uppercase">Now Streaming</p>
                    {/* Album Art Mockup */}
                    <div className="w-36 h-36 mx-auto rounded-2xl bg-gradient-to-tr from-[#EF5613] to-[#FF8A05] flex items-center justify-center text-white shadow-xl">
                      <FiMusic className="w-12 h-12" />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-bold text-white">Neon Horizons</p>
                      <p className="text-[10px] text-gray-400">Kaelen Vance • Hi-Fi 320kbps</p>
                    </div>
                    {/* Royalty Counter */}
                    <div className="p-2 rounded-xl bg-[#101F2B] border border-white/5 text-center">
                      <p className="text-[9px] text-gray-400">Live Royalty Earning</p>
                      <p className="text-sm font-black text-[#EF5613] font-mono">$0.008 / sec</p>
                    </div>
                    <button className="w-full py-1.5 rounded-lg bg-[#EF5613] text-white text-[10px] font-bold">
                      Tip Artist $5.00
                    </button>
                  </div>
                )}

                {/* 4. KRIDENCE PHONE APP */}
                {selectedAppId === "kridence" && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white">Kridence Student Portal</p>
                      <span className="text-[9px] text-green-400 font-bold">Attendance: 96%</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-[#101F2B] border border-[#EF5613] space-y-2">
                      <p className="text-xs font-bold text-white">Term 2 Exam Grade: A+</p>
                      <p className="text-[10px] text-gray-300">Physics & Advanced Calculus</p>
                      <div className="w-full bg-[#08141C] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#EF5613] h-full w-[94%]" />
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#101F2B] border border-white/5 text-[10px] flex justify-between">
                      <span>Tuition Fee Status</span>
                      <span className="text-green-400 font-bold">100% Cleared</span>
                    </div>
                  </div>
                )}

                {/* 5. WORKSYNC PHONE APP */}
                {selectedAppId === "worksync" && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <p className="text-xs font-bold text-white">WorkSync Mobile Sprint</p>
                    <div className="space-y-1.5">
                      <div className="p-2.5 rounded-xl bg-[#101F2B] border border-[#EF5613] text-[10px]">
                        <p className="font-bold text-white">Deploy Payment Gateway API</p>
                        <p className="text-[9px] text-[#EF5613] font-semibold">In Progress • Due Today</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#101F2B] border border-white/5 text-[10px]">
                        <p className="font-bold text-white">CRM Lead Followup: Stripe</p>
                        <p className="text-[9px] text-green-400 font-semibold">$120,000 Opportunity</p>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#08141C] text-[9px] text-gray-400 text-center">
                      &lt;10ms Sync Latency • 60 FPS
                    </div>
                  </div>
                )}

                {/* 8. HESTANE PHONE APP */}
                {selectedAppId === "hestane" && (
                  <div className="flex flex-col justify-between h-full space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-white">Hestane Doctor On-Call</p>
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="p-3 rounded-2xl bg-[#101F2B] border border-red-500/40 space-y-1">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-red-400">ER Triage Alert</span>
                        <span className="text-gray-400">Ward 4B</span>
                      </div>
                      <p className="text-xs font-bold text-white">Patient #ER-8841 Stable</p>
                      <p className="text-[9px] text-gray-300">Vitals: HR 74 BPM • BP 120/80</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#101F2B] border border-white/5 text-[10px] flex justify-between">
                      <span>Pharmacy Dispense</span>
                      <span className="text-green-400 font-bold">Approved</span>
                    </div>
                  </div>
                )}
              </PhoneFrame>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card3;
