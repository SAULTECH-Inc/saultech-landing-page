import React, { useState } from "react";
import { Group_1, Whatsapp } from "../assets/svg";
import Button from "../common/Button";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import DesignShowcase from "../components/DesignShowcase";
import Modal from "../components/Modal";
import { useModalStore } from "../components/useModalStore";
import {
  card2Data,
  cardsData,
  testimonialsData,
  processData,
  companyStats,
} from "../utils/Card1Data";
import { Link } from "react-scroll";
import { motion, useScroll } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiStar,
  FiCompass,
  FiPenTool,
  FiCode,
  FiShield,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const stepIcons: Record<string, React.ReactNode> = {
  discovery: <FiCompass className="w-6 h-6 text-[#EF5613]" />,
  design: <FiPenTool className="w-6 h-6 text-[#EF5613]" />,
  development: <FiCode className="w-6 h-6 text-[#EF5613]" />,
  testing: <FiShield className="w-6 h-6 text-[#EF5613]" />,
};

const LandingPage: React.FC = () => {
  const openModal = useModalStore((state) => state.openModal);
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="w-full bg-[#08141C] text-[#FFFFFF] min-h-screen flex flex-col items-center selection:bg-[#EF5613] selection:text-white relative overflow-x-hidden">
      {/* Top Reading Progress Bar */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#EF5613",
          zIndex: 60,
        }}
      />

      {/* Global Interactive Modal */}
      <Modal />

      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#08141C] border-b border-white/10 transition-all">
        <div className="w-[92%] max-w-7xl mx-auto h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#EF5613] flex items-center justify-center font-black text-xl text-white shadow-[0_0_16px_rgba(239,86,19,0.35)] group-hover:scale-105 transition-transform">
              S
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-[#EF5613] transition-colors">
              SAUL<span className="text-[#EF5613]">TECH</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors relative py-1 group"
            >
              Our Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF5613] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors relative py-1 group"
            >
              Flagship Apps
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF5613] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="design-lab"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors relative py-1 group"
            >
              Creative Lab
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF5613] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="process"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors relative py-1 group"
            >
              Our Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF5613] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors relative py-1 group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF5613] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="company"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors relative py-1 group"
            >
              Company
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF5613] transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() => openModal("intouch")}
              className="px-6 py-2.5 text-sm"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Button
              onClick={() => openModal("intouch")}
              className="px-4 py-2 text-xs"
            >
              Let's Talk
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#EF5613] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-[#08141C] px-6 py-6 flex flex-col gap-4 shadow-2xl"
          >
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="text-base font-medium text-gray-200 hover:text-[#EF5613] py-2 border-b border-white/5 cursor-pointer"
            >
              Our Services
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="text-base font-medium text-gray-200 hover:text-[#EF5613] py-2 border-b border-white/5 cursor-pointer"
            >
              Flagship Apps & Products
            </Link>
            <Link
              to="design-lab"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="text-base font-medium text-gray-200 hover:text-[#EF5613] py-2 border-b border-white/5 cursor-pointer"
            >
              Creative Design Lab
            </Link>
            <Link
              to="process"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="text-base font-medium text-gray-200 hover:text-[#EF5613] py-2 border-b border-white/5 cursor-pointer"
            >
              Our Process
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="text-base font-medium text-gray-200 hover:text-[#EF5613] py-2 border-b border-white/5 cursor-pointer"
            >
              Testimonials
            </Link>
            <Link
              to="company"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="text-base font-medium text-gray-200 hover:text-[#EF5613] py-2 border-b border-white/5 cursor-pointer"
            >
              About Company
            </Link>
            <Button
              onClick={() => {
                closeMobileMenu();
                openModal("intouch");
              }}
              className="w-full py-3 mt-2 text-sm"
            >
              Get in Touch with Us
            </Button>
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="w-[92%] max-w-7xl mx-auto pt-12 md:pt-20 pb-16 md:pb-24 flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <div className="w-full lg:w-[58%] flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#EF5613] animate-pulse" />
            <span>Next-Generation Software Engineering & Consulting</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Custom Software Development Services for{" "}
            <span className="text-[#EF5613]">
              Your Business.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mt-6 leading-relaxed max-w-xl">
            Blazing-fast, enterprise-grade software development for high-growth startups and established enterprises — engineered for scalability and backed by 24/7/365 dedicated support.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
            <Button
              onClick={() => openModal("intouch")}
              className="w-full sm:w-auto px-8 py-3.5 text-base"
            >
              Let's Talk &rarr;
            </Button>

            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all text-sm font-semibold cursor-pointer"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t border-white/10 w-full">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#EF5613]">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual Art */}
        <div className="w-full lg:w-[42%] flex justify-center items-center relative">
          <div className="relative rounded-3xl border border-white/10 p-4 bg-[#101F2B] shadow-2xl hover:border-[#EF5613] transition-colors">
            <img
              src={Group_1}
              alt="SaulTech Engineering Architecture"
              className="w-full h-auto max-h-[460px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CORE VALUE PROPOSITIONS / CARDS */}
      <section className="w-[92%] max-w-7xl mx-auto py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF5613]">
            Engineered For Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
            Why Forward-Thinking Brands Choose SaulTech
          </h2>
          <div className="w-16 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
        </div>

        <Card1 cardsData={cardsData} />
      </section>

      {/* OUR PROCESS SECTION */}
      <section
        id="process"
        className="w-[92%] max-w-7xl mx-auto py-16 md:py-24 flex flex-col items-center"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF5613]">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Our Agile Engineering Process
          </h2>
          <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 mt-4">
            We follow a transparent, battle-tested product development lifecycle designed to minimize risk and accelerate time-to-market.
          </p>
        </div>

        {/* Interactive 4-Step Process Pipeline */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processData.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item.id)}
              className="group relative rounded-2xl bg-[#101F2B] p-7 border border-white/10 hover:border-[#EF5613] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(239,86,19,0.18)] hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#08141C] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#EF5613]/50 transition-all duration-300">
                    {stepIcons[item.id]}
                  </div>
                  <span className="text-3xl font-black text-white/15 group-hover:text-[#EF5613]/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#EF5613] uppercase tracking-wider">
                  {item.tagline}
                </span>

                <h3 className="font-bold text-xl text-white mt-1 group-hover:text-[#EF5613] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#EF5613] transition-colors">
                <span>Phase Breakdown</span>
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="w-[92%] max-w-7xl mx-auto py-16 md:py-24 flex flex-col items-center"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF5613]">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Comprehensive Services We Offer
          </h2>
          <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 mt-4">
            End-to-end digital solutions spanning frontend, backend, native mobile, cloud infrastructure, and intelligent automation.
          </p>
        </div>

        <Card2 cardsData={card2Data} />
      </section>

      {/* FLAGSHIP APPS & SHOWCASE SECTION */}
      <section
        id="portfolio"
        className="w-[92%] max-w-7xl mx-auto py-16 md:py-24 flex flex-col items-center"
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#EF5613]">
            Engineering Mastery
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-2 tracking-tight">
            Flagship Software & Mindblowing Applications
          </h2>
          <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
            A glimpse into the mission-critical digital platforms, clinical health systems, and high-concurrency fintech engines engineered by SaulTech.
          </p>
        </div>

        <Card3 />
      </section>

      {/* HIGH GRAPHICS & CREATIVE DESIGN LAB */}
      <section
        id="design-lab"
        className="w-full py-16 md:py-24 border-t border-b border-white/10 bg-[#061017]"
      >
        <DesignShowcase />
      </section>

      {/* CLIENT TESTIMONIALS SECTION */}
      <section
        id="testimonials"
        className="w-[92%] max-w-7xl mx-auto py-16 md:py-24 flex flex-col items-center"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF5613]">
            Social Proof
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-300 mt-4">
            Trusted by founders, tech executives, and product leaders across high-growth industries.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#101F2B] p-7 border border-white/10 hover:border-[#EF5613] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(239,86,19,0.12)]"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-[#FFA203] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#EF5613]/40"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">{item.name}</h4>
                  <p className="text-xs text-gray-400">
                    {item.role}, <span className="text-gray-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="w-[92%] max-w-7xl mx-auto my-12">
        <div className="relative rounded-3xl bg-[#101F2B] border border-[#EF5613] p-8 sm:p-14 overflow-hidden shadow-[0_20px_60px_rgba(239,86,19,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EF5613]">
              Have a Project in Mind?
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 leading-tight">
              Let's Build Something Exceptional Together.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
              Whether you need to launch a high-impact MVP, scale an existing platform, or augment your engineering capacity, our team is ready to deliver.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              onClick={() => openModal("contactform")}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold shadow-[0_0_24px_rgba(239,86,19,0.35)]"
            >
              Get in Touch with Us
            </Button>

            <a
              href="https://wa.me/2347011079676?text=Hi%20SaulTech,%20I%20would%20like%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <img src={Whatsapp} alt="WhatsApp" className="w-5 h-5" />
              <span>Quick WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* MODERN FOOTER */}
      <footer
        id="company"
        className="w-full border-t border-white/10 bg-[#061017] pt-16 pb-12 mt-12"
      >
        <div className="w-[92%] max-w-7xl mx-auto flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            {/* Column 1: Brand & Bio */}
            <div className="lg:col-span-2 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#EF5613] flex items-center justify-center font-black text-lg text-white">
                  S
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  SAUL<span className="text-[#EF5613]">TECH</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
                SaulTech provides premier software consulting, bespoke cloud development, digital transformation, and scalable engineering to power modern business growth.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Available for New Projects & Contracts</span>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => openModal("intouch")}>
                  Custom Software
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => openModal("intouch")}>
                  Web Applications
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => openModal("intouch")}>
                  Mobile App Development
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => openModal("intouch")}>
                  UI/UX Product Design
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => openModal("intouch")}>
                  Cloud & DevOps
                </li>
                <li className="hover:text-white transition-colors cursor-pointer" onClick={() => openModal("intouch")}>
                  AI & ML Integration
                </li>
              </ul>
            </div>

            {/* Column 3: Navigation */}
            <div className="flex flex-col">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <Link to="hero" spy={true} smooth={true} duration={500} className="hover:text-white transition-colors cursor-pointer">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="services" spy={true} smooth={true} offset={-80} duration={500} className="hover:text-white transition-colors cursor-pointer">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="process" spy={true} smooth={true} offset={-80} duration={500} className="hover:text-white transition-colors cursor-pointer">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link to="portfolio" spy={true} smooth={true} offset={-80} duration={500} className="hover:text-white transition-colors cursor-pointer">
                    Flagship Apps
                  </Link>
                </li>
                <li>
                  <Link to="design-lab" spy={true} smooth={true} offset={-80} duration={500} className="hover:text-white transition-colors cursor-pointer">
                    Creative Design Lab
                  </Link>
                </li>
                <li>
                  <Link to="testimonials" spy={true} smooth={true} offset={-80} duration={500} className="hover:text-white transition-colors cursor-pointer">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Office */}
            <div className="flex flex-col">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                Contact Office
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2.5">
                  <FiMapPin className="w-4 h-4 text-[#EF5613] mt-1 shrink-0" />
                  <span>Adamawa Waziri Way 122, Nigeria</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiPhone className="w-4 h-4 text-[#EF5613] shrink-0" />
                  <a href="tel:07011079676" className="hover:text-white transition-colors">
                    +234 701 107 9676
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiMail className="w-4 h-4 text-[#EF5613] shrink-0" />
                  <a href="mailto:saultech@gmail.com" className="hover:text-white transition-colors">
                    saultech@gmail.com
                  </a>
                </li>
                <li className="pt-2">
                  <button
                    onClick={() => openModal("contactform")}
                    className="text-xs font-semibold text-[#EF5613] hover:underline cursor-pointer"
                  >
                    Open Support Request &rarr;
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>&copy; {new Date().getFullYear()} SaulTech. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
              <span className="hover:text-gray-300 cursor-pointer">Security Overview</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
