import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sub: string;
  accent: string;
}

const stats: StatItem[] = [
  {
    value: 8,
    suffix: "",
    label: "Live Products",
    sub: "Shipped to Production",
    accent: "#EF5613",
  },
  {
    value: 48500,
    suffix: "",
    prefix: "",
    label: "TPS Throughput",
    sub: "Peak Core Capacity",
    accent: "#EF5613",
  },
  {
    value: 99.999,
    suffix: "%",
    label: "Uptime SLA",
    sub: "Zero-Downtime Deployments",
    accent: "#EF5613",
  },
  {
    value: 500,
    suffix: "K+",
    label: "End Users",
    sub: "Across All Platforms",
    accent: "#EF5613",
  },
  {
    value: 18,
    suffix: "ms",
    label: "Settlement Latency",
    sub: "Sub-20ms Live Edge",
    accent: "#EF5613",
  },
  {
    value: 7,
    suffix: "",
    label: "Specializations",
    sub: "Engineering Verticals",
    accent: "#EF5613",
  },
];

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) {
          ref.current.textContent =
            prefix + v.toFixed(decimals) + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, prefix, decimals]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

const clientLogos = [
  { name: "FUNDY PAY", tag: "Fintech" },
  { name: "MUNE WORK", tag: "AI Hiring" },
  { name: "HESTANE", tag: "Hospital OS" },
  { name: "KRIDENCE", tag: "EdTech SaaS" },
  { name: "WORKSYNC", tag: "Enterprise" },
  { name: "MUSESPOT", tag: "Streaming" },
  { name: "AFFIX AI", tag: "LegalTech" },
  { name: "SYSTEM TIGHT", tag: "Security" },
];

const VelocityTicker: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#08141C] border-y border-white/8 py-12 sm:py-16 overflow-hidden">
      {/* Client / Ecosystem Logos Strip */}
      <div className="w-[92%] max-w-7xl mx-auto mb-12 pb-10 border-b border-white/8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-gray-500 mb-6">
          Trusted by Founders &amp; Teams Behind
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-[#0D1A24] border border-white/5 hover:border-[#EF5613]/40 transition-colors group"
            >
              <span className="text-xs font-black tracking-wider text-gray-300 group-hover:text-white transition-colors">
                {logo.name}
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-widest text-gray-600 group-hover:text-[#EF5613] transition-colors mt-0.5">
                {logo.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section Label */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-px flex-1 max-w-[80px] bg-[#EF5613]/40" />
        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#EF5613]">
          Engineering at Scale
        </span>
        <div className="h-px flex-1 max-w-[80px] bg-[#EF5613]/40" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-white/8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            animate={{
              backgroundColor:
                hoveredIdx === i ? "rgba(239,86,19,0.07)" : "transparent",
            }}
            transition={{ duration: 0.2 }}
            className="relative flex flex-col items-center justify-center gap-2 px-6 py-8 cursor-default group"
          >
            {/* Orange line accent at top on hover */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#EF5613] rounded-full"
              animate={{ width: hoveredIdx === i ? "60%" : "0%" }}
              transition={{ duration: 0.3 }}
            />

            {/* Counter Value */}
            <div className="text-3xl sm:text-4xl font-black text-white tabular-nums leading-none">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix ?? ""}
                decimals={stat.value % 1 !== 0 ? 3 : 0}
              />
            </div>

            {/* Label */}
            <div className="text-center">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#EF5613]">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-500 mt-0.5 tracking-wide">
                {stat.sub}
              </div>
            </div>

            {/* Decorative dot */}
            <motion.div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#EF5613]"
              animate={{ opacity: hoveredIdx === i ? 1 : 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VelocityTicker;
