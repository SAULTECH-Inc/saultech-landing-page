import React from "react";
import { Right_arrow } from "../assets/svg";

interface CardProps {
    cardsData: {
      id: number,
      image: string;
      title: string;
      content: string;
      services: string[];
      link?: string;
    }[];
  }

const Card1: React.FC<CardProps> = ({ cardsData }) => {
  return (
    <div className="w-full flex flex-wrap gap-10 lg:gap-20 justify-center">
      {cardsData.map((card) => (
    <div key={card.id} className="w-full xs:w-[372px] max-w-sm bg-[#363A3D] shadow-lg rounded-[14px] flex flex-col items-center sm:h-[460px] py-10 pl-[20px] sm:px-[33px]">
            <div  className="flex w-full flex-col">
        <div>
          <img src={card.image} alt="Imac" />
        </div>
        <h2 className="font-semibold text-[20px] leading-[32px] mt-[15px]">
          {card.title}
        </h2>
        <div className="border-t-4 w-[79px] border-white mt-[11px]"></div>

        <p className="font-semibold text-[12px] text-[#878C8F] leading-[19px] w-[94%] sm:w-[90%] mt-[22px]">
          {card.content}
        </p>
        <div className="flex flex-wrap text-[12px] gap-2 mt-[26px]">
            { card.services.map((service, index) => (<div key={index} className="flex items-center justify-center py-[6px] px-[8px] bg-[#08141C] rounded-[10px] ">
            {service}
          </div>))}
        </div>
        <a
          href={card.link}
          className="flex gap-2 cursor-pointer items-center mt-[29px]"
        >
          <p className="font-semibold text-[12px] leading-[19px]">Learn More</p>{" "}
          <img src={Right_arrow} alt="Right_arrow" />
        </a>
      </div>
        </div>
      ))}
    </div>
  );
};

export default Card1;
