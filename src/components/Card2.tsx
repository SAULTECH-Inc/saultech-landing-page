import React, { useState } from "react";
import { useModalStore } from "./useModalStore";
import { FiCode, FiGlobe, FiLayout, FiSmartphone, FiCloud, FiShoppingCart, FiCpu, FiLayers, FiTrendingUp, FiArrowUpRight } from "react-icons/fi";

interface CardProps {
  cardsData: {
    id: number;
    title: string;
    sub_title: string;
    content: string;
  }[];
}

const serviceIcons: Record<number, React.ReactNode> = {
  1: <FiCode className="w-6 h-6 text-[#EF5613]" />,
  2: <FiGlobe className="w-6 h-6 text-[#EF5613]" />,
  3: <FiLayout className="w-6 h-6 text-[#EF5613]" />,
  4: <FiSmartphone className="w-6 h-6 text-[#EF5613]" />,
  5: <FiCloud className="w-6 h-6 text-[#EF5613]" />,
  6: <FiShoppingCart className="w-6 h-6 text-[#EF5613]" />,
  7: <FiLayers className="w-6 h-6 text-[#EF5613]" />,
  8: <FiCpu className="w-6 h-6 text-[#EF5613]" />,
  9: <FiTrendingUp className="w-6 h-6 text-[#EF5613]" />,
};

const Card2: React.FC<CardProps> = ({ cardsData }) => {
  const openModal = useModalStore((state) => state.openModal);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "dev", label: "Development", ids: [1, 2, 4] },
    { id: "cloud-ai", label: "Cloud & AI", ids: [5, 7, 8] },
    { id: "design-strategy", label: "Design & Strategy", ids: [3, 6, 9] },
  ];

  const filteredCards =
    activeCategory === "all"
      ? cardsData
      : cardsData.filter((card) => {
          const cat = categories.find((c) => c.id === activeCategory);
          return cat?.ids?.includes(card.id);
        });

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-[#EF5613] text-white shadow-[0_0_20px_rgba(239,86,19,0.4)]"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            onClick={() => openModal("intouch")}
            className="group relative rounded-2xl bg-gradient-to-b from-[#11202B]/90 to-[#0A1621]/90 p-7 border border-white/10 hover:border-[#EF5613]/50 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(239,86,19,0.15)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#EF5613]/40 transition-all duration-300">
                  {serviceIcons[card.id] || <FiCode className="w-6 h-6 text-[#EF5613]" />}
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#EF5613] group-hover:text-white transition-colors">
                  <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <h4 className="font-bold text-lg md:text-xl text-white group-hover:text-[#EF5613] transition-colors">
                {card.title} {card.sub_title}
              </h4>

              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                {card.content}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-medium">
              <span className="text-gray-400 group-hover:text-white transition-colors">Enterprise Ready</span>
              <span className="text-[#EF5613] font-semibold group-hover:underline">Discuss Scope &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
