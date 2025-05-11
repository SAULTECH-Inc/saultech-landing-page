import React from "react";
import { motion } from "framer-motion";
import { useModalStore } from "./useModalStore";
import { IoCloseOutline } from "react-icons/io5";
import {
  ArrowRight,
  ContactForm,
  EmailUs,
  Headphones,
  SendMessage,
  Whatsapp2,
} from "../assets/svg";

const Modal: React.FC = () => {
  const { isOpen, selectedOption, closeModal, openModal } = useModalStore();

  if (!isOpen) return null;

    const getAnimationConfig = () => {
        if (["discovery", "development", "intouch", "testing", "design"].includes(selectedOption)) {
          return {
            initial: { opacity: 0, y: -100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -100 },
            transition: { type: "spring", stiffness: 300, damping: 30 }
          };
        } 
        else if (["contactform", "whatsapp", "livechat", "emailus"].includes(selectedOption)) {
          return {
            initial: { opacity: 0, y: 100 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 100 },
            transition: { type: "spring", stiffness: 300, damping: 30 }
          };
        } 
        // Default animation (scale)
        else {
          return {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.8 },
            transition: { type: "spring", stiffness: 500, damping: 30 }
          };
        }
      };

      const animationConfig = getAnimationConfig();


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={animationConfig.initial}
        animate={animationConfig.animate}
        exit={animationConfig.exit}
        transition={animationConfig.transition}
        onClick={(e) => e.stopPropagation()}
      >
        {selectedOption === "discovery" && (
          <div className="bg-white text-[#000000] m-2 max-w-[846px] py-[32px] px-4 sm:px-[25px] flex flex-col items-center">
            <div className="w-full sm:w-[90%] flex justify-between">
              <p className="text-[#EF5613] text-[20px] sm:text-[32px]">
                Discovery
              </p>
              <div
                onClick={closeModal}
                className="bg-black rounded-full w-[35px] h-[35px] cursor-pointer flex items-center justify-center"
              >
                <IoCloseOutline fontSize={30} color="white" />
              </div>
            </div>
            <p className="sm:w-[90%] my-5 sm:mb-[80px] sm:mt-[40px] sm:text-[20px] sm:leading-[34px]">
              The discovery phase is the foundation of any successful project.
              At this stage, we engage with our clients to understand their
              vision, goals, and requirements. We conduct in-depth research,
              analyze competitors, and gather insights to create a well-defined
              strategy. Our team collaborates closely with stakeholders to
              ensure clarity on scope, functionality, and business objectives.
              By the end of this phase, we have a clear roadmap that aligns with
              our client’s expectations and market demands.
            </p>
          </div>
        )}
        {selectedOption === "development" && (
          <div className="bg-white text-[#000000] m-2 max-w-[846px] py-[32px] px-4 sm:px-[25px] flex flex-col items-center">
            <div className="w-full sm:w-[90%] flex justify-between">
              <p className="text-[#EF5613] text-[20px] sm:text-[32px]">
                Development
              </p>
              <div
                onClick={closeModal}
                className="bg-black rounded-full w-[35px] h-[35px] cursor-pointer flex items-center justify-center"
              >
                <IoCloseOutline fontSize={30} color="white" />
              </div>
            </div>
            <p className="sm:w-[90%] my-5 sm:mb-[80px] sm:mt-[40px] sm:text-[20px] sm:leading-[34px]">
              With the approved design in place, our development team begins
              coding the project. We follow best coding practices, agile
              methodologies, and the latest technologies to ensure a scalable
              and efficient solution. Whether it’s a web application, mobile
              app, or software system, our developers bring designs to life with
              clean, maintainable code. Regular updates, sprint reviews, and
              collaboration with clients ensure the project stays on track and
              meets all requirements.
            </p>
          </div>
        )}
        {selectedOption === "testing" && (
          <div className="bg-white text-[#000000] m-2 max-w-[846px] py-[32px] px-4 sm:px-[25px] flex flex-col items-center">
            <div className="w-full sm:w-[90%] flex justify-between">
              <p className="text-[#EF5613] text-[20px] sm:text-[32px]">
                Testing
              </p>
              <div
                onClick={closeModal}
                className="bg-black rounded-full w-[35px] h-[35px] cursor-pointer flex items-center justify-center"
              >
                <IoCloseOutline fontSize={30} color="white" />
              </div>
            </div>
            <p className="sm:w-[90%] my-5 sm:mb-[80px] sm:mt-[40px] sm:text-[20px] sm:leading-[34px]">
              Before launching, we conduct rigorous testing to ensure the
              product is bug-free, secure, and fully functional. Our quality
              assurance team performs various testing methods, including
              functional, usability, performance, and security testing. Any
              issues are identified and fixed promptly to guarantee a seamless
              user experience. We don’t just test for errors—we ensure the
              software meets industry standards and client expectations.
            </p>
          </div>
        )}
        {selectedOption === "design" && (
          <div className="bg-white text-[#000000] m-2 max-w-[846px] py-[32px] px-4 sm:px-[25px] flex flex-col items-center">
            <div className="w-full sm:w-[90%] flex justify-between">
              <p className="text-[#EF5613] text-[20px] sm:text-[32px]">
                Design
              </p>
              <div
                onClick={closeModal}
                className="bg-black rounded-full w-[35px] h-[35px] cursor-pointer flex items-center justify-center"
              >
                <IoCloseOutline fontSize={30} color="white" />
              </div>
            </div>
            <p className="sm:w-[90%] my-5 sm:mb-[80px] sm:mt-[40px] sm:text-[20px] sm:leading-[34px]">
              Once we have a solid understanding of the project, we move on to
              the design phase. Our UX/UI designers craft wireframes, mockups,
              and prototypes that bring the concept to life. We focus on
              creating intuitive, user-friendly, and visually appealing designs
              that enhance user experience. Every element is carefully planned,
              from color schemes to typography, ensuring that the final product
              not only looks great but also functions seamlessly. Client
              feedback is essential in this phase, and we iterate until we
              achieve the perfect design.
            </p>
          </div>
        )}
        {selectedOption === "whatsapp" && <div>Whatsapp</div>}
        {selectedOption === "intouch" && (
          <div className="bg-white text-[#000000] m-2 max-w-[352px] py-[32px] px-4 sm:px-[25px] rounded-[35px] ">
            <h2 className="text-[24px]">Get in Touch</h2>
            <p className="text-[#363A3D] mt-3 text-[12px]">
              We’re here to help! Choose your preferred way to get in touch:
            </p>
            <div className="flex flex-col gap-2 sm:gap-5 mt-5">
              <div
                onClick={() => {
                    closeModal();
                    openModal("livechat")}}
                className="flex justify-between items-center bg-[#E6E6E64A] rounded-[20px] px-4 h-[53px]"
              >
                <div className="w-full flex items-center gap-4">
                  <img src={Headphones} alt="Headphones" />
                  Live Chat
                </div>{" "}
                <img src={ArrowRight} />{" "}
              </div>
              <div
                onClick={() => openModal("contactform")}
                className="flex justify-between items-center bg-[#E6E6E64A] rounded-[20px] px-4 h-[53px]"
              >
                <div className="w-full flex items-center gap-4">
                  <img src={ContactForm} />
                  Contact Form
                </div>{" "}
                <img src={ArrowRight} />{" "}
              </div>
              <div
                onClick={() => openModal("whatsapp")}
                className="flex justify-between items-center bg-[#E6E6E64A] rounded-[20px] px-4 h-[53px]"
              >
                <div className="w-full flex items-center gap-4">
                  <img src={Whatsapp2} alt="whatsapp" />
                  Whatsapp
                </div>{" "}
                <img src={ArrowRight} />{" "}
              </div>
              <div
                onClick={() => openModal("emailus")}
                className="flex justify-between items-center bg-[#E6E6E64A] rounded-[20px] px-4 h-[53px]"
              >
                <div className="w-full flex items-center gap-4">
                  <img src={EmailUs} alt="emailus" />
                  Email Us
                </div>{" "}
                <img src={ArrowRight} />{" "}
              </div>
            </div>
            <div
              onClick={closeModal}
              className="flex justify-center items-center h-12 bg-[#EF5613] rounded-[20px] text-white mt-[30px] sm:mt-[60px]"
            >
              <button>Close</button>
            </div>
          </div>
        )}
        {selectedOption === "contactform" && (
          <div className="bg-white text-[#000000] m-2 max-w-[352px] py-[32px] px-4 sm:px-[25px] rounded-[35px] ">
            <div className="flex justify-between items-center">
              <h2 className="text-[24px]">Get in Touch</h2>
              <div
                onClick={closeModal}
                className="bg-black rounded-full  cursor-pointer"
              >
                <IoCloseOutline fontSize={30} color="white" />
              </div>
            </div>{" "}
            <p className="text-[#363A3D] mt-3 text-[12px]">
              You can reach us anytime
            </p>
            <form className="flex flex-col gap-2 sm:gap-5 mt-5">
              <div className="flex justify-between gap-2">
                <div className="flex items-center bg-[#E6E6E64A] rounded-[20px] px-4 h-[40px]">
                  <input
                    type="text"
                    className="text-[12px] w-full bg-transparent border-none focus:ring-0"
                    value=""
                    placeholder="First name"
                  />
                </div>
                <div className="flex items-center bg-[#E6E6E64A] rounded-[20px] px-4 h-[40px]">
                  <input
                    type="text"
                    className="text-[12px] w-full bg-transparent border-none focus:ring-0"
                    value=""
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="flex items-center bg-[#E6E6E64A] rounded-[20px] px-4 h-[40px]">
                <input
                  type="text"
                  className="text-[12px] w-full bg-transparent border-none focus:ring-0"
                  value=""
                  placeholder="Email"
                />
              </div>
              <div className="flex items-center bg-[#E6E6E64A] rounded-[20px] px-4 h-[40px]">
                <p className="text-[12px]">+234</p>
                <input
                  type="number"
                  className="text-[12px] w-full bg-transparent border-none focus:ring-0"
                />
              </div>
              <div className="flex items-start bg-[#E6E6E64A] rounded-[20px] p-4 min-h-[140px]">
                <input
                  type="textarea"
                  className="text-[12px] w-full  bg-transparent border-none focus:ring-0"
                  value=""
                  placeholder="How can we help?"
                />
              </div>
            </form>
            <div className="flex justify-center items-center h-12 bg-[#EF5613] rounded-[20px] text-white mt-[30px]">
              <button>Submit</button>
            </div>
            <div className="w-full flex items-center justify-center mt-2">
              <p className="text-[11px] text-center w-[75%]">
                By contacting us you agree to our{" "}
                <span className="text-[#EF5613]">terms of service</span> and{" "}
                <span className="text-[#EF5613]">privacy policy</span>{" "}
              </p>
            </div>
          </div>
        )}
        {selectedOption === "livechat" && (
          <div className="bg-white text-[#000000] m-2 max-w-[352px] min-h-[590px] py-[32px] px-4 sm:px-[25px] rounded-[35px] flex flex-col justify-between">
           <div className="w-full h-full">
           <div className="bg-[#363A3D] rounded-[20px] h-[73px] flex justify-between items-center px-2">
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] rounded-full bg-[#D9D9D9]"></div>
                <p className="text-white text-[13px]">SAULTECH INC</p>
              </div>
              <div
                onClick={closeModal}
                className="rounded-full  cursor-pointer"
              >
                <IoCloseOutline fontSize={30} color="white" />
              </div>
            </div>
            <div className="w-[206px] h-[48px] bg-[#EF561347] text-white flex items-center px-4 my-8 rounded-[20px] rounded-br-none text-[12px] font-medium">
              Hello how may we help
            </div>
            <div className="w-full flex justify-end">
              <div className="w-[206px] h-[48px] bg-[#00000040] text-white flex items-center px-4 rounded-[20px] rounded-tl-none text-[12px] font-medium">
                Thanks for the reply
              </div>
            </div>{" "}
           </div>
            <div className="flex text-[#878C8F] border border-[#E6E6E6] py-4 px-2 justify-between rounded-[20px]"><input type="text" className="border-none focus:ring-0 text-[12px]" placeholder="Write your message here" /> <div className="bg-[#EF5613] w-[40px] h-[40px] rounded-full flex justify-center items-center"><img src={SendMessage} alt="SendMessage" /></div></div>
          </div>
        )}
        {selectedOption === "emailus" && <div>Email Us</div>}
        {selectedOption === "success" && <div>Success</div>}
        <p className="text-[#363A3D] text-[12px] w-[96%]">
          We’re here to help! Choose your preferred way to get in touch:
        </p>
      </motion.div>
    </div>
  );
};

export default Modal;
