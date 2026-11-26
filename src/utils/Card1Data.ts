import { Imac, User_groups, Workspace, DADC, DAD } from "../assets/svg";

export const cardsData = [
  {
    id: 1,
    image: Imac,
    title: "Bespoke Software",
    content:
      "Our agile engineering team builds high-performance web applications and mobile solutions that elevate your business performance, streamline operations, and deliver world-class user experiences.",
    services: ["MVP", "SaaS", "Cloud-based Apps", "Dedicated Team"],
  },
  {
    id: 2,
    image: User_groups,
    title: "Team Extension",
    content:
      "Hire top-tier developers that integrate seamlessly with your operations to rapidly scale your roadmap. We handle bespoke engineering, talent placement, and ongoing maintenance with cutting-edge standards.",
    services: ["DevOps Outsourcing", "Embedded Engineers", "Cost Optimization"],
  },
  {
    id: 3,
    image: Workspace,
    title: "DevOps & Cloud",
    content:
      "Our comprehensive approach to DevOps provides automated, battle-tested infrastructure tailored to your exact requirements. We deliver resilient, high-uptime cloud solutions while optimizing infrastructure spend.",
    services: ["Cloud Architecture", "System Migration", "CI/CD & Monitoring"],
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
    title: "Fundy Inc.",
    category: "Fintech Platform",
    content:
      "Fundy is a premier fintech mobile & web ecosystem in Africa, offering seamless peer-to-peer payments, high-yield savings, and automated micro-investing with bank-grade encryption.",
    tags: ["React Native", "Node.js", "AWS", "Fintech"],
    link: "#",
  },
  {
    id: 2,
    image: DAD,
    title: "GigHub Global",
    category: "Talent & Marketplace",
    content:
      "A next-generation job discovery and freelance networking marketplace connecting verified tech talent with global enterprises, featuring instant milestone contracts and AI skill matching.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AI Match"],
    link: "#",
  },
];

export const flagshipApps = [
  {
    id: "omnipay",
    name: "OmniPay AI",
    badge: "Next-Gen Fintech Engine",
    category: "Autonomous Financial OS",
    tagline: "Sub-50ms Global Cross-Border Settlements & Fraud Telemetry",
    description:
      "An institutional-grade fintech ecosystem handling real-time multi-currency wallets, biometric authorization, automated ledger reconciliation, and AI-driven anti-money laundering heuristics.",
    metrics: [
      { label: "Throughput", value: "48,500 TPS" },
      { label: "Latency", value: "24ms Avg" },
      { label: "Fraud Prevention", value: "99.98%" },
      { label: "Global Coverage", value: "140+ Countries" },
    ],
    stack: ["Rust", "Next.js 15", "Kafka", "PostgreSQL", "TailwindCSS", "AWS KMS"],
    liveStatus: "Live Production Cluster",
    architecture: [
      "Zero-knowledge encrypted payment state channels",
      "Event-driven Kafka streaming for sub-second reconciliation",
      "PCI-DSS Level 1 compliant vault infrastructure",
    ],
  },
  {
    id: "pulsemed",
    name: "PulseMed 360",
    badge: "Clinical Intelligence",
    category: "Predictive Telehealth & EHR Platform",
    tagline: "AI Symptom Triage, Live WebRTC Consultations & Vitals Sync",
    description:
      "A HIPAA-compliant clinical digital health platform connecting 120,000+ patients with certified medical specialists, powered by real-time IoT diagnostic feeds and automated electronic prescription dispatch.",
    metrics: [
      { label: "Active Patients", value: "120K+" },
      { label: "Consultation Uptime", value: "99.99%" },
      { label: "Triage Accuracy", value: "99.4%" },
      { label: "HIPAA Compliant", value: "SOC 2 Type II" },
    ],
    stack: ["React Native", "WebRTC", "Go", "Docker", "TimescaleDB", "GCP"],
    liveStatus: "HIPAA Certified Engine",
    architecture: [
      "End-to-end encrypted peer-to-peer WebRTC video stream",
      "Real-time streaming biometric telemetry ingestion",
      "HL7 / FHIR standard electronic health record integration",
    ],
  },
  {
    id: "nexuslogix",
    name: "NexusLogix",
    badge: "Global Logistics AI",
    category: "Autonomous Supply Chain Control Tower",
    tagline: "3D Geospatial Fleet Telemetry & Predictive Route Dispatch",
    description:
      "An enterprise-scale supply chain command center orchestrating over 3,500 commercial transport assets with real-time GPS telemetry, predictive maintenance alerts, and automated multi-stop routing.",
    metrics: [
      { label: "Tracked Assets", value: "3,500+ Fleets" },
      { label: "Fuel Cost Reduction", value: "-28.4%" },
      { label: "ETA Accuracy", value: "99.2%" },
      { label: "Daily Data Ingest", value: "1.4 TB" },
    ],
    stack: ["TypeScript", "Python / FastAPI", "Mapbox GL", "Redis", "Kubernetes", "MQTT"],
    liveStatus: "Real-time Telemetry Live",
    architecture: [
      "Edge IoT sensor ingestion over lightweight MQTT protocol",
      "A* graph traversal and geospatial route optimization",
      "Sub-second alert triggering for abnormal temperature / cargo state",
    ],
  },
  {
    id: "aetherai",
    name: "AetherCloud Copilot",
    badge: "Enterprise AI Swarm",
    category: "Autonomous Multi-Agent Workflow Engine",
    tagline: "Generative Context Synthesis & Automated Cross-Tool Execution",
    description:
      "An enterprise generative AI workplace platform that coordinates specialized agent swarms to analyze complex contracts, generate production code, query internal knowledge graphs, and automate business operations.",
    metrics: [
      { label: "Task Speedup", value: "12x Faster" },
      { label: "Vector Index Size", value: "50M+ Docs" },
      { label: "Semantic Accuracy", value: "98.7%" },
      { label: "Data Privacy", value: "Private VPC" },
    ],
    stack: ["PyTorch", "Next.js", "LangGraph", "ChromaDB", "FastAPI", "OpenAI / Claude API"],
    liveStatus: "Enterprise Swarm Active",
    architecture: [
      "Hybrid RAG with vector semantic search and BM25 re-ranking",
      "Zero data leakage architecture running in isolated tenant VPCs",
      "Automated human-in-the-loop review checkpoints for audited actions",
    ],
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
    company: "Fundy Technologies",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    quote:
      "SaulTech delivered our fintech application ahead of schedule with flawless security standards. Their agile methodology and transparent communication made the entire launch completely stress-free.",
  },
  {
    id: 2,
    name: "David O'Connor",
    role: "VP of Engineering",
    company: "GigHub Global",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80",
    quote:
      "Partnering with SaulTech for our platform overhaul was one of the best engineering decisions we've made. The architecture scales effortlessly under heavy traffic spikes, and user retention has doubled.",
  },
  {
    id: 3,
    name: "Tunde Adeyemi",
    role: "Founder & CEO",
    company: "Logix Africa",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    quote:
      "Exceptional engineering standard. SaulTech's attention to detail in UI/UX polish and automated cloud DevOps saved our startup months of engineering runway. They are a true strategic partner.",
  },
];

export const companyStats = [
  { value: "99.8%", label: "Client Satisfaction" },
  { value: "45+", label: "Products Launched" },
  { value: "24/7", label: "Ongoing Support" },
  { value: "4.9/5", label: "Average Review" },
];
