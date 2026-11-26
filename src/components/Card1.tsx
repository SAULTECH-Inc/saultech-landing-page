import React from "react";
import { Right_arrow } from "../assets/svg";
import { useModalStore } from "./useModalStore";

interface CardProps {
  cardsData: {
    id: number;
    image: string;
    title: string;
    content: string;
    services: string[];
    link?: string;
  }[];
}

const Card1: React.FC<CardProps> = ({ cardsData }) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#12222D]/90 to-[#0A1621]/90 p-8 border border-white/10 hover:border-[#EF5613]/50 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(239,86,19,0.15)] hover:-translate-y-1.5"
        >
          {/* Subtle top-right ambient glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF5613]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#EF5613]/20 transition-all duration-300" />

          <div>
            <div className="w-16 h-16 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center p-3 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <img src={card.image} alt={card.title} className="w-full h-full object-contain" />
            </div>

            <h3 className="font-bold text-xl md:text-2xl text-white mt-6 group-hover:text-[#EF5613] transition-colors duration-200">
              {card.title}
            </h3>

            <div className="w-12 h-1 bg-[#EF5613] rounded-full mt-3 mb-4 group-hover:w-20 transition-all duration-300" />

            <p className="text-sm text-gray-300 leading-relaxed min-h-[72px]">
              {card.content}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {card.services.map((service, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-[#EF5613]/30 transition-colors"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => openModal("intouch")}
            className="flex items-center gap-2 mt-8 text-sm font-semibold text-[#EF5613] hover:text-[#ff783d] transition-colors cursor-pointer group/link pt-4 border-t border-white/5"
          >
            <span>Learn More & Consult</span>
            <img
              src={Right_arrow}
              alt="Arrow"
              className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card1;
