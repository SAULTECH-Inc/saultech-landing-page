import React, { useState } from "react";
import { useModalStore } from "./useModalStore";
import { Link } from "react-scroll";
import {
  FiSmartphone,
  FiCpu,
  FiLayers,
  FiMessageSquare,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";

export const CommandDock: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none">
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#08141C]/95 backdrop-blur-md border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.85)]">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
          title={collapsed ? "Expand Quick Bar" : "Minimize Quick Bar"}
        >
          {collapsed ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
        </button>

        {!collapsed && (
          <>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold cursor-pointer transition-all"
            >
              <FiSmartphone className="w-3.5 h-3.5 text-[#EF5613]" />
              <span className="hidden sm:inline">Products</span>
            </Link>

            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold cursor-pointer transition-all"
            >
              <FiLayers className="w-3.5 h-3.5 text-gray-300" />
              <span className="hidden sm:inline">Capabilities</span>
            </Link>

            <Link
              to="process"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold cursor-pointer transition-all"
            >
              <FiCpu className="w-3.5 h-3.5 text-green-400" />
              <span className="hidden sm:inline">Process</span>
            </Link>

            <button
              onClick={() => openModal("contactform")}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EF5613] hover:bg-[#d94a0d] text-white text-xs font-bold transition-all cursor-pointer"
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
