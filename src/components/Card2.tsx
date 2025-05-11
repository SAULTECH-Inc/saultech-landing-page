import React, { useEffect, useState, useRef } from "react";
import { useModalStore } from "./useModalStore";

interface CardProps {
  cardsData: {
    id: number;
    title: string;
    sub_title: string;
    content: string;
  }[];
}

const Card2: React.FC<CardProps> = ({ cardsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const openModal = useModalStore((state) => state.openModal);
  
  const extendedCards = [...cardsData, ...cardsData, ...cardsData];
  const offset = cardsData.length;
  
  useEffect(() => {
    setCurrentIndex(offset);
    
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-${offset * 100}%)`;
      void carouselRef.current.offsetHeight;
      carouselRef.current.style.transition = 'transform 500ms ease-out';
    }
  }, [offset]);
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    const isSmallScreen = window.innerWidth < 1023;

    if (!isPaused && isSmallScreen) {
      interval = setInterval(() => {
        moveToSlide(currentIndex + 1);
      }, 3000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused, currentIndex]);

  const handleTransitionEnd = () => {
    if (currentIndex >= offset * 2) {
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
        const newIndex = currentIndex - offset;
        setCurrentIndex(newIndex);
        carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
      }
    }
    
    if (currentIndex < offset) {
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none';
        const newIndex = currentIndex + offset;
        setCurrentIndex(newIndex);
        carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
      }
    }
    
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.style.transition = 'transform 500ms ease-out';
      }
    }, 50);
  };

  const moveToSlide = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 500ms ease-out';
      setCurrentIndex(index);
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const handleDotClick = (index: number) => {
    moveToSlide(index + offset);
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const visualIndex = ((currentIndex % cardsData.length) + cardsData.length) % cardsData.length;
  return (
    <div>
      <div className="flex lg:hidden justify-center my-4">
        {cardsData.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
              visualIndex === index ? "bg-[#EF5613]" : "bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="lg:hidden">
        <div 
          className="relative overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={carouselRef}
            className="flex w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="flex-shrink-0 w-full flex justify-center px-4"
              >
                <div className="w-full xs:w-[372px] max-w-sm bg-[#363A3D] border-[4px] border-[#EF5613] rounded-[14px] flex flex-col items-center py-5 px-[33px]">
                  <div className="flex w-full flex-col">
                    <h2 className="font-semibold text-[28px] leading-[31px] mt-[15px]">
                      {card.title} <br /> {card.sub_title}
                    </h2>
                    <div className="border-t-4 w-[79px] border-white mt-[11px]"></div>

                    <p className="font-semibold text-[12px] text-[#878C8F] leading-[19px] w-[90%] mt-[22px]">
                      {card.content}
                    </p>
                    <div
                      className="flex gap-2 cursor-pointer items-center mt-[40px] lg:mt-[100px] py-5 w-[80%] self-center justify-center bg-[#EF5613]"
                      onClick={() => openModal("intouch")}
                    >
                      <p className="font-semibold text-[12px] leading-[19px]">
                        Get in touch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-wrap gap-10 justify-center">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="w-full xs:w-[372px] max-w-sm bg-[#363A3D] border-[4px] border-[#EF5613] rounded-[14px] flex flex-col items-center py-5 px-[33px]"
          >
            <div className="flex w-full flex-col">
              <h2 className="font-semibold text-[28px] leading-[31px] mt-[15px]">
                {card.title} <br /> {card.sub_title}
              </h2>
              <div className="border-t-4 w-[79px] border-white mt-[11px]"></div>

              <p className="font-semibold text-[12px] text-[#878C8F] leading-[19px] w-[90%] mt-[22px]">
                {card.content}
              </p>
              <div
                className="flex gap-2 cursor-pointer items-center mt-[100px] py-5 w-[80%] self-center justify-center bg-[#EF5613]"
                onClick={() => openModal("intouch")}
              >
                <button type="button" className="font-semibold text-[12px] leading-[19px]">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card2;
