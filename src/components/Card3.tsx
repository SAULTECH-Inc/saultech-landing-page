import React, { useState } from "react";
import { useModalStore } from "./useModalStore";
import { flagshipApps } from "../utils/Card1Data";
import {
  FiCheckCircle,
  FiCpu,
  FiActivity,
  FiTruck,
  FiDollarSign,
  FiShield,
  FiArrowRight,
  FiTerminal,
} from "react-icons/fi";

const appIcons: Record<string, React.ReactNode> = {
  omnipay: <FiDollarSign className="w-5 h-5" />,
  pulsemed: <FiActivity className="w-5 h-5" />,
  nexuslogix: <FiTruck className="w-5 h-5" />,
  aetherai: <FiCpu className="w-5 h-5" />,
};

const Card3: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>("omnipay");
  const [activeTab, setActiveTab] = useState<"interface" | "architecture" | "metrics">("interface");
  const openModal = useModalStore((state) => state.openModal);

  const currentApp = flagshipApps.find((app) => app.id === selectedAppId) || flagshipApps[0];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4">
      {/* App Selector Pills */}
      <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto gap-3 pb-4 mb-8 scrollbar-none">
        {flagshipApps.map((app) => {
          const isSelected = app.id === selectedAppId;
          return (
            <button
              key={app.id}
              onClick={() => {
                setSelectedAppId(app.id);
                setActiveTab("interface");
              }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? "bg-[#EF5613] text-white border-[#EF5613] shadow-[0_0_20px_rgba(239,86,19,0.35)]"
                  : "bg-[#101F2B] text-gray-300 border-white/10 hover:border-white/25 hover:text-white"
              }`}
            >
              <span className={isSelected ? "text-white" : "text-[#EF5613]"}>
                {appIcons[app.id]}
              </span>
              <span>{app.name}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                  isSelected ? "bg-black/30 text-white" : "bg-white/5 text-gray-400"
                }`}
              >
                {app.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Flagship App Showcase Container */}
      <div className="w-full rounded-3xl bg-[#101F2B] border border-white/10 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Left Column: Product Specs & Architecture Brief */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#EF5613]">
                {currentApp.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {currentApp.liveStatus}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {currentApp.name}
            </h3>

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
              Consult On Architecture
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
              <span>saultech://apps/{currentApp.id}.sys</span>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-green-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>ONLINE</span>
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
              Live UI Dashboard
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
              Real-time Ingestion
            </button>
          </div>

          {/* Interactive Simulated Screen Content */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between min-h-[360px]">
            {activeTab === "interface" && (
              <div className="space-y-4">
                {/* Specific Screen: OmniPay */}
                {selectedAppId === "omnipay" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Total Cleared</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">$4,829,190.40</p>
                        <span className="text-[10px] text-green-400">+18.4% this week</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">TPS Stream</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">48,210 TPS</p>
                        <span className="text-[10px] text-gray-400">Peak 62.4k</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Settlement</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">18ms Instant</p>
                        <span className="text-[10px] text-green-400">Zero Slippage</span>
                      </div>
                    </div>

                    {/* Simulated SVG Volume Activity Wave */}
                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-white">Live Transaction Telemetry</span>
                        <span className="text-[10px] text-[#EF5613] font-mono">140 Countries Active</span>
                      </div>
                      <svg viewBox="0 0 400 65" className="w-full h-16 stroke-[#EF5613] fill-none">
                        <polyline
                          strokeWidth="2.5"
                          points="0,45 40,38 80,42 120,25 160,30 200,12 240,22 280,8 320,18 360,5 400,14"
                        />
                      </svg>
                    </div>

                    {/* Live Transfer Ledger */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-400" />
                          <span className="font-semibold text-white">Cross-Border Settlement #9842</span>
                        </div>
                        <span className="font-mono text-gray-300">$18,400.00 USD</span>
                        <span className="text-green-400 font-semibold text-[10px]">VERIFIED (12ms)</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] p-2.5 rounded-lg bg-[#101F2B] border border-white/5">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-400" />
                          <span className="font-semibold text-white">Multi-Sig Treasury Swap #9841</span>
                        </div>
                        <span className="font-mono text-gray-300">€45,200.00 EUR</span>
                        <span className="text-green-400 font-semibold text-[10px]">SETTLED (16ms)</span>
                      </div>
                    </div>
                  </>
                )}

                {/* Specific Screen: PulseMed */}
                {selectedAppId === "pulsemed" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Heart Rate</span>
                        <p className="text-base sm:text-lg font-black text-red-400 mt-1">72 BPM</p>
                        <span className="text-[10px] text-green-400">Normal Sinus</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Oxygen Sat.</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">98.6%</p>
                        <span className="text-[10px] text-green-400">Optimal Range</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">AI Triage</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">99.4% Match</p>
                        <span className="text-[10px] text-green-400">Verified</span>
                      </div>
                    </div>

                    {/* Simulated ECG Rhythm Wave */}
                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-white">Continuous Biometric Stream</span>
                        <span className="text-[10px] text-green-400 font-mono">WebRTC Encrypted</span>
                      </div>
                      <svg viewBox="0 0 400 65" className="w-full h-16 stroke-green-400 fill-none">
                        <polyline
                          strokeWidth="2.5"
                          points="0,32 50,32 60,10 70,55 80,25 90,32 150,32 160,8 170,58 180,22 190,32 250,32 260,12 270,55 280,25 290,32 350,32 360,10 370,55 380,25 400,32"
                        />
                      </svg>
                    </div>

                    {/* Patient Queue & EHR Status */}
                    <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-[#101F2B] border border-white/5">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF5613]" />
                        <div>
                          <p className="font-bold text-white">Patient Record #EHR-7721 Sync Complete</p>
                          <p className="text-[10px] text-gray-400">Prescription dispatched to partner pharmacy</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-green-500/10 text-green-400 text-[10px] font-semibold">
                        Ready
                      </span>
                    </div>
                  </>
                )}

                {/* Specific Screen: NexusLogix */}
                {selectedAppId === "nexuslogix" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Active Trucks</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">3,492 Units</p>
                        <span className="text-[10px] text-green-400">100% Tracking</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Route Save</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">-28.4% Fuel</p>
                        <span className="text-[10px] text-green-400">AI Optimized</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">On-Time Rate</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">99.2%</p>
                        <span className="text-[10px] text-green-400">SLA Exceeded</span>
                      </div>
                    </div>

                    {/* Simulated Radar Grid & Fleet Route Map */}
                    <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5 relative overflow-hidden">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-white">Geospatial Telemetry Command</span>
                        <span className="text-[10px] text-blue-400 font-mono">1.4 TB / Day</span>
                      </div>
                      <div className="h-20 w-full bg-[#08141C] rounded-lg border border-white/5 flex items-center justify-around relative">
                        <div className="flex flex-col items-center">
                          <span className="w-3 h-3 rounded-full bg-[#EF5613] animate-ping" />
                          <span className="text-[9px] text-gray-300 mt-1">Hub A (Lagos)</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-dashed border-b-2 border-[#EF5613]/50 mx-2" />
                        <div className="flex flex-col items-center">
                          <span className="w-3 h-3 rounded-full bg-blue-400" />
                          <span className="text-[9px] text-gray-300 mt-1">Fleet #204 En Route</span>
                        </div>
                        <div className="h-0.5 flex-1 bg-dashed border-b-2 border-blue-400/50 mx-2" />
                        <div className="flex flex-col items-center">
                          <span className="w-3 h-3 rounded-full bg-green-400" />
                          <span className="text-[9px] text-gray-300 mt-1">Hub B (Abuja)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-[#101F2B] border border-white/5">
                      <span className="font-semibold text-white">Cold-Chain Reefer Sensor #441</span>
                      <span className="text-xs font-mono text-green-400">-18.2°C (Optimal Deep Freeze)</span>
                    </div>
                  </>
                )}

                {/* Specific Screen: AetherCloud AI */}
                {selectedAppId === "aetherai" && (
                  <>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Context Pool</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">50M+ Docs</p>
                        <span className="text-[10px] text-green-400">Vector Indexed</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Agent Swarm</span>
                        <p className="text-base sm:text-lg font-black text-[#EF5613] mt-1">16 Active</p>
                        <span className="text-[10px] text-gray-400">Autonomous</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101F2B] border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-gray-400">Execution Speed</span>
                        <p className="text-base sm:text-lg font-black text-white mt-1">12x Gain</p>
                        <span className="text-[10px] text-green-400">Audited</span>
                      </div>
                    </div>

                    {/* Agent Pipeline Visualizer */}
                    <div className="p-3.5 rounded-xl bg-[#101F2B] border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-white">Multi-Agent Orchestrator Pipeline</span>
                        <span className="text-[10px] text-purple-400 font-mono">PyTorch + LangGraph</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 pt-1 text-center text-[10px]">
                        <div className="p-2 rounded bg-[#08141C] border border-[#EF5613] text-white font-bold">
                          1. Query Plan
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/10 text-gray-300">
                          2. Vector RAG
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-white/10 text-gray-300">
                          3. Code Synthesizer
                        </div>
                        <div className="p-2 rounded bg-[#08141C] border border-green-500/40 text-green-400 font-bold">
                          4. Verified
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs p-3 rounded-lg bg-[#08141C] border border-white/10 font-mono text-[11px] text-gray-300">
                      <span className="text-green-400">&gt; agent.executeTask(contract_audit)</span>
                      <span className="text-gray-400">0.42s latency</span>
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
                    <span>Security & Isolation Standards</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Engineered with zero-trust network topology, cryptographic key rotation, and automated intrusion detection.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                    Architectural Pillars:
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
                    <span className="text-xs font-bold text-white">System Availability SLA</span>
                    <span className="text-xs font-mono text-green-400">99.999%</span>
                  </div>
                  <div className="w-full bg-[#08141C] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-green-400 h-full w-[99.99%]" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white">Global Response Time (P99)</span>
                    <span className="text-xs font-mono text-[#EF5613]">24ms</span>
                  </div>
                  <div className="w-full bg-[#08141C] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#EF5613] h-full w-[85%]" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-white">Automated Test Coverage</span>
                    <span className="text-xs font-mono text-blue-400">98.4%</span>
                  </div>
                  <div className="w-full bg-[#08141C] h-2.5 rounded-full overflow-hidden">
                    <div className="bg-blue-400 h-full w-[98.4%]" />
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Window Footer */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500 font-mono">
              <span>Cluster: prod-us-east-1</span>
              <span>Encrypted with AES-256-GCM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
