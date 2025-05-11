import React from "react";

interface CardProps {
  cardsData: {
    id: number,
    image: string;
    title: string;
    content: string;
    link?: string;
  }[];
}

const Card3: React.FC<CardProps> = ({ cardsData }) => {
  return (
    <div className="w-full flex flex-wrap lg:gap-10 justify-center">
      {cardsData.map((card) => (
        <div key={card.id} className="w-[90%] max-w-[604px] flex flex-col items-center sm:h-[560px] py-10 overflow-hidden">
          <div className="w-full relative  max-h-[660px] flex flex-col">
            <div>
              <img src={card.image} alt="DADC" />
            </div>
            <div className="w-full absolute bottom-0 bg-[#363A3D] h-[160px] sm:h-[240px] rounded-t-[30px] flex flex-col pl-[14px] sm:pl-[50px] pt-[20px] pb-2  sm:pt-[44px] gap-1 sm:gap-3">
              <h2 className="font-semibold text-[20px] leading-[32px]">
                {card.title}
              </h2>
              <div className="border-t-4 w-[101px] border-[#EF5613]"></div>

              <p className="font-semibold text-[11px] sm:text-[13px] leading-[19px] w-[92%]">
                {card.content}
              </p>
              <a
                href={card.link}
                className="flex flex-col gap-2 cursor-pointer"
              >
                <p className="font-semibold text-[16px] sm:text-[20px] leading-[19px]">
                  Read Case Study
                </p>
                <div className="border w-[166px] border-white"></div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card3;
