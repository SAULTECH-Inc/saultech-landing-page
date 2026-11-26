import React from "react";
import { FiWifi, FiBattery } from "react-icons/fi";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  appName?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative mx-auto rounded-[46px] border-[6px] border-[#2B3844] bg-[#000] p-1.5 shadow-[0_25px_60px_rgba(0,0,0,0.85)] select-none ${className}`}
      style={{ width: "290px", minHeight: "580px" }}
    >
      {/* Side Hardware Buttons */}
      {/* Left: Volume Up & Down & Action */}
      <div className="absolute -left-[9px] top-24 h-7 w-[3px] rounded-l-md bg-[#384654]" />
      <div className="absolute -left-[9px] top-36 h-11 w-[3px] rounded-l-md bg-[#384654]" />
      <div className="absolute -left-[9px] top-52 h-11 w-[3px] rounded-l-md bg-[#384654]" />
      {/* Right: Power Button */}
      <div className="absolute -right-[9px] top-32 h-14 w-[3px] rounded-r-md bg-[#384654]" />

      {/* Screen Enclosure */}
      <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#07131B] text-white flex flex-col justify-between border border-white/5">
        {/* Dynamic Island & Status Bar */}
        <div className="relative z-30 flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-white">
          <span className="font-mono">9:41</span>
          {/* Dynamic Island Pill */}
          <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black flex items-center justify-between px-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#111]" />
            <span className="w-2 h-2 rounded-full bg-[#081f2c]" />
          </div>
          <div className="flex items-center gap-1.5">
            <FiWifi className="w-3 h-3 text-white" />
            <span className="text-[10px] font-bold">5G</span>
            <FiBattery className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* Real App Screen Body */}
        <div className="flex-1 overflow-y-auto px-3.5 py-2 scrollbar-none flex flex-col">
          {children}
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="relative z-30 py-2 flex justify-center">
          <div className="h-1 w-28 rounded-full bg-white/40" />
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
          {/* FaceTime Camera dot */}
          <div className="h-2 w-2 rounded-full bg-[#000] border border-[#222]" />
          {/* Browser URL pill */}
          <div className="absolute right-3 hidden sm:flex items-center gap-1 px-3 py-0.5 rounded-md bg-white/5 text-[9px] font-mono text-gray-400">
            <span>🔒</span>
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
        {/* Display Opening Thumb Notch */}
        <div className="h-1.5 w-16 sm:w-24 rounded-b-md bg-[#131D24]" />
      </div>

      {/* Laptop Foot Pads Shadow */}
      <div className="h-2 w-[90%] bg-black/60 blur-md rounded-full mt-1" />
    </div>
  );
};
