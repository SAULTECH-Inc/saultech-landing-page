import React from "react";
import { Discovery, Group_1, Right_arrow, Whatsapp } from "../assets/svg";
import Button from "../common/Button";
import Card1 from "../components/Card1";
import { card2Data, cards3Data, cardsData } from "../utils/Card1Data";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Modal from "../components/Modal";
import { useModalStore } from "../components/useModalStore";
import { Link } from "react-scroll";
import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";

const LandingPage: React.FC = () => {
  const openModal = useModalStore((state) => state.openModal);
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div className="w-full pb-[100px] bg-[#08141C] text-[#FFFFFF] min-h-screen flex flex-col items-center">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#EF5613",
        }}
      />{" "}
      <nav className="w-[90%] min-h-[113px] xs:h-[125px] flex items-center justify-between">
        <div className="font-semibold text-[32px] text-[#EF5613]">SAULTECH</div>
        <div className="hidden w-[60%] md:flex justify-between">
          <div className=" w-[347px] flex justify-between self-center">
            <p className="relative inline-block pb-1 group cursor-pointer">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-medium"
              >
                Our Services
              </Link>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-[80%] border-b-4 border-[#EF5613] transition-all duration-300"></span>
            </p>
            <p className="relative inline-block pb-1 group cursor-pointer">
              <Link
                to="company"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-medium"
              >
                Company
              </Link>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-[80%] border-b-4 border-[#EF5613] transition-all duration-300"></span>
            </p>
            <p className="relative inline-block pb-1 group cursor-pointer">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="font-medium"
              >
                Porfolio
              </Link>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-[80%] border-b-4 border-[#EF5613] transition-all duration-300"></span>
            </p>
          </div>
          <Button onClick={() => openModal("intouch")} className="w-[160px]">
            Contact Us
          </Button>
        </div>
      </nav>
      <div className="hidden md:block w-[90%]  mt-[61px] mb-4">
        <div className="border-t-4 w-[57.5px] border-[#EF5613] "></div>
      </div>
      <section className="sm:hidden w-full bg-bgImg1 bg-cover bg-right bg-repeat flex items-center ">
        <div className="w-full min-h-[337px] bg-[#363A3DE5] flex flex-col justify-center items-center py-4">
          <h1 className="w-[70%]  max-w-[356px] text-center font-bold text-[24px]">
            Custom Software Development Services for Your Business.
          </h1>
          <p className="text-[13px] text-center w-[70%] max-w-[356px] mt-[20px]">
            Blazing-fast software development for individuals and businesses of
            all sizes, backed by 24/7/365 support.
          </p>
          <Button
            onClick={() => openModal("intouch")}
            className="w-[146px] h-[41px] mt-[25px] flex justify-center items-center"
          >
            Let's Talk
          </Button>
        </div>
      </section>
      <section className="hidden w-[90%] sm:flex">
        <div className="w-[100%] flex flex-col">
          <h1 className="w-[80%] md:w-[75%] lg:w-[84%] xl:w-[80%] font-bold text-[24px] md:text-[32px] lg:text-[52px] xl:text-[64px] lg:leading-[50px] xl:leading-[77.5px]">
            Custom Software Development Services for Your Business.
          </h1>
          <p className="text-[13px] w-[80%] xl:w-[38%] mt-[20px]">
            Blazing-fast software development for individuals and businesses of
            all sizes, backed by 24/7/365 support.
          </p>
          <Button
            onClick={() => openModal("intouch")}
            className="w-[146px] h-[41px] md:w-[228px] mt-[15px] lg:mt-[40px] flex justify-center items-center"
          >
            Let's Talk
          </Button>
        </div>
        <div className="">
          <img src={Group_1} alt="Group 1" />
        </div>
      </section>
      <section className="w-[90%] mt-[54px]">
        <Card1 cardsData={cardsData} />
      </section>
      <section className="w-[90%] mt-[80px] flex flex-col items-center">
        <Modal />
        <p className="text-[20px] md:text-[50px] font-semibold leading-[60px]">
          Our Process
        </p>
        <div className="w-[225px] md:w-[583px] flex justify-center md:py-3 border-b-4 border-[#EF5613]"></div>
        <div className="relative w-[350px] md:w-[750px] mt-[87px] flex flex-col items-center md:gap-10">
          <div className="absolute inset-0 m-auto w-[180px] h-[180px] md:w-[400px] md:h-[400px] border-[5px] border-[#EF5613] rotate-45"></div>
          <div
            onClick={() => openModal("discovery")}
            className="relative z-[5] sm:z-10 md:w-[250px] md:h-[250px] w-[150px] h-[150px] rounded-full bg-[#450D01]  hover:bg-[#f3a17e] cursor-pointer border-[5px] border-[#EF5613] flex flex-col justify-center items-center gap-3 md:gap-6"
          >
            <img src={Discovery} alt="Discovery" />
            <p>Discovery</p>
            <img src={Right_arrow} alt="Right_arrow" />
          </div>
          <div className="flex justify-between w-full">
            <div
              onClick={() => openModal("design")}
              className="relative z-[5] sm:z-10 md:w-[250px] md:h-[250px] w-[150px] h-[150px] rounded-full bg-[#450D01]  hover:bg-[#f3a17e] cursor-pointer border-[5px] border-[#EF5613] flex flex-col justify-center items-center gap-3 md:gap-6"
            >
              <img src={Discovery} alt="Discovery" />
              <p>Design</p>
              <img src={Right_arrow} alt="Right_arrow" />
            </div>
            <div
              onClick={() => openModal("development")}
              className="relative z-[5] sm:z-10 md:w-[250px] md:h-[250px] w-[150px] h-[150px] rounded-full bg-[#450D01]  hover:bg-[#f3a17e] cursor-pointer border-[5px] border-[#EF5613] flex flex-col justify-center items-center gap-3 md:gap-6"
            >
              <img src={Discovery} alt="Discovery" />
              <p>Development</p>
              <img src={Right_arrow} alt="Right_arrow" />
            </div>
          </div>
          <div
            onClick={() => openModal("testing")}
            className="relative z-[5] sm:z-10 md:w-[250px] md:h-[250px] w-[150px] h-[150px] rounded-full bg-[#450D01]  hover:bg-[#f3a17e] cursor-pointer border-[5px] border-[#EF5613] flex flex-col justify-center items-center gap-3 md:gap-6"
          >
            <img src={Discovery} alt="Discovery" />
            <p>Testing</p>
            <img src={Right_arrow} alt="Right_arrow" />
          </div>
        </div>
      </section>
      <section
        className="w-[98%] mt-[80px] flex flex-col items-center"
        id="services"
      >
        <p className="text-[20px] md:text-[50px] font-semibold leading-[60px]">
          Services We Offer
        </p>
        <div className="w-[225px] md:w-[583px] md:pt-3 flex justify-center border-b-4 border-[#EF5613]"></div>
        <div className="w-[100%] mt-[32px] lg:mt-[108px]">
          <Card2 cardsData={card2Data} />
        </div>
      </section>
      <section className="w-[90%] mt-[80px] flex flex-col items-center">
        <p
          className="text-[20px] sm:text-[50px] md:pt-3 font-semibold leading-[60px] "
          id="portfolio"
        >
          Our Portfolio
        </p>
        <div className="w-[225px] sm:w-[440px] flex justify-center sm:pt-1 border-b-4 border-[#EF5613]"></div>
        <p className="w-[90.2%] sm:w-[487px] mt-10 text-center text-[12px] sm:text-[13px] leading-[19px] font-semibold">
          We are a reliable software agency committed to building and developing
          high-quality software for our clients. our experience developers and
          designers work diligently to deliver custom solutions that meet all
          your business needs.
        </p>
      </section>
      <section className="w-full md:mt-[80px] flex flex-col items-center">
        <Card3 cardsData={cards3Data} />
      </section>
      <section className="w-[90%] sm:mt-[40px] md:mt-[80px] flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <p className="text-[20px] sm:text-[50px] md:pt-3 font-semibold md:leading-[60px]">
            Client Testimonial
          </p>
          <div className="w-[225px] sm:w-[583px] flex justify-center border-b-4 border-[#EF5613]"></div>
        </div>
      </section>
      <section className="relative w-[90%] max-w-6xl mx-auto mt-[40px] md:mt-[80px] flex flex-col items-center">
        <div className="w-full bg-white rounded-[16px] py-10 flex flex-col items-center  justify-center">
          <p className="w-[60%] md:w-[70%] text-[#2E2E2E] md:text-5xl lg:text-[64px] font-semibold text-center md:my-[40px]">
            Interested in discussing about a projects?
          </p>
          <button className="flex w-[208px] gap-1 h-12 bg-[#EF5613] items-center justify-center rounded-[8px] mt-[20px] lg:my-[40px]">
            <img src={Whatsapp} alt="Whatsapp" />
            Get in touch with us
          </button>
        </div>
        <div className="absolute left-[-1%] bottom-[20%] w-0 h-0 border-b-[20px] md:border-b-[40px] border-b-[#EF5613] border-r-[20px] md:border-r-[40px] border-r-transparent"></div>

        <div className="absolute left-[33%] translate-x-[-50%] w-0 h-0 border-b-[20px] md:border-b-[40px] border-b-[#EF5613] border-l-[20px] md:border-l-[40px] border-l-transparent"></div>

        <div className="absolute right-[-1%] bottom-[15%] w-0 h-0 border-b-[36px] md:border-b-[72px] border-b-[#EF5613] border-l-[36px] md:border-l-[72px] border-l-transparent"></div>
      </section>
      <footer
        className="relative text-[#E5E5E5] w-[90%] max-w-6xl mx-auto mt-[40px] md:mt-[80px] flex flex-col"
        id="company"
      >
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[26%] mb-3 md:mb-0 md:flex flex-col md:gap-10">
            <p className="font-semibold text-white text-[20px] md:text-[32px] leading-[32px]">
              SAULTECH
            </p>
            <p>
              SaulTech offers expert software consulting, delivering custom
              solutions, digital transformation, and innovative strategies to
              enhance efficiency, scalability, security, and business growth
              through technology.
            </p>
          </div>
          <div className="w-full md:w-[60%] flex flex-wrap justify-between gap-5">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-white">Service</p>
              <p>Web development</p>
              <p>App development</p>
              <p>UIUX Design</p>
              <p>Cyber security</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-white">Office and Contact</p>
              <p>Adamau waziri way 122,</p>
              <p>07011079676</p>
              <p>saultech@gmail.com</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-white">Help</p>
              <p>FAQ</p>
              <p>Help support</p>
            </div>
          </div>
        </div>
        <hr className="bg-white my-[25px] md:my-[53px] w-full" />
        <p className="self-start text-[#FFFFFF]">Saultech. Copyright 2025</p>
      </footer>
    </div>
  );
};

export default LandingPage;
