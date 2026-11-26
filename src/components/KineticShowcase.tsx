import React, { useState } from "react";
import { motion } from "framer-motion";
import { useModalStore } from "./useModalStore";
import {
  FiZap,
  FiPlay,
  FiRotateCw,
  FiArrowUp,
  FiSmile,
} from "react-icons/fi";

type BotAction = "idle" | "walk" | "jump" | "somersault" | "dance";

export const MechanicalGears: React.FC<{ speedMultiplier?: number; className?: string }> = ({
  speedMultiplier = 1,
  className = "",
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Large Drive Gear */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-24 h-24 sm:w-28 sm:h-28 text-[#EF5613]"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 12 / speedMultiplier,
          ease: "linear",
        }}
      >
        <circle cx="50" cy="50" r="32" fill="#101F2B" stroke="#EF5613" strokeWidth="4" />
        <circle cx="50" cy="50" r="12" fill="#EF5613" />
        {/* Teeth */}
        {[...Array(12)].map((_, i) => (
          <rect
            key={i}
            x="46"
            y="6"
            width="8"
            height="14"
            rx="2"
            fill="#EF5613"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </motion.svg>

      {/* Medium Interlocked Counter-Rotating Gear */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-18 h-18 sm:w-20 sm:h-20 text-white -ml-5 -mt-8"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 8 / speedMultiplier,
          ease: "linear",
        }}
      >
        <circle cx="50" cy="50" r="28" fill="#101F2B" stroke="white" strokeWidth="3" />
        <circle cx="50" cy="50" r="8" fill="white" />
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x="46"
            y="12"
            width="8"
            height="12"
            rx="2"
            fill="white"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
      </motion.svg>

      {/* Small High-Speed Pinion Gear */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-12 h-12 sm:w-14 sm:h-14 text-green-400 -ml-3 mt-10"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 4 / speedMultiplier,
          ease: "linear",
        }}
      >
        <circle cx="50" cy="50" r="20" fill="#101F2B" stroke="#4ade80" strokeWidth="3" />
        <circle cx="50" cy="50" r="6" fill="#4ade80" />
        {[...Array(6)].map((_, i) => (
          <rect
            key={i}
            x="47"
            y="20"
            width="6"
            height="10"
            rx="1.5"
            fill="#4ade80"
            transform={`rotate(${i * 60} 50 50)`}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export const SaulBotMascot: React.FC<{ action: BotAction; onClick?: () => void }> = ({
  action,
  onClick,
}) => {
  // Motion animation variants based on action
  const getBotAnimation = () => {
    switch (action) {
      case "somersault":
        return {
          y: [0, -110, -110, 0],
          rotate: [0, 180, 360, 360],
          scaleY: [1, 0.9, 1.1, 0.9, 1],
          transition: { duration: 0.9, ease: "easeInOut" },
        };
      case "jump":
        return {
          y: [0, -85, 0],
          scaleY: [0.85, 1.15, 0.9, 1],
          transition: { duration: 0.65, ease: "easeOut" },
        };
      case "walk":
        return {
          x: [-40, 40, -40],
          y: [0, -10, 0, -10, 0],
          rotate: [-4, 4, -4, 4, -4],
          transition: { repeat: Infinity, duration: 2.2, ease: "easeInOut" },
        };
      case "dance":
        return {
          y: [0, -25, 0, -25, 0],
          rotate: [-15, 15, -15, 15, 0],
          scale: [1, 1.08, 1, 1.08, 1],
          transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
        };
      case "idle":
      default:
        return {
          y: [0, -12, 0],
          scaleY: [1, 1.03, 0.98, 1],
          transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        };
    }
  };

  return (
    <motion.div
      onClick={onClick}
      animate={getBotAnimation()}
      className="relative cursor-pointer select-none flex flex-col items-center"
      title="Click me to do a somersault!"
    >
      {/* Speech Bubble */}
      <motion.div
        animate={{ y: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="mb-2 px-3 py-1.5 rounded-xl bg-[#EF5613] text-white text-[11px] font-bold shadow-lg flex items-center gap-1.5 whitespace-nowrap border border-white/20"
      >
        <span>⚡ Click me to Somersault!</span>
      </motion.div>

      {/* Cyber Mascot Robot Vector */}
      <svg width="120" height="150" viewBox="0 0 120 150" fill="none">
        {/* Antenna with Blinking LED */}
        <line x1="60" y1="20" x2="60" y2="6" stroke="#EF5613" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="5" r="5" fill="#EF5613" />
        <circle cx="60" cy="5" r="2.5" fill="#FFFFFF" />

        {/* Head Chassis */}
        <rect x="25" y="20" width="70" height="52" rx="16" fill="#101F2B" stroke="#EF5613" strokeWidth="4" />
        {/* Side Head Ears */}
        <rect x="18" y="36" width="7" height="20" rx="3" fill="#EF5613" />
        <rect x="95" y="36" width="7" height="20" rx="3" fill="#EF5613" />

        {/* Digital Screen Visor */}
        <rect x="33" y="28" width="54" height="34" rx="10" fill="#07131B" stroke="#2C3D4D" strokeWidth="2" />

        {/* Expressive Glowing Eyes */}
        <motion.circle
          cx="48"
          cy="44"
          r="6"
          fill="#4ADE80"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
        />
        <motion.circle
          cx="72"
          cy="44"
          r="6"
          fill="#4ADE80"
          animate={{ scaleY: [1, 0.1, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.2 }}
        />

        {/* Robot Torso / Body */}
        <rect x="34" y="78" width="52" height="42" rx="12" fill="#101F2B" stroke="#EF5613" strokeWidth="4" />
        {/* Core Reactor Chest Plate */}
        <circle cx="60" cy="98" r="10" fill="#08141C" stroke="#4ADE80" strokeWidth="2" />
        <circle cx="60" cy="98" r="5" fill="#EF5613" />

        {/* Left Arm */}
        <motion.g
          animate={
            action === "walk"
              ? { rotate: [-20, 20, -20], originX: "28px", originY: "84px" }
              : action === "dance"
              ? { rotate: [-45, 10, -45], originX: "28px", originY: "84px" }
              : { rotate: [0, 8, 0] }
          }
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <rect x="18" y="82" width="12" height="26" rx="6" fill="#101F2B" stroke="#EF5613" strokeWidth="3" />
          <circle cx="24" cy="112" r="5" fill="#EF5613" />
        </motion.g>

        {/* Right Arm */}
        <motion.g
          animate={
            action === "walk"
              ? { rotate: [20, -20, 20], originX: "92px", originY: "84px" }
              : action === "dance"
              ? { rotate: [10, -45, 10], originX: "92px", originY: "84px" }
              : { rotate: [0, -8, 0] }
          }
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <rect x="90" y="82" width="12" height="26" rx="6" fill="#101F2B" stroke="#EF5613" strokeWidth="3" />
          <circle cx="96" cy="112" r="5" fill="#EF5613" />
        </motion.g>

        {/* Left Leg */}
        <motion.rect
          x="42"
          y="122"
          width="12"
          height="22"
          rx="5"
          fill="#101F2B"
          stroke="#EF5613"
          strokeWidth="3"
          animate={action === "walk" ? { y: [0, -6, 0] } : {}}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
        {/* Right Leg */}
        <motion.rect
          x="66"
          y="122"
          width="12"
          height="22"
          rx="5"
          fill="#101F2B"
          stroke="#EF5613"
          strokeWidth="3"
          animate={action === "walk" ? { y: [-6, 0, -6] } : {}}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
      </svg>
    </motion.div>
  );
};

const KineticShowcase: React.FC = () => {
  const [gearSpeed, setGearSpeed] = useState<number>(1);
  const [botAction, setBotAction] = useState<BotAction>("idle");
  const openModal = useModalStore((state) => state.openModal);

  const triggerAction = (action: BotAction) => {
    setBotAction(action);
    if (action === "somersault" || action === "jump") {
      setTimeout(() => setBotAction("idle"), 1000);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase font-extrabold tracking-widest text-[#EF5613]">
          Live Kinetic Playground
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-2 tracking-tight">
          Software That Moves, Bounces & Outperforms
        </h2>
        <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
        <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
          Stiff, boring websites don't convert. We engineer fluid motion, synchronized mechanical gearing, and acrobatic micro-interactions that bring software to life.
        </p>
      </div>

      {/* Main Kinetic Arena (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Arena: SaulBot Acrobatic Arena (Jumps, Walks, Somersaults) */}
        <div className="rounded-3xl bg-[#101F2B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF5613] animate-pulse" />
                <span className="text-xs font-bold text-white font-mono uppercase">
                  SaulBot Physics & Acrobatics Engine
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
                60 FPS KINETIC
              </span>
            </div>

            {/* Kinetic Stage Area */}
            <div className="h-64 sm:h-72 rounded-2xl bg-[#08141C] border border-white/5 flex flex-col items-center justify-end pb-4 relative overflow-hidden">
              {/* Runway Ground Line */}
              <div className="absolute bottom-4 left-6 right-6 h-1 bg-white/10 rounded-full" />

              {/* Live Animated Mascot */}
              <SaulBotMascot
                action={botAction}
                onClick={() => triggerAction("somersault")}
              />
            </div>
          </div>

          {/* Interactive Action Triggers */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
              Trigger Mascot Kinetics:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => triggerAction("somersault")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  botAction === "somersault"
                    ? "bg-[#EF5613] text-white shadow-[0_0_16px_rgba(239,86,19,0.5)] scale-105"
                    : "bg-[#08141C] text-gray-300 hover:text-white border border-white/10 hover:border-[#EF5613]"
                }`}
              >
                <span>🤸 Somersault!</span>
              </button>

              <button
                onClick={() => triggerAction("jump")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  botAction === "jump"
                    ? "bg-[#EF5613] text-white shadow-[0_0_16px_rgba(239,86,19,0.5)] scale-105"
                    : "bg-[#08141C] text-gray-300 hover:text-white border border-white/10 hover:border-[#EF5613]"
                }`}
              >
                <FiArrowUp className="w-3.5 h-3.5 text-[#EF5613]" />
                <span>Rocket Jump</span>
              </button>

              <button
                onClick={() => triggerAction("walk")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  botAction === "walk"
                    ? "bg-[#EF5613] text-white shadow-[0_0_16px_rgba(239,86,19,0.5)] scale-105"
                    : "bg-[#08141C] text-gray-300 hover:text-white border border-white/10 hover:border-[#EF5613]"
                }`}
              >
                <span>🏃 Walk & Strut</span>
              </button>

              <button
                onClick={() => triggerAction("dance")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  botAction === "dance"
                    ? "bg-[#EF5613] text-white shadow-[0_0_16px_rgba(239,86,19,0.5)] scale-105"
                    : "bg-[#08141C] text-gray-300 hover:text-white border border-white/10 hover:border-[#EF5613]"
                }`}
              >
                <FiSmile className="w-3.5 h-3.5 text-yellow-400" />
                <span>Dance!</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Arena: Synchronized Mechanical Gearing Engine */}
        <div className="rounded-3xl bg-[#101F2B] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <FiRotateCw className="w-4 h-4 text-[#EF5613]" />
                <span className="text-xs font-bold text-white font-mono uppercase">
                  Synchronized Mechanical Gearbox
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[#EF5613]">
                {gearSpeed === 1 ? "1,850 RPM" : gearSpeed === 3 ? "5,400 RPM" : "14,800 RPM"}
              </span>
            </div>

            {/* Live Gearing Mechanism Stage */}
            <div className="h-64 sm:h-72 rounded-2xl bg-[#08141C] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden p-4">
              <MechanicalGears speedMultiplier={gearSpeed} />
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-gray-400 font-mono">
                <span>Torque Transmission: 99.4%</span>
                <span className="text-green-400">Zero Tooth Slip</span>
              </div>
            </div>
          </div>

          {/* Gear Speed Controls */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
              Gearbox Velocity Overdrive:
            </span>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setGearSpeed(1)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  gearSpeed === 1
                    ? "bg-[#EF5613] text-white shadow-[0_0_16px_rgba(239,86,19,0.5)]"
                    : "bg-[#08141C] text-gray-300 hover:text-white border border-white/10 hover:border-[#EF5613]"
                }`}
              >
                <span>⚙️ Standard 1x</span>
              </button>

              <button
                onClick={() => setGearSpeed(3)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  gearSpeed === 3
                    ? "bg-[#EF5613] text-white shadow-[0_0_16px_rgba(239,86,19,0.5)]"
                    : "bg-[#08141C] text-gray-300 hover:text-white border border-white/10 hover:border-[#EF5613]"
                }`}
              >
                <FiZap className="w-3.5 h-3.5 text-yellow-400" />
                <span>Overdrive 3x</span>
              </button>

              <button
                onClick={() => setGearSpeed(6)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  gearSpeed === 6
                    ? "bg-[#EF5613] text-white shadow-[0_0_16px_rgba(239,86,19,0.5)]"
                    : "bg-[#08141C] text-gray-300 hover:text-white border border-white/10 hover:border-[#EF5613]"
                }`}
              >
                <span>⚡ Hyper 6x</span>
              </button>
            </div>

            <button
              onClick={() => openModal("contactform")}
              className="w-full mt-4 py-3 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_16px_rgba(239,86,19,0.3)]"
            >
              <span>Build Motion-Driven Apps With Us</span>
              <FiPlay className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KineticShowcase;
