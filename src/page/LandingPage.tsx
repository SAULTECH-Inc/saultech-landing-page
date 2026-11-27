import React, { useState } from "react";
import { Group_1, Whatsapp } from "../assets/svg";
import Button from "../common/Button";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import VelocityTicker from "../components/VelocityTicker";
import CommandDock from "../components/CommandDock";
import ProcessIllustration from "../components/ProcessIllustration";
import Modal from "../components/Modal";
import { useModalStore } from "../components/useModalStore";
import { submitLeadInquiry } from "../lib/supabase";
import {
  card2Data,
  cardsData,
  testimonialsData,
  companyStats,
} from "../utils/Card1Data";
import { Link } from "react-scroll";
import { motion, useScroll } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiStar,
  FiPhone,
  FiMail,
  FiMapPin,
  FiSettings,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const LandingPage: React.FC = () => {
  const openModal = useModalStore((state) => state.openModal);
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", message: "" });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadError, setLeadError] = useState<string | null>(null);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name.trim() || !leadForm.email.trim()) return;
    setLeadSubmitting(true);
    setLeadError(null);
    const res = await submitLeadInquiry({
      name: leadForm.name,
      email: leadForm.email,
      message: leadForm.message,
      source: "landing_cta",
    });
    setLeadSubmitting(false);
    if (!res.ok) {
      setLeadError(res.error || "Unable to submit right now. Please try WhatsApp or email.");
      return;
    }
    setLeadSubmitted(true);
  };

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

      {/* ══════════════════════════════════════════
          STICKY NAVIGATION
      ══════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 w-full bg-[#08141C]/95 backdrop-blur border-b border-white/10 transition-all">
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

          {/* Desktop Nav — matches new section order */}
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { to: "why-us", label: "Why Us" },
              { to: "services", label: "Services" },
              { to: "portfolio", label: "Our Work" },
              { to: "process", label: "Process" },
              { to: "testimonials", label: "Testimonials" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EF5613] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button onClick={() => openModal("intouch")} className="px-6 py-2.5 text-sm">
              Start a Project →
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <Button onClick={() => openModal("intouch")} className="px-4 py-2 text-xs">
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

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-[#08141C] px-6 py-6 flex flex-col gap-4 shadow-2xl"
          >
            {[
              { to: "why-us", label: "Why SaulTech" },
              { to: "services", label: "Services" },
              { to: "portfolio", label: "Our Work" },
              { to: "process", label: "Our Process" },
              { to: "testimonials", label: "Testimonials" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMobileMenu}
                className="text-base font-medium text-gray-200 hover:text-[#EF5613] py-2 border-b border-white/5 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => { closeMobileMenu(); openModal("intouch"); }}
              className="w-full py-3 mt-2 text-sm"
            >
              Start a Project
            </Button>
          </motion.div>
        )}
      </header>

      {/* ══════════════════════════════════════════
          1. HERO — The Promise
          Goal: Visitor knows in 5s what SaulTech
          does and what to do next.
      ══════════════════════════════════════════ */}
      <section
        id="hero"
        className="w-[92%] max-w-7xl mx-auto pt-12 md:pt-20 pb-16 md:pb-24 flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <div className="w-full lg:w-[58%] flex flex-col items-start text-left">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#EF5613] animate-pulse" />
            <span>Available for New Projects &amp; Contracts</span>
          </div>

          {/* Headline — outcome-led, new + existing systems */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
            We Build, Test, Secure &amp; Manage{" "}
            <span className="text-[#EF5613]">Your Business Software.</span>
          </h1>

          {/* Sub — new builds + existing systems */}
          <p className="text-base sm:text-lg text-gray-300 mt-6 leading-relaxed max-w-xl">
            Whether you&apos;re launching a new platform from scratch or need senior engineers to test, fix, deploy, secure, and manage your existing software and cloud infrastructure — SaulTech is your full-lifecycle engineering partner.
          </p>

          {/* Trust signals inline */}
          <ul className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3 text-sm text-gray-400">
            {[
              "New Builds & Legacy Rescue",
              "QA Testing & Security Audits",
              "24/7 Infrastructure Management",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-[#EF5613] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8 w-full sm:w-auto">
            <Button
              onClick={() => openModal("intouch")}
              className="w-full sm:w-auto px-8 py-3.5 text-base"
            >
              Book a Free Consultation →
            </Button>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all text-sm font-semibold cursor-pointer"
            >
              See Case Studies
            </Link>
          </div>

          {/* Quick stat row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t border-white/10 w-full">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#EF5613]">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Visual */}
        <div className="w-full lg:w-[42%] flex justify-center items-center relative">
          <motion.div
            animate={{ y: [-7, 7, -7] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
            className="absolute top-2 left-2 sm:-top-5 sm:-left-5 z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-[#08141C] border border-[#EF5613] text-white text-[11px] sm:text-xs font-bold shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2 select-none"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono">48,500 TPS Core</span>
          </motion.div>

          <motion.div
            animate={{ y: [7, -7, 7] }}
            transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
            className="absolute bottom-2 right-2 sm:-bottom-5 sm:-right-5 z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-[#08141C] border border-white/20 text-white text-[11px] sm:text-xs font-bold shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2 select-none"
          >
            <span className="font-mono">99.99% Uptime SLA</span>
          </motion.div>

          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            className="hidden sm:flex absolute -bottom-5 left-6 z-20 px-3 py-1.5 rounded-xl bg-[#101F2B] border border-white/10 text-[11px] font-mono text-gray-300 shadow-xl items-center gap-2 select-none"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="text-[#EF5613] inline-flex items-center justify-center"
            >
              <FiSettings className="w-3.5 h-3.5" />
            </motion.span>
            <span>Zero-Downtime CI/CD</span>
          </motion.div>

          <div className="relative rounded-3xl border border-white/10 p-4 bg-[#101F2B] shadow-2xl hover:border-[#EF5613] transition-colors">
            <img
              src={Group_1}
              alt="SaulTech Engineering Architecture"
              className="w-full h-auto max-h-[460px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. SOCIAL PROOF SIGNAL — Stats at a glance
          Hits right after hero before visitor scrolls away.
      ══════════════════════════════════════════ */}
      <VelocityTicker />

      {/* ══════════════════════════════════════════
          3. WHY SAULTECH — Problem / Solution
          Makes the visitor feel seen:
          "This is built for you if…"
      ══════════════════════════════════════════ */}
      <section
        id="why-us"
        className="w-[92%] max-w-7xl mx-auto py-16 md:py-24"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF5613]">
            Why SaulTech
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
            Whether You&apos;re Building New or Fixing Existing Systems
          </h2>
          <div className="w-16 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            You don&apos;t have to start from scratch to work with us. We build new products, test and secure existing software, and manage your cloud infrastructure end-to-end.
          </p>
        </div>

        <Card1 cardsData={cardsData} />
      </section>

      {/* ══════════════════════════════════════════
          4. CAPABILITIES — What we can build
          Shows technical depth without overwhelming.
      ══════════════════════════════════════════ */}
      <section
        id="services"
        className="w-[92%] max-w-7xl mx-auto py-16 md:py-24 flex flex-col items-center"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF5613]">
            Services &amp; Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Everything You Need, Under One Roof
          </h2>
          <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            From greenfield builds to testing, securing, deploying, and managing your existing applications and cloud infrastructure — all in-house.
          </p>
        </div>

        <Card2 cardsData={card2Data} />
      </section>

      {/* ══════════════════════════════════════════
          5. PORTFOLIO — Proof of work
          Real products = the strongest credibility signal.
      ══════════════════════════════════════════ */}
      <section
        id="portfolio"
        className="w-[92%] max-w-7xl mx-auto py-16 md:py-24 flex flex-col items-center"
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#EF5613]">
            Proven Track Record
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-2 tracking-tight">
            Products We've Taken to Market
          </h2>
          <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            8 production-grade software ecosystems — fintech, AI talent, media streaming, school ERP, enterprise workspace, document signing, financial security, and hospital OS.
          </p>
        </div>

        <Card3 />
      </section>

      {/* ══════════════════════════════════════════
          6. PROCESS — How we work together
          Reduces the "will this be chaotic?" anxiety.
      ══════════════════════════════════════════ */}
      <section
        id="process"
        className="w-[92%] max-w-7xl mx-auto py-16 md:py-24 flex flex-col items-center"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF5613]">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            How We Work With You
          </h2>
          <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            A transparent, battle-tested lifecycle — no surprises, no guesswork. You're in the loop at every sprint.
          </p>
        </div>

        <ProcessIllustration />
      </section>

      {/* ══════════════════════════════════════════
          7. TESTIMONIALS — Don't take our word for it
          Human voices seal the trust.
      ══════════════════════════════════════════ */}
      <section
        id="testimonials"
        className="w-[92%] max-w-7xl mx-auto py-16 md:py-24 flex flex-col items-center"
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#EF5613]">
            Client Voices
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-[#EF5613] rounded-full mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-400 mt-4">
            Trusted by founders, tech executives, and product leaders across high-growth industries.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <motion.div
              key={item.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 24 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl bg-[#101F2B] p-7 border border-white/10 hover:border-[#EF5613] transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_36px_rgba(239,86,19,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-[#FFA203]">
                    {[...Array(item.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#08141C] border border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#EF5613]">
                    {item.company}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
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
                    {item.role},{" "}
                    <span className="text-gray-300">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. FINAL CTA & LOW-FRICTION LEAD CAPTURE
          Short 3-field form + alternative contact
      ══════════════════════════════════════════ */}
      <section className="w-full bg-[#101F2B] border-t border-b border-[#EF5613]/30 py-20 md:py-24">
        <div className="w-[92%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Pitch + Direct Contact Alternatives */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-5">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#EF5613]">
              Ready to Build?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Need Software Built, Tested,{" "}
              <span className="text-[#EF5613]">Secured, or Managed?</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Tell us what you&apos;re launching, fixing, testing, or scaling. A senior technical architect—not a generic salesperson—will review your brief and respond within 24 hours.
            </p>

            {/* Micro trust signals */}
            <div className="flex flex-wrap gap-5 text-xs text-gray-400 pt-1">
              {["Free initial consultation", "Response within 24h", "NDA available on request"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <FiCheckCircle className="w-3.5 h-3.5 text-[#EF5613]" />
                  {t}
                </span>
              ))}
            </div>

            {/* Alternative Contact Options */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full">
              <a
                href="https://wa.me/2347067659632?text=Hi%20SaulTech,%20I%20would%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#08141C] hover:bg-white/10 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <img src={Whatsapp} alt="WhatsApp" className="w-4 h-4" />
                <span>WhatsApp Direct</span>
              </a>
              <a
                href="mailto:support@saultechitsolutions.com?subject=Project%20Inquiry"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#08141C] hover:bg-white/10 border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <FiMail className="w-4 h-4 text-[#EF5613]" />
                <span>support@saultechitsolutions.com</span>
              </a>
            </div>
          </div>

          {/* Right: Low-Friction 3-Field Form */}
          <div className="lg:col-span-6 rounded-3xl bg-[#08141C] border border-white/10 p-6 sm:p-8 shadow-2xl">
            {leadSubmitted ? (
              <div className="py-10 flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center">
                  <FiCheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-black text-white">Request Received</h3>
                <p className="text-sm text-gray-400 max-w-sm">
                  Thanks, <span className="text-white font-semibold">{leadForm.name}</span>. We&apos;ll reach out to{" "}
                  <span className="text-[#EF5613]">{leadForm.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setLeadSubmitted(false);
                    setLeadForm({ name: "", email: "", message: "" });
                  }}
                  className="text-xs font-bold text-gray-400 hover:text-white underline cursor-pointer mt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="e.g. Amina Bello"
                    className="w-full rounded-xl bg-[#101F2B] border border-white/10 focus:border-[#EF5613] focus:outline-none px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    placeholder="amina@company.com"
                    className="w-full rounded-xl bg-[#101F2B] border border-white/10 focus:border-[#EF5613] focus:outline-none px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    rows={3}
                    value={leadForm.message}
                    onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                    placeholder="Tell us about your new build, existing system, QA testing, or infrastructure needs..."
                    className="w-full rounded-xl bg-[#101F2B] border border-white/10 focus:border-[#EF5613] focus:outline-none px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors resize-none"
                  />
                </div>

                {leadError && (
                  <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-xl px-3 py-2">
                    {leadError}
                  </p>
                )}

                <Button type="submit" disabled={leadSubmitting} className="w-full py-3.5 text-sm font-bold mt-1 disabled:opacity-60">
                  {leadSubmitting ? "Sending..." : (
                    <>Get a Project Estimate <FiArrowRight className="inline w-4 h-4 ml-1" /></>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer
        id="company"
        className="w-full border-t border-white/10 bg-[#061017] pt-16 pb-24 sm:pb-14 mt-0"
      >
        <div className="w-[92%] max-w-7xl mx-auto flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: Brand */}
            <div className="lg:col-span-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#EF5613] flex items-center justify-center font-black text-lg text-white">
                  S
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  SAUL<span className="text-[#EF5613]">TECH</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-5">
                Full-service software consultancy helping ambitious businesses build, ship, and scale digital products.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Available for New Projects</span>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="flex flex-col">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                {["Custom Software", "Web Applications", "Mobile App Development", "UI/UX Product Design", "Cloud & DevOps", "AI & ML Integration"].map((s) => (
                  <li key={s}
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={() => openModal("intouch")}
                  >{s}</li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div className="flex flex-col">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                {[
                  { to: "hero", label: "Home" },
                  { to: "why-us", label: "Why SaulTech" },
                  { to: "services", label: "Services" },
                  { to: "portfolio", label: "Our Work" },
                  { to: "process", label: "Our Process" },
                  { to: "testimonials", label: "Testimonials" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div className="flex flex-col">
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2.5">
                  <FiMapPin className="w-4 h-4 text-[#EF5613] mt-1 shrink-0" />
                  <span>Abuja, Nigeria (Office opening soon)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FiPhone className="w-4 h-4 text-[#EF5613] mt-1 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+2347067659632" className="hover:text-white transition-colors">
                      +234 706 765 9632
                    </a>
                    <a href="tel:+23480883056" className="hover:text-white transition-colors">
                      +234 808 830 56
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <FiMail className="w-4 h-4 text-[#EF5613] shrink-0" />
                  <a href="mailto:support@saultechitsolutions.com" className="hover:text-white transition-colors break-all">
                    support@saultechitsolutions.com
                  </a>
                </li>
                <li className="pt-2">
                  <button
                    onClick={() => openModal("contactform")}
                    className="text-xs font-semibold text-[#EF5613] hover:underline cursor-pointer"
                  >
                    Send us a Brief →
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>&copy; {new Date().getFullYear()} SaulTech IT Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
              <span className="hover:text-gray-300 cursor-pointer">Security Overview</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING COMMAND DOCK */}
      <CommandDock />
    </div>
  );
};

export default LandingPage;
