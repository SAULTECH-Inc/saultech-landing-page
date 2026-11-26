import React from "react";
import { FiWifi, FiBattery } from "react-icons/fi";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  is3D?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  className = "",
  is3D = true,
}) => {
  return (
    <div
      className={`relative mx-auto select-none ${className}`}
      style={{
        width: "285px",
        height: "570px",
        perspective: "1400px",
      }}
    >
      <div
        className={`relative w-full h-full rounded-[46px] border-[6px] border-[#33414F] bg-[#000] p-1.5 transition-all duration-500 ${
          is3D
            ? "shadow-[12px_14px_0px_#1E2933,14px_16px_0px_#0F171E,28px_36px_70px_rgba(0,0,0,0.95)]"
            : "shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
        }`}
        style={
          is3D
            ? {
                transform: "rotateY(-16deg) rotateX(6deg) rotateZ(-2deg)",
                transformStyle: "preserve-3d",
              }
            : undefined
        }
      >
        {/* 3D Titanium Side Highlight Rim */}
        <div className="pointer-events-none absolute -inset-[6px] rounded-[46px] border border-white/20" />

        {/* Side Hardware Buttons */}
        <div className="absolute -left-[9px] top-24 h-7 w-[3px] rounded-l-md bg-[#475869]" />
        <div className="absolute -left-[9px] top-36 h-11 w-[3px] rounded-l-md bg-[#475869]" />
        <div className="absolute -left-[9px] top-52 h-11 w-[3px] rounded-l-md bg-[#475869]" />
        <div className="absolute -right-[9px] top-32 h-14 w-[3px] rounded-r-md bg-[#475869]" />

        {/* Screen Enclosure */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#07131B] text-white flex flex-col justify-between border border-white/10">
          {/* Subtle Diagonal Glass Reflection Sheen */}
          <div
            className="pointer-events-none absolute inset-0 z-40 opacity-10"
            style={{
              clipPath: "polygon(0 0, 65% 0, 20% 100%, 0 100%)",
              backgroundColor: "#FFFFFF",
            }}
          />

          {/* Dynamic Island & Status Bar */}
          <div className="relative z-30 flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-white">
            <span className="font-mono">9:41</span>
            <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black flex items-center justify-between px-2.5 border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111]" />
              <span className="w-2 h-2 rounded-full bg-[#0A2538]" />
            </div>
            <div className="flex items-center gap-1.5">
              <FiWifi className="w-3 h-3 text-white" />
              <span className="text-[10px] font-bold">5G</span>
              <FiBattery className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          {/* Real App Screen Body */}
          <div className="flex-1 overflow-y-auto px-3.5 py-2 scrollbar-none flex flex-col relative z-20">
            {children}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="relative z-30 py-2.5 flex justify-center">
            <div className="h-1 w-28 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface LaptopFrameProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export const LaptopFrame: React.FC<LaptopFrameProps> = ({
  children,
  className = "",
  url = "https://app.saultech.internal",
}) => {
  return (
    <div className={`relative mx-auto flex flex-col items-center ${className}`}>
      {/* Display Lid */}
      <div className="relative w-full rounded-t-2xl border-[5px] border-[#2C3844] bg-[#000] p-1.5 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
        {/* Top Web Camera Bezel */}
        <div className="relative flex h-5 w-full items-center justify-center bg-[#07131B] rounded-t-xl px-4 text-[10px] text-gray-400 border-b border-white/5">
          <div className="absolute left-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
            <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
            <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
          </div>
          <div className="h-2 w-2 rounded-full bg-[#000] border border-[#222]" />
          <div className="absolute right-3 hidden sm:flex items-center gap-1 px-3 py-0.5 rounded-md bg-white/5 text-[9px] font-mono text-gray-400">
            <span>{url}</span>
          </div>
        </div>

        {/* Screen Workspace */}
        <div className="relative min-h-[300px] sm:min-h-[380px] w-full overflow-hidden bg-[#08141C] text-white">
          {children}
        </div>
      </div>

      {/* Laptop Aluminum Deck & Hinge Base */}
      <div className="relative -mt-[1px] h-3 sm:h-4 w-[104%] rounded-b-xl border-t border-white/20 bg-[#25323D] shadow-lg flex justify-center">
        <div className="h-1.5 w-16 sm:w-24 rounded-b-md bg-[#131D24]" />
      </div>

      {/* Laptop Foot Pads Shadow */}
      <div className="h-2 w-[90%] bg-black/60 blur-md rounded-full mt-1" />
    </div>
  );
};
