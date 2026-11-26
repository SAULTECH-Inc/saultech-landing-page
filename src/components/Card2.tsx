import React, { useState } from "react";
import { useModalStore } from "./useModalStore";
import {
  FiCode,
  FiSmartphone,
  FiLayout,
  FiCloud,
  FiCpu,
  FiShield,
  FiLayers,
  FiArrowUpRight,
  FiTerminal,
  FiServer,
} from "react-icons/fi";

interface Card2Props {
  cardsData?: any;
}

const Card2: React.FC<Card2Props> = () => {
  const openModal = useModalStore((state) => state.openModal);
  const [selectedPalette, setSelectedPalette] = useState("#EF5613");

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#EF5613]">
            Asymmetrical Engineering Matrix
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-1 tracking-tight">
            Comprehensive Capabilities & Systems
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-400 max-w-md">
          We don't offer generic templates. We build custom-engineered, multi-tier software ecosystems tailored to your exact industry requirements.
        </p>
      </div>

      {/* ASYMMETRICAL BENTO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* TILE 1: Large Anchor Hero Tile (Span 2 col, Span 2 row) */}
        <div
          onClick={() => openModal("contactform")}
          className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-[#101F2B] border border-white/10 hover:border-[#EF5613] p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:shadow-[0_16px_40px_rgba(239,86,19,0.2)] cursor-pointer group relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#08141C] border border-white/10 flex items-center justify-center text-[#EF5613] group-hover:scale-110 transition-transform">
                <FiCode className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                FLAGSHIP CAPABILITY
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#EF5613] transition-colors">
              Custom Enterprise Software & Architecture
            </h3>

            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              We design, develop, and deploy enterprise-grade software solutions tailored to your unique workflows, driving efficiency and sustainable growth.
            </p>

            {/* Interactive Simulated Code Terminal */}
            <div className="mt-6 rounded-2xl bg-[#08141C] border border-white/10 p-4 font-mono text-xs text-gray-300 space-y-1.5 shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[10px] text-gray-500">
                <div className="flex items-center gap-1.5">
                  <FiTerminal className="w-3 h-3 text-[#EF5613]" />
                  <span>core_engine.rs</span>
                </div>
                <span className="text-green-400">COMPILED 100%</span>
              </div>
              <p className="text-purple-400">
                <span className="text-[#EF5613]">pub async fn</span> execute_settlement(tx: Transaction) -&gt; Result&lt;Receipt&gt; &#123;
              </p>
              <p className="text-gray-400 pl-4">
                let verified = tx.verify_cryptographic_signatures().await?;
              </p>
              <p className="text-green-400 pl-4">
                // Sub-20ms distributed ledger settlement
              </p>
              <p className="text-gray-400 pl-4">
                vault::commit_atomic(verified, Channel::Instant).await
              </p>
              <p className="text-purple-400">&#125;</p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold">
            <span className="text-gray-400">Throughput: 48,500 TPS Ready</span>
            <span className="text-[#EF5613] flex items-center gap-1 group-hover:underline">
              <span>Commission Architecture</span>
              <FiArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* TILE 2: Mobile App Development (Span 1 col) */}
        <div
          onClick={() => openModal("contactform")}
          className="rounded-3xl bg-[#101F2B] border border-white/10 hover:border-[#EF5613] p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(239,86,19,0.15)] cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center text-[#EF5613]">
                <FiSmartphone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-gray-400">iOS & Android</span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-[#EF5613] transition-colors">
              Mobile App Development
            </h4>
            <p className="text-xs text-gray-300 mt-2 leading-relaxed">
              Native & cross-platform React Native and Flutter apps engineered for fluid 60 FPS animations and offline cache sync.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="text-green-400 font-mono font-bold">60 FPS Fluidity</span>
            <FiArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#EF5613]" />
          </div>
        </div>

        {/* TILE 3: UI/UX Design & Brand Systems (Span 1 col) */}
        <div
          onClick={() => openModal("contactform")}
          className="rounded-3xl bg-[#101F2B] border border-white/10 hover:border-[#EF5613] p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(239,86,19,0.15)] cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center text-[#EF5613]">
                <FiLayout className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-gray-400">Figma & Tokens</span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-[#EF5613] transition-colors">
              UI/UX Product Design
            </h4>
            <p className="text-xs text-gray-300 mt-2 leading-relaxed">
              Design systems, wireframes, and captivating high-contrast dark interfaces engineered to convert.
            </p>
            {/* Interactive Palette Selector */}
            <div className="flex items-center gap-2 mt-4" onClick={(e) => e.stopPropagation()}>
              {["#EF5613", "#3B82F6", "#10B981", "#8B5CF6"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedPalette(color)}
                  className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                    selectedPalette === color ? "scale-125 border-white" : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="text-gray-400 font-mono text-[11px]">WCAG AAA 100%</span>
            <FiArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#EF5613]" />
          </div>
        </div>

        {/* TILE 4: Cloud, DevOps & Kubernetes (Span 2 col) */}
        <div
          onClick={() => openModal("contactform")}
          className="lg:col-span-2 rounded-3xl bg-[#101F2B] border border-white/10 hover:border-[#EF5613] p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(239,86,19,0.15)] cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center text-[#EF5613]">
                  <FiCloud className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#EF5613] transition-colors">
                    Cloud Native & Kubernetes DevOps
                  </h4>
                  <span className="text-[10px] text-gray-400">AWS / GCP / Bare-Metal Clusters</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-green-400">99.999% SLA</span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Automated CI/CD pipelines, container orchestration, zero-downtime blue/green deployments, and cloud cost optimization.
            </p>

            {/* Live Cluster Health Telemetry */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
              <div className="p-2.5 rounded-xl bg-[#08141C] border border-white/5 flex items-center gap-2">
                <FiServer className="w-4 h-4 text-green-400" />
                <div>
                  <p className="font-bold text-white text-[11px]">Cluster Node 01</p>
                  <p className="text-[9px] text-green-400">● 100% Healthy</p>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#08141C] border border-white/5 flex items-center gap-2">
                <FiServer className="w-4 h-4 text-green-400" />
                <div>
                  <p className="font-bold text-white text-[11px]">Cluster Node 02</p>
                  <p className="text-[9px] text-green-400">● 100% Healthy</p>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#08141C] border border-white/5 flex items-center gap-2">
                <FiServer className="w-4 h-4 text-[#EF5613]" />
                <div>
                  <p className="font-bold text-white text-[11px]">Auto-Scaled</p>
                  <p className="text-[9px] text-yellow-400">12 Pods Active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
            <span className="text-gray-400">Automated Terraform / Ansible</span>
            <span className="text-[#EF5613] flex items-center gap-1 group-hover:underline">
              <span>View Cloud Architecture</span>
              <FiArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* TILE 5: AI & Machine Learning Swarms (Span 1 col) */}
        <div
          onClick={() => openModal("contactform")}
          className="rounded-3xl bg-[#101F2B] border border-white/10 hover:border-[#EF5613] p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(239,86,19,0.15)] cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center text-[#EF5613]">
                <FiCpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-purple-400">PyTorch & RAG</span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-[#EF5613] transition-colors">
              AI & Autonomous Agents
            </h4>
            <p className="text-xs text-gray-300 mt-2 leading-relaxed">
              Harness generative models, vector search, predictive analytics, and automated smart multi-agent swarms.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="text-purple-400 font-mono text-[11px]">12x Speedup</span>
            <FiArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#EF5613]" />
          </div>
        </div>

        {/* TILE 6: Fintech Cybersecurity (Span 1 col) */}
        <div
          onClick={() => openModal("contactform")}
          className="rounded-3xl bg-[#101F2B] border border-white/10 hover:border-[#EF5613] p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(239,86,19,0.15)] cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center text-[#EF5613]">
                <FiShield className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-green-400">eBPF WAF</span>
            </div>
            <h4 className="text-lg font-bold text-white group-hover:text-[#EF5613] transition-colors">
              Cybersecurity & Defense
            </h4>
            <p className="text-xs text-gray-300 mt-2 leading-relaxed">
              Bank-grade penetration defense, kernel-level packet inspection, and zero-day threat mitigation.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="text-green-400 font-mono text-[11px]">0 Breaches</span>
            <FiArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#EF5613]" />
          </div>
        </div>

        {/* TILE 7: API & Microservices Integration (Span 2 col) */}
        <div
          onClick={() => openModal("contactform")}
          className="lg:col-span-2 rounded-3xl bg-[#101F2B] border border-white/10 hover:border-[#EF5613] p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(239,86,19,0.15)] cursor-pointer group"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center text-[#EF5613]">
                  <FiLayers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#EF5613] transition-colors">
                    API & Microservice Ecosystems
                  </h4>
                  <span className="text-[10px] text-gray-400">GraphQL / REST / WebSockets / gRPC</span>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
                Unify payment gateways, legacy databases, ERPs, and third-party SaaS into one seamless low-latency network.
              </p>
            </div>

            {/* JSON Response Preview */}
            <div className="p-3 rounded-xl bg-[#08141C] border border-white/5 font-mono text-[10px] text-gray-300 shrink-0">
              <p className="text-green-400">&#123;</p>
              <p className="pl-3 text-white">"status": <span className="text-green-400">200</span>,</p>
              <p className="pl-3 text-white">"latency": <span className="text-[#EF5613]">"14ms"</span>,</p>
              <p className="pl-3 text-white">"secure": <span className="text-blue-400">true</span></p>
              <p className="text-green-400">&#125;</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
            <span className="text-gray-400">Universal Payment & Data Connectors</span>
            <span className="text-[#EF5613] flex items-center gap-1 group-hover:underline">
              <span>Explore Connectors</span>
              <FiArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
