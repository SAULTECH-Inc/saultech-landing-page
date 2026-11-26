import React from "react";
import { useModalStore } from "./useModalStore";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

interface CardProps {
  cardsData: {
    id: number;
    image: string;
    title: string;
    category?: string;
    content: string;
    tags?: string[];
    link?: string;
  }[];
}

const Card3: React.FC<CardProps> = ({ cardsData }) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="group relative rounded-2xl bg-[#101F2B] border border-white/10 hover:border-[#EF5613] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(239,86,19,0.18)] hover:-translate-y-1 flex flex-col"
        >
          {/* Project Preview Image Header */}
          <div className="relative w-full h-[260px] sm:h-[320px] bg-[#071118] border-b border-white/10 overflow-hidden flex items-center justify-center p-6">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 relative z-0"
            />
            {card.category && (
              <span className="absolute top-4 left-4 z-20 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#EF5613] text-white shadow-md">
                {card.category}
              </span>
            )}
          </div>

          {/* Project Details Content */}
          <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-2xl text-white group-hover:text-[#EF5613] transition-colors">
                  {card.title}
                </h3>
                <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
                  <FiCheckCircle className="w-3.5 h-3.5" />
                  Live Product
                </span>
              </div>

              <div className="w-12 h-1 bg-[#EF5613] rounded-full mt-3 mb-4" />

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {card.content}
              </p>

              {card.tags && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => openModal("intouch")}
                className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#EF5613] transition-colors cursor-pointer"
              >
                <span>Request Case Study Details</span>
                <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => openModal("intouch")}
                className="text-xs px-4 py-2 rounded-full border border-[#EF5613] text-[#EF5613] hover:bg-[#EF5613] hover:text-white transition-all font-medium cursor-pointer"
              >
                Build Similar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card3;
