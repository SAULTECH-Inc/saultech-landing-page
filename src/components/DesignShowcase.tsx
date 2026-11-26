import React, { useState } from "react";
import { designShowcaseData } from "../utils/Card1Data";
import { useModalStore } from "./useModalStore";
import {
  FiLayout,
  FiZap,
  FiBarChart2,
  FiMoon,
  FiCheck,
  FiEye,
} from "react-icons/fi";

const pillarIcons: Record<string, React.ReactNode> = {
  systems: <FiLayout className="w-5 h-5 text-[#EF5613]" />,
  interactions: <FiZap className="w-5 h-5 text-[#EF5613]" />,
  dataviz: <FiBarChart2 className="w-5 h-5 text-[#EF5613]" />,
  craft: <FiMoon className="w-5 h-5 text-[#EF5613]" />,
};

const DesignShowcase: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>("systems");
  const [interactiveCounter, setInteractiveCounter] = useState(1480);
  const [activeToggle, setActiveToggle] = useState(true);
  const openModal = useModalStore((state) => state.openModal);

  const selectedData =
    designShowcaseData.find((d) => d.id === activePillar) || designShowcaseData[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#EF5613]">
          Creative Engineering & Visual Craft
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-2 tracking-tight">
          High-Graphics Creativity in Every Pixel
        </h2>
        <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
        <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
          We don't just build software that works — we build digital experiences that mesmerize your users, elevate your brand authority, and maximize conversion rates.
        </p>
      </div>

      {/* Main 2-Column Creative Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: 4 Selectable Design Pillars (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
          {designShowcaseData.map((item) => {
            const isSelected = item.id === activePillar;
            return (
              <div
                key={item.id}
                onClick={() => setActivePillar(item.id)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#101F2B] border-[#EF5613] shadow-[0_8px_30px_rgba(239,86,19,0.2)] translate-x-1"
                    : "bg-[#0A1621] border-white/10 hover:border-white/20 hover:bg-[#101F2B]/60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center">
                      {pillarIcons[item.id]}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF5613]">
                        {item.tag}
                      </span>
                      <h4 className="font-bold text-base text-white">{item.title}</h4>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#EF5613] animate-pulse" />
                  )}
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mt-1">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5 text-[11px]">
                  <span className="font-mono text-[#EF5613] font-bold">{item.stat}</span>
                  <span className="text-gray-400 font-semibold flex items-center gap-1 group-hover:text-white">
                    <span>Explore Canvas</span> &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Live Interactive Graphics Playground (7 cols) */}
        <div className="lg:col-span-7 rounded-3xl bg-[#101F2B] border border-white/15 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            {/* Top Bar with Lab Badge */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#EF5613]" />
                <span className="font-mono text-xs uppercase font-bold text-white tracking-wider">
                  SaulTech UI/UX Design System Studio
                </span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                WCAG AAA 100%
              </span>
            </div>

            {/* Dynamic Content based on selected pillar */}
            <div className="mb-6">
              <span className="text-xs uppercase font-extrabold text-[#EF5613] tracking-wider">
                Active Specification: {selectedData.tag}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {selectedData.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                {selectedData.description}
              </p>

              {/* Highlights Chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedData.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-lg bg-[#08141C] border border-white/10 text-white"
                  >
                    <FiCheck className="w-3.5 h-3.5 text-[#EF5613]" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Live Component Sandbox */}
            <div className="p-5 rounded-2xl bg-[#08141C] border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-white/5">
                <span className="font-mono text-gray-400">Interactive Component Sandbox</span>
                <span className="text-green-400 font-mono text-[11px]">Click to Test Physics</span>
              </div>

              {/* Interactive Sandbox Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Control 1: State Counter with Instant Feedback */}
                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/10 flex flex-col justify-between">
                  <span className="text-[11px] font-semibold text-gray-400">Throughput Metric Simulator</span>
                  <div className="flex items-center justify-between my-2">
                    <span className="text-2xl font-black text-white font-mono">
                      {interactiveCounter.toLocaleString()} <span className="text-xs text-[#EF5613]">req/s</span>
                    </span>
                    <button
                      onClick={() => setInteractiveCounter((prev) => prev + 120)}
                      className="px-3 py-1.5 rounded-lg bg-[#EF5613] hover:bg-[#d94a0d] text-white text-xs font-bold transition-all active:scale-95 cursor-pointer"
                    >
                      + Boost Load
                    </button>
                  </div>
                  <div className="w-full bg-[#08141C] h-1.5 rounded-full overflow-hidden mt-1">
                    <div
                      className="bg-[#EF5613] h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (interactiveCounter / 3000) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Control 2: Haptic Toggle with Visual Switch */}
                <div className="p-4 rounded-xl bg-[#101F2B] border border-white/10 flex flex-col justify-between">
                  <span className="text-[11px] font-semibold text-gray-400">Low-Latency State Channel</span>
                  <div className="flex items-center justify-between my-2">
                    <span className="text-xs font-bold text-white">
                      Status:{" "}
                      <span className={activeToggle ? "text-green-400" : "text-gray-400"}>
                        {activeToggle ? "Biometric Guard ACTIVE" : "BYPASSED"}
                      </span>
                    </span>
                    <button
                      onClick={() => setActiveToggle((prev) => !prev)}
                      className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                        activeToggle ? "bg-[#EF5613]" : "bg-gray-600"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all duration-200 ${
                          activeToggle ? "left-7" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                  <span className="text-[10px] text-gray-400">Zero re-render latency overhead</span>
                </div>
              </div>

              {/* Interactive Vector Visualizer */}
              <div className="p-4 rounded-xl bg-[#101F2B] border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-white">Streaming Geometric UI Vector</span>
                  <span className="text-[10px] text-gray-400 font-mono">100% SVG • Zero Pixels Lost</span>
                </div>
                <div className="h-16 w-full flex items-center justify-between gap-1">
                  {[40, 65, 30, 85, 95, 75, 60, 90, 100, 80, 55, 70, 90, 85, 95].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-white/10 hover:bg-[#EF5613] transition-colors cursor-pointer"
                      style={{ height: `${height}%` }}
                      title={`Frame #${i + 1} - ${height}% velocity`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-300 font-semibold">
                Ready for Figma Systems, iOS, Android & Next.js Production
              </span>
            </div>

            <button
              onClick={() => openModal("contactform")}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_16px_rgba(239,86,19,0.3)]"
            >
              <FiEye className="w-4 h-4" />
              <span>Commission Custom UI/UX</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;
