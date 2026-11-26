import React, { useState } from "react";
import { motion } from "framer-motion";
import { useModalStore } from "./useModalStore";
import { IoCloseOutline } from "react-icons/io5";
import { FiCheck, FiSend, FiCompass, FiPenTool, FiCode, FiShield } from "react-icons/fi";
import {
  ArrowRight,
  ContactForm,
  EmailUs,
  Headphones,
  Whatsapp2,
} from "../assets/svg";

const Modal: React.FC = () => {
  const { isOpen, selectedOption, closeModal, openModal } = useModalStore();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Live chat messages state
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    { sender: "bot", text: "Hello! Welcome to SaulTech. How can our engineering team assist you today?" },
  ]);
  const [inputMsg, setInputMsg] = useState("");

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeModal();
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    }, 2500);
  };

  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const userText = inputMsg;
    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputMsg("");
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thank you for reaching out! A senior tech lead has been notified and will reply shortly. You can also reach us directly via WhatsApp (+234 701 107 9676) for instant consultation.",
        },
      ]);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={closeModal}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl bg-[#0C1A24] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-[#EF5613] text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <IoCloseOutline fontSize={24} />
        </button>

        {/* Process Detail Modals */}
        {selectedOption === "discovery" && (
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EF5613]/20 border border-[#EF5613]/40 flex items-center justify-center text-[#EF5613]">
                <FiCompass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#EF5613]">Phase 01</span>
                <h3 className="text-2xl font-bold">Discovery & Strategy</h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              The discovery phase is the bedrock of every triumphant software project. We partner closely with your stakeholders to deconstruct your vision, evaluate competitors, and crystallize precise functional requirements.
            </p>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
              <h4 className="text-sm font-semibold text-white mb-2">Key Deliverables:</h4>
              <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                <li>Comprehensive Technical Requirement Document (TRD)</li>
                <li>System Architecture Blueprint & Tech Stack Selection</li>
                <li>Sprint Schedule, Budget Estimation & Milestones</li>
              </ul>
            </div>

            <button
              onClick={() => openModal("contactform")}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EF5613] to-[#FF7A3D] text-white font-semibold text-sm hover:shadow-[0_0_24px_rgba(239,86,19,0.5)] transition-all cursor-pointer"
            >
              Start Discovery Consultation
            </button>
          </div>
        )}

        {selectedOption === "design" && (
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EF5613]/20 border border-[#EF5613]/40 flex items-center justify-center text-[#EF5613]">
                <FiPenTool className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#EF5613]">Phase 02</span>
                <h3 className="text-2xl font-bold">UI/UX Design</h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Our award-worthy UI/UX designers translate requirements into breathtaking, conversion-focused wireframes, component libraries, and interactive Figma prototypes.
            </p>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
              <h4 className="text-sm font-semibold text-white mb-2">Key Deliverables:</h4>
              <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                <li>Low-fidelity Wireframes & User Journey Maps</li>
                <li>High-fidelity Interactive Prototypes (Figma)</li>
                <li>Complete Design System & Brand Asset Guidelines</li>
              </ul>
            </div>

            <button
              onClick={() => openModal("contactform")}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EF5613] to-[#FF7A3D] text-white font-semibold text-sm hover:shadow-[0_0_24px_rgba(239,86,19,0.5)] transition-all cursor-pointer"
            >
              Request Design Review
            </button>
          </div>
        )}

        {selectedOption === "development" && (
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EF5613]/20 border border-[#EF5613]/40 flex items-center justify-center text-[#EF5613]">
                <FiCode className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#EF5613]">Phase 03</span>
                <h3 className="text-2xl font-bold">Agile Development</h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Our engineering team builds with modern frameworks (React, React Native, Node.js, Go, Python, Cloud Native). We operate in bi-weekly agile sprints with transparent Git repositories and continuous deployment.
            </p>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
              <h4 className="text-sm font-semibold text-white mb-2">Key Deliverables:</h4>
              <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                <li>Modular, documented, and production-tested codebase</li>
                <li>Automated CI/CD deployment pipelines</li>
                <li>Bi-weekly sprint demos and staged preview environments</li>
              </ul>
            </div>

            <button
              onClick={() => openModal("contactform")}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EF5613] to-[#FF7A3D] text-white font-semibold text-sm hover:shadow-[0_0_24px_rgba(239,86,19,0.5)] transition-all cursor-pointer"
            >
              Consult with Senior Engineers
            </button>
          </div>
        )}

        {selectedOption === "testing" && (
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EF5613]/20 border border-[#EF5613]/40 flex items-center justify-center text-[#EF5613]">
                <FiShield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#EF5613]">Phase 04</span>
                <h3 className="text-2xl font-bold">QA, Launch & 24/7 Support</h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              We subject software to penetration tests, automated regression, stress loading, and accessibility audits to ensure zero vulnerabilities before seamless public launch.
            </p>

            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
              <h4 className="text-sm font-semibold text-white mb-2">Key Deliverables:</h4>
              <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                <li>Automated Testing Suite & QA Sign-off Report</li>
                <li>Zero-downtime Production Deployment</li>
                <li>24/7/365 Uptime Monitoring & SLA Maintenance</li>
              </ul>
            </div>

            <button
              onClick={() => openModal("contactform")}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EF5613] to-[#FF7A3D] text-white font-semibold text-sm hover:shadow-[0_0_24px_rgba(239,86,19,0.5)] transition-all cursor-pointer"
            >
              Schedule Launch Prep
            </button>
          </div>
        )}

        {/* Get in Touch Channel Selector */}
        {selectedOption === "intouch" && (
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
            <p className="text-sm text-gray-300 mb-6">
              We’re excited to build with you! Select how you’d prefer to connect:
            </p>

            <div className="space-y-3">
              <button
                onClick={() => openModal("contactform")}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#EF5613]/50 transition-all cursor-pointer text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EF5613]/20 flex items-center justify-center text-[#EF5613]">
                    <img src={ContactForm} alt="Contact Form" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-[#EF5613] transition-colors">
                      Send Detailed Inquiry
                    </h4>
                    <p className="text-xs text-gray-400">Share your project specifications</p>
                  </div>
                </div>
                <img src={ArrowRight} alt="Arrow" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="https://wa.me/2347011079676?text=Hi%20SaulTech,%20I%20would%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/50 transition-all cursor-pointer text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                    <img src={Whatsapp2} alt="WhatsApp" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                      WhatsApp Quick Chat
                    </h4>
                    <p className="text-xs text-gray-400">+234 701 107 9676 (Instant reply)</p>
                  </div>
                </div>
                <img src={ArrowRight} alt="Arrow" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => openModal("livechat")}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#EF5613]/50 transition-all cursor-pointer text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EF5613]/20 flex items-center justify-center text-[#EF5613]">
                    <img src={Headphones} alt="Live Chat" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-[#EF5613] transition-colors">
                      Live Assistant
                    </h4>
                    <p className="text-xs text-gray-400">Interactive instant messaging</p>
                  </div>
                </div>
                <img src={ArrowRight} alt="Arrow" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="mailto:saultech@gmail.com?subject=Project%20Inquiry%20-%20SaulTech"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#EF5613]/50 transition-all cursor-pointer text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EF5613]/20 flex items-center justify-center text-[#EF5613]">
                    <img src={EmailUs} alt="Email" className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-[#EF5613] transition-colors">
                      Email Engineering Team
                    </h4>
                    <p className="text-xs text-gray-400">saultech@gmail.com</p>
                  </div>
                </div>
                <img src={ArrowRight} alt="Arrow" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        )}

        {/* Contact Form Modal */}
        {selectedOption === "contactform" && (
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-1">Let's Build Something Great</h3>
            <p className="text-xs text-gray-400 mb-6">
              Fill in your details and an engineering lead will reply within 24 hours.
            </p>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4 border border-green-500/40">
                  <FiCheck className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Dispatched!</h4>
                <p className="text-sm text-gray-300 max-w-xs">
                  Thank you! Our technical director has received your request and will contact you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">First Name *</label>
                    <input
                      required
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="e.g. John"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#EF5613]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="e.g. Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#EF5613]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#EF5613]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+234 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#EF5613]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Project Scope & Timeline *</label>
                  <textarea
                    required
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about what you want to build, key features, and your target deadline..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#EF5613] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#EF5613] to-[#FF7A3D] text-white font-semibold text-sm hover:shadow-[0_0_24px_rgba(239,86,19,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <FiSend className="w-4 h-4" />
                  <span>Send Project Request</span>
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  Protected under mutual NDA. We never share your data.
                </p>
              </form>
            )}
          </div>
        )}

        {/* Live Chat Modal */}
        {selectedOption === "livechat" && (
          <div className="flex flex-col h-[460px]">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#EF5613] flex items-center justify-center font-bold text-white text-sm">
                ST
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white">SaulTech Engineering Support</h4>
                <div className="flex items-center gap-1.5 text-xs text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Online & Ready</span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#EF5613] text-white rounded-br-none"
                        : "bg-white/10 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendChatMessage} className="pt-3 border-t border-white/10 flex items-center gap-2">
              <input
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#EF5613]"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-[#EF5613] hover:bg-[#ff7a3d] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
