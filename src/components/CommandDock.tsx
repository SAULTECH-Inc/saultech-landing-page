import React, { useState } from "react";
import { useModalStore } from "./useModalStore";
import { Link } from "react-scroll";
import {
  FiSmartphone,
  FiZap,
  FiActivity,
  FiMessageSquare,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";

export const CommandDock: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none">
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#08141C]/90 backdrop-blur-lg border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.85)]">
        {/* Toggle Collapse */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
          title={collapsed ? "Expand Command Dock" : "Minimize Dock"}
        >
          {collapsed ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
        </button>

        {!collapsed && (
          <>
            {/* Dock Item 1: Flagship Apps */}
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <FiSmartphone className="w-3.5 h-3.5 text-[#EF5613]" />
              <span className="hidden sm:inline">8 Built Apps</span>
            </Link>

            {/* Dock Item 2: Kinetic Arena */}
            <Link
              to="kinetic-lab"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <FiZap className="w-3.5 h-3.5 text-yellow-400" />
              <span className="hidden sm:inline">Kinetic Arena</span>
            </Link>

            {/* Dock Item 3: Design Lab */}
            <Link
              to="design-lab"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <FiActivity className="w-3.5 h-3.5 text-green-400" />
              <span className="hidden sm:inline">Creative Lab</span>
            </Link>

            {/* Dock Item 4: Instant Consultation CTA */}
            <button
              onClick={() => openModal("contactform")}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white text-xs font-bold transition-all shadow-[0_0_16px_rgba(239,86,19,0.4)] cursor-pointer hover:scale-105 active:scale-95"
            >
              <FiMessageSquare className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CommandDock;
