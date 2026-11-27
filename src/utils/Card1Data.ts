import { Imac, User_groups, Workspace, DADC, DAD } from "../assets/svg";

export const cardsData = [
  {
    id: 1,
    image: Imac,
    title: "Bespoke Software",
    content:
      "Have a product vision, but no engineering team to ship it? We take you from blueprint to production-grade web and mobile apps—built to scale from day one.",
    services: ["MVP in Weeks", "SaaS Platforms", "Mobile Apps", "Dedicated Team"],
  },
  {
    id: 2,
    image: User_groups,
    title: "Team Extension",
    content:
      "Your roadmap is moving slower than your market. Embed our senior engineers directly into your workflow to ship features faster without the 6-month recruiting overhead.",
    services: ["Embedded Engineers", "Rapid Scaling", "Zero Hiring Lag"],
  },
  {
    id: 3,
    image: Workspace,
    title: "DevOps & Cloud",
    content:
      "Slow deployments and unpredictable cloud bills? We architect automated CI/CD pipelines and high-uptime infrastructure that cuts waste and scales effortlessly.",
    services: ["Cloud Architecture", "System Migration", "99.99% Uptime SLA"],
  },
];

export const card2Data = [
  {
    id: 1,
    title: "Custom Software",
    sub_title: "Development",
    content:
      "We design, develop, and deploy enterprise-grade software solutions tailored to your unique workflows, driving efficiency and sustainable growth.",
  },
  {
    id: 2,
    title: "Web",
    sub_title: "Development",
    content:
      "Lightning-fast, highly secure web applications built on modern frameworks with seamless responsiveness across all screen sizes.",
  },
  {
    id: 3,
    title: "UI/UX",
    sub_title: "Design",
    content:
      "Human-centered design systems, interactive prototypes, and captivating visuals crafted to turn casual visitors into loyal customers.",
  },
  {
    id: 4,
    title: "Mobile App",
    sub_title: "Development",
    content:
      "Native and cross-platform iOS and Android mobile apps engineered for fluid 60fps animations, intuitive navigation, and offline reliability.",
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    sub_title: "Solutions",
    content:
      "Automated CI/CD pipelines, container orchestration, Kubernetes, and cloud migration on AWS/GCP designed for 99.99% uptime.",
  },
  {
    id: 6,
    title: "E-commerce",
    sub_title: "Platforms",
    content:
      "High-converting storefronts with streamlined multi-currency checkouts, inventory synchronization, and robust payment integrations.",
  },
  {
    id: 7,
    title: "API & Microservices",
    sub_title: "Integration",
    content:
      "Scalable RESTful & GraphQL APIs that unify your software ecosystem, enabling effortless communication across disparate platforms.",
  },
  {
    id: 8,
    title: "AI & ML",
    sub_title: "Solutions",
    content:
      "Harness generative AI, predictive analytics, and automated smart agents to optimize business decisions and automate workflows.",
  },
  {
    id: 9,
    title: "IT Strategy &",
    sub_title: "Consulting",
    content:
      "Strategic tech advisory, code and architecture audits, and digital transformation roadmaps aligned with your long-term business goals.",
  },
];

export const cards3Data = [
  {
    id: 1,
    image: DADC,
    title: "Fundy Pay",
    category: "Fintech Platform",
    content:
      "Fundy Pay is a premier fintech mobile and web ecosystem offering seamless peer-to-peer payments, high-yield savings, and automated micro-investing with bank-grade encryption.",
    tags: ["React Native", "Next.js", "Node.js", "AWS", "Fintech"],
    link: "#",
  },
  {
    id: 2,
    image: DAD,
    title: "Mune Work",
    category: "AI Talent & Career Platform",
    content:
      "An intelligent AI-powered job search and matching platform connecting verified tech talent with global enterprises, featuring milestone escrow contracts and instant skill matching.",
    tags: ["Next.js", "React Native", "FastAPI", "Vector AI"],
    link: "#",
  },
];

export interface FlagshipProduct {
  id: string;
  name: string;
  badge: string;
  category: string;
  platform: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  liveStatus: string;
  architecture: string[];
  uiType: "fintech" | "jobs" | "streaming" | "edtech" | "worksync" | "affix" | "security" | "hospital";
}

export const flagshipApps: FlagshipProduct[] = [
  {
    id: "fundypay",
    name: "Fundy Pay",
    badge: "Fintech Mobile & Web",
    category: "Fintech & Digital Banking",
    platform: "Web & Mobile App",
    tagline: "Seamless Multi-Currency Wallets, Instant P2P Payments & High-Yield Savings",
    description:
      "A modern fintech mobile and web application engineered for high-concurrency peer-to-peer transfers, virtual card generation, automated micro-savings pots, and bank-grade encryption with sub-second settlement.",
    metrics: [
      { label: "Active Users", value: "45,000+" },
      { label: "Settlement Speed", value: "18ms Instant" },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Compliance", value: "PCI-DSS Level 1" },
    ],
    stack: ["React Native", "Next.js 15", "Node.js", "PostgreSQL", "AWS KMS", "Redis"],
    liveStatus: "Live in Production",
    architecture: [
      "Zero-knowledge encrypted payment state channels",
      "Event-driven Kafka streaming for sub-second balance reconciliation",
      "PCI-DSS Level 1 compliant vault infrastructure",
    ],
    uiType: "fintech",
  },
  {
    id: "munework",
    name: "Mune Work",
    badge: "AI Career Platform",
    category: "AI Job Search & Matching",
    platform: "Web & Mobile App",
    tagline: "Autonomous Skill-Matching, AI Resume Parsing & Verified Global Hiring",
    description:
      "An intelligent job discovery and talent marketplace leveraging semantic vector AI to match candidates with high-growth companies, featuring automated milestone contracts, video interviews, and skill verification.",
    metrics: [
      { label: "Talent Pool", value: "85,000+" },
      { label: "Match Precision", value: "98.4% AI Match" },
      { label: "Hire Velocity", value: "10x Faster" },
      { label: "Contracts", value: "Escrow Secured" },
    ],
    stack: ["Next.js", "React Native", "FastAPI", "Pinecone Vector DB", "PostgreSQL"],
    liveStatus: "Active Ecosystem",
    architecture: [
      "Semantic embedding engine matching job specs with candidate profiles",
      "Automated milestone escrow release contracts",
      "Encrypted WebRTC one-click technical interview rooms",
    ],
    uiType: "jobs",
  },
  {
    id: "musespot",
    name: "MuseSpot",
    badge: "Paid Streaming App",
    category: "Media & Creator Economy",
    platform: "Web & Mobile App",
    tagline: "Decentralized Royalty Payouts, HD Audio/Video Streaming & Creator Tipping",
    description:
      "A next-generation music and video streaming mobile and web platform where users enjoy lossless audio and video streaming while creators get paid per-second listened via automated transparent micro-royalties.",
    metrics: [
      { label: "Monthly Streams", value: "2.5M+ Streams" },
      { label: "Audio Latency", value: "Sub-Second HLS" },
      { label: "Payout Accuracy", value: "100% Real-time" },
      { label: "Audio Quality", value: "Lossless 320kbps" },
    ],
    stack: ["React Native", "HLS Streaming", "Node.js", "Stripe Connect", "AWS CloudFront"],
    liveStatus: "Live Streaming Cluster",
    architecture: [
      "Adaptive bitrate HLS media delivery through global CDN edge nodes",
      "Per-second micro-royalty attribution pipeline",
      "Direct fan-to-artist tipping gateway with zero intermediary fees",
    ],
    uiType: "streaming",
  },
  {
    id: "kridence",
    name: "Kridence",
    badge: "AI School Management",
    category: "EdTech & Institutional SaaS",
    platform: "Web & Mobile App",
    tagline: "End-to-End Academic ERP, Automated Grading & Parent-Student Portal",
    description:
      "A comprehensive AI-driven school operating system powering K-12 and tertiary institutions with biometric attendance, automated tuition fee reconciliation, AI grading assistance, and real-time parent notifications.",
    metrics: [
      { label: "Campuses Managed", value: "35+ Schools" },
      { label: "Enrolled Students", value: "40,000+" },
      { label: "Fee Collection", value: "100% Reconciled" },
      { label: "Report Cards", value: "Instant AI Gen" },
    ],
    stack: ["Next.js", "React Native", "Go", "GraphQL", "TimescaleDB", "GCP"],
    liveStatus: "Deployed in 35+ Schools",
    architecture: [
      "Multi-tenant database schema with strict institutional data isolation",
      "Automated OCR exam sheet grading and statistical curve computation",
      "Omni-channel SMS/WhatsApp real-time parent alert bridge",
    ],
    uiType: "edtech",
  },
  {
    id: "worksync",
    name: "WorkSync",
    badge: "Work Tool (Zoho & ClickUp Alternative)",
    category: "Enterprise Productivity SaaS",
    platform: "Web & Mobile App",
    tagline: "Unified CRM, Agile Sprint Boards, Real-Time Docs & Automated Workflows",
    description:
      "A full modern work suite engineered to rival Zoho and ClickUp — combining agile Kanban sprint boards, deals CRM, collaborative real-time rich docs, team chat, and no-code workflow automations in one unified interface.",
    metrics: [
      { label: "Daily Active Teams", value: "15,000+" },
      { label: "Canvas Engine", value: "60 FPS Fluid" },
      { label: "Integrations", value: "500+ Webhooks" },
      { label: "Sync Latency", value: "<10ms WebSockets" },
    ],
    stack: ["TypeScript", "Next.js", "WebSockets", "Rust Engine", "PostgreSQL", "Docker"],
    liveStatus: "Enterprise Cloud Live",
    architecture: [
      "CRDT-based conflict-free collaborative text & canvas editing engine",
      "Sub-10ms persistent bi-directional WebSocket state broadcast",
      "Event-driven visual workflow automation trigger engine",
    ],
    uiType: "worksync",
  },
  {
    id: "affixai",
    name: "Affix AI",
    badge: "AI Document Signer",
    category: "LegalTech & Document Intelligence",
    platform: "Web App",
    tagline: "Automated Signature Field Append, Multi-Party Routing & Legal Audit Trails",
    description:
      "An intelligent e-signature and contract execution web platform that utilizes computer vision to automatically detect signature, date, and initials fields, appending verified cryptographic seals with SHA-256 audit logs.",
    metrics: [
      { label: "Signing Speed", value: "3x Faster" },
      { label: "Legal Standing", value: "100% ESIGN / eIDAS" },
      { label: "Tamper Proof", value: "SHA-256 Hashes" },
      { label: "Field Detection", value: "99.1% Auto-Append" },
    ],
    stack: ["React", "FastAPI / Python", "PDF-lib", "OpenCV / LayoutLM", "AWS S3"],
    liveStatus: "Production Ready",
    architecture: [
      "Vision AI LayoutLM model for automatic signature bounding-box prediction",
      "Cryptographic X.509 certificate generation with immutable audit trail logs",
      "Multi-party sequential and parallel signer routing orchestration",
    ],
    uiType: "affix",
  },
  {
    id: "systemtight",
    name: "System Tight",
    badge: "Financial Security Shield",
    category: "Fintech Cybersecurity & Compliance",
    platform: "Web & API Security",
    tagline: "Real-Time Threat Detection, API Shielding & Penetration Defense Engine",
    description:
      "A 360-degree security and threat intelligence platform built specifically for financial institutions and payment processors. Guards core banking APIs against DDoS, credential stuffing, SQL injection, and data exfiltration.",
    metrics: [
      { label: "Threat Mitigation", value: "99.999%" },
      { label: "WAF Latency", value: "< 2ms Overhead" },
      { label: "Security Standard", value: "ISO 27001 & SOC 2" },
      { label: "Breaches Prevented", value: "0 Vulnerabilities" },
    ],
    stack: ["Rust", "eBPF", "Envoy Proxy", "ClickHouse", "Kubernetes", "Kafka"],
    liveStatus: "Active Financial Guard",
    architecture: [
      "Kernel-level packet inspection via eBPF with sub-millisecond filtering",
      "Dynamic rate limiting and behavioral bot fingerprinting heuristic",
      "Real-time automated compliance auditing for PCI-DSS & Central Bank guidelines",
    ],
    uiType: "security",
  },
  {
    id: "hestane",
    name: "Hestane",
    badge: "Full Hospital OS / SaaS",
    category: "Healthcare & Hospital SaaS/OS",
    platform: "Web & App",
    tagline: "Clinical Bed Management, Electronic Medical Records, Pharmacy & Billing OS",
    description:
      "A full-scale hospital operating system managing patient triage, real-time ICU/ward bed allocation, doctor schedules, digital diagnostic orders, automated pharmacy inventory dispensing, and insurance claim settlement.",
    metrics: [
      { label: "Hospital Networks", value: "18+ Facilities" },
      { label: "Patient Records", value: "500,000+" },
      { label: "System Availability", value: "99.999% SLA" },
      { label: "Interoperability", value: "HL7 / FHIR Certified" },
    ],
    stack: ["React", "React Native", "Node.js", "PostgreSQL", "Docker", "AWS HIPAA Cloud"],
    liveStatus: "Operating Across 18 Hospitals",
    architecture: [
      "HL7 / FHIR certified electronic health record data pipelines",
      "Real-time ICU ward telemetry and automated bed assignment dispatch",
      "Automated barcode-based pharmacy dispensing and inventory sync",
    ],
    uiType: "hospital",
  },
];

export const designShowcaseData = [
  {
    id: "systems",
    title: "Pixel-Perfect Design Systems",
    tag: "Design Architecture",
    description:
      "We engineer cohesive, tokenized design systems that guarantee seamless visual harmony, WCAG AAA accessibility, and rapid developer velocity across web and mobile.",
    highlights: ["Tokenized Color & Typography Scales", "Dynamic Component Variants", "Automated Storybook Docs"],
    stat: "100% Component Uniformity",
  },
  {
    id: "interactions",
    title: "Fluid 60FPS Micro-Interactions",
    tag: "Creative Motion Engineering",
    description:
      "Every transition, click, and gesture is fine-tuned with physics-based motion curves. We craft intuitive micro-feedback that makes digital software feel tactile and alive.",
    highlights: ["Spring-Physics Motion Curves", "Haptic-Feel Visual Triggers", "Sub-frame Render Efficiency"],
    stat: "60 FPS Fluidity",
  },
  {
    id: "dataviz",
    title: "High-Density Data Visualization",
    tag: "Complex UI Aesthetics",
    description:
      "Transforming complex, high-frequency datasets into intuitive executive command centers with live SVG charts, interactive heatmaps, and telemetry dashboards.",
    highlights: ["Streaming Real-Time Candlesticks", "Geospatial Data Overlays", "Adaptive Telemetry Filters"],
    stat: "Sub-Second Data Rendering",
  },
  {
    id: "craft",
    title: "Next-Gen Dark UI Aesthetics",
    tag: "Visual Craft & Contrast",
    description:
      "High-contrast obsidian interfaces with surgical typography, solid depth hierarchy, and deliberate brand accents that demand attention and project enterprise authority.",
    highlights: ["Deep Obsidian Palette Hierarchy", "Zero Visual Clutter", "Tailored Iconographic Language"],
    stat: "Executive-Grade Polish",
  },
];

export const processData = [
  {
    step: "01",
    id: "discovery",
    title: "Discovery",
    tagline: "Strategic Alignment",
    summary:
      "We dive deep into your project vision, target market, competitors, and technical requirements to build a clear, outcome-focused roadmap.",
  },
  {
    step: "02",
    id: "design",
    title: "Design",
    tagline: "User-Centric Architecture",
    summary:
      "Our UI/UX specialists craft high-fidelity mockups, wireframes, and design systems focused on aesthetics, accessibility, and high conversion.",
  },
  {
    step: "03",
    id: "development",
    title: "Development",
    tagline: "Agile Engineering",
    summary:
      "We write clean, modular, and maintainable code with continuous testing, bi-weekly sprint demos, and real-time client collaboration.",
  },
  {
    step: "04",
    id: "testing",
    title: "Testing & Launch",
    tagline: "Quality Assurance",
    summary:
      "Rigorous end-to-end security audits, automated regression suites, load testing, and smooth production deployment with 24/7/365 support.",
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: "Amina Bello",
    role: "Chief Operating Officer",
    company: "Fundy Pay",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    quote:
      "SaulTech delivered Fundy Pay ahead of schedule with flawless financial security standards. Their agile methodology and transparent communication made the entire launch completely stress-free.",
  },
  {
    id: 2,
    name: "David O'Connor",
    role: "VP of Product",
    company: "Mune Work",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    quote:
      "Building Mune Work with SaulTech was the best engineering decision we made. The AI matching algorithm and responsive mobile app scale effortlessly under hundreds of thousands of candidates.",
  },
  {
    id: 3,
    name: "Dr. Tunde Adeyemi",
    role: "Medical Director",
    company: "Hestane Health Systems",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    quote:
      "Hestane has transformed our hospital operations across 18 centers. SaulTech's attention to clinical workflow, bed tracking, and zero downtime is world-class.",
  },
];

export const companyStats = [
  { value: "8+", label: "Flagship Products Built" },
  { value: "500K+", label: "End Users Served" },
  { value: "99.99%", label: "Platform Availability" },
  { value: "24/7", label: "Dedicated Support" },
];
