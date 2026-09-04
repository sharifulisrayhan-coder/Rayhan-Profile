import { Project, PricingPlan, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Shariful Islam Rayhan",
  title: "Senior IT Professional & Full-Stack Web Specialist",
  currentRole: "IT Operations Lead",
  company: "ICT International LLC",
  location: "Dubai, United Arab Emirates",
  email: "shariful.rayhan.bd@gmail.com",
  phone: "+971521246594",
  phoneFormatted: "+971 52 124 6594",
  whatsappUrl: "https://wa.me/971521246594?text=Hello%20Shariful%20Islam%20Rayhan,%20I%20would%20like%20to%20inquire%20about%20your%20IT%20and%20Web%20services.",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  twitter: "https://x.com",
  headline: "Empowering Businesses through Modern Web Engineering, Cloud Systems & IT Infrastructure.",
  subheadline: "Senior IT Professional & Full-Stack Web Specialist currently leading IT operations at ICT International LLC in Dubai, UAE.",
  bio: "Experienced technology consultant specializing in enterprise-grade web development, high-throughput cloud infrastructure, and robust corporate IT operations. With over 6 years of cross-functional expertise across UAE enterprises, I bridge the gap between cutting-edge software engineering and mission-critical network reliability.",
  stats: [
    { label: "Years Experience", value: "6+", subtext: "Dubai & International" },
    { label: "Completed Projects", value: "80+", subtext: "Web & Infrastructure" },
    { label: "Enterprise Support", value: "99.9%", subtext: "SLA Uptime Delivered" },
    { label: "Corporate Clients", value: "45+", subtext: "Across GCC & Middle East" },
  ],
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "wamch-medical-center",
    title: "WAMCH Medical Center Portal",
    subtitle: "wamch.ae Healthcare Platform Revamp",
    category: "Web Development",
    client: "WAMCH Healthcare Group",
    location: "Dubai, UAE",
    status: "Live & Maintained",
    description: "Complete modern healthcare web system with 24/7 AI chatbot, intelligent appointment routing, comprehensive on-page SEO, and HIPAA/UAE health data compliant security architecture.",
    challenge: "The existing portal suffered from legacy page load times (>6s), poor mobile experience, absence of automated patient triage, and vulnerabilities in patient appointment inquiry storage.",
    solution: "Engineered a high-performance Next.js architecture integrated with automated AI triaging for patient appointments, multi-doctor calendar slot synchronization, localized Arabic/English SEO, and end-to-end HTTPS/CSP security headers.",
    results: [
      "Reduced page loading speed from 6.2s to 0.8s (99 Lighthouse performance)",
      "Automated over 65% of repetitive consultation inquiries via the custom AI chatbot",
      "Achieved #1-#3 rankings on Google Dubai for key specialized medical keywords",
      "Zero downtime during 2+ years of continuous medical operations"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "AI Chatbot API", "Cloudflare CDN", "PostgreSQL"],
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://wamch.ae",
  },
  {
    id: "ict-corporate-portal",
    title: "ICT International Corporate Portal",
    subtitle: "Enterprise Business & Quotation Engine",
    category: "Enterprise Solutions",
    client: "ICT International LLC",
    location: "Dubai, UAE",
    status: "In Production",
    description: "Corporate business portal featuring a responsive enterprise UI, interactive real-time quotation generation system, customer support ticketing, and ERP backend synchronization.",
    challenge: "Corporate clients required rapid equipment quotation turnaround times for complex IT hardware and enterprise software configurations which previously took up to 48 hours manually.",
    solution: "Designed and deployed a dynamic pricing calculator with multi-currency AED/USD conversion, tiered hardware component rules, automated PDF quotation generation, and role-based staff administration.",
    results: [
      "Cut RFQ response times by 85% from 48 hours to instantaneous preview",
      "Processed over 1,200 enterprise quotations in the first 6 months",
      "Unified internal corporate communication across 3 UAE regional offices",
      "Integrated seamless corporate security and multi-factor authentication"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "PDFKit", "Docker"],
    featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://ict-international.com",
  },
  {
    id: "al-sahra-gadgets",
    title: "Al-Sahra Gadgets Platform",
    subtitle: "High-Volume Electronics Showcase & Retail",
    category: "Web Development",
    client: "Al-Sahra Tech Retail",
    location: "Dubai, UAE",
    status: "Active Commerce",
    description: "Multi-category consumer electronics & smart gadget showcase platform with dynamic inventory structure, ultra-fast faceted search, and frictionless checkout UX.",
    challenge: "Managing thousands of tech SKU variants with real-time stock levels across warehouse outlets while maintaining sub-second mobile page loads during seasonal Dubai shopping promotions.",
    solution: "Crafted a headless commerce frontend with optimized media delivery, intuitive attribute filtering (brand, processor, memory, budget), one-click WhatsApp order routing, and instant cart synchronization.",
    results: [
      "Handled 40,000+ monthly visits during Dubai Shopping Festival without degradation",
      "Increased conversion rate by 34% through streamlined mobile cart flow",
      "Integrated automated stock alert webhooks to warehouse suppliers",
      "Achieved 100% mobile usability score on Google Search Console"
    ],
    technologies: ["Next.js", "Tailwind CSS", "REST APIs", "WooCommerce Engine", "Redis Cache", "Stripe & Tabby"],
    featuredImage: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://alsahra-gadgets.ae",
  },
  {
    id: "enterprise-network-deployment",
    title: "Enterprise Network & Security Deployment",
    subtitle: "Multi-Branch Infrastructure & VPN Mesh",
    category: "IT Infrastructure",
    client: "Corporate Regional Headquarters",
    location: "Business Bay, Dubai, UAE",
    status: "Active Operations",
    description: "Multi-branch corporate office LAN/WAN setup with high-speed site-to-site IPsec VPN tunnels, unified Next-Gen firewall policies, managed Cisco switches, and redundant server deployment in Business Bay, Dubai.",
    challenge: "The client needed to interconnect 3 new corporate office branches with real-time file sharing, zero-loss VoIP communication, and stringent zero-trust perimeter security against cyber threats.",
    solution: "Configured enterprise Cisco Core switches, MikroTik edge routers, FortiGate Next-Generation Firewalls with intrusion prevention (IPS), isolated guest/corporate VLANs, and active-standby automated failover ISP connections.",
    results: [
      "Guaranteed 99.99% network uptime across all 3 Business Bay facilities",
      "Reduced inter-office network latency by 45% via optimized VPN routing",
      "Neutralized 100% of malicious penetration attempts during routine audit",
      "Established centralized 24/7 network monitoring with automated alerting"
    ],
    technologies: ["Cisco Catalyst", "MikroTik RouterOS", "FortiGate NGFW", "IPsec VPN", "VLAN Segmentation", "SNMP Monitoring", "Active Directory"],
    featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Web Engineering & Software",
    description: "End-to-end full-stack development delivering scalable web architectures, resilient APIs, and pixel-perfect responsive user experiences.",
    skills: [
      { name: "React & Next.js", level: 95, experience: "5+ yrs", iconName: "Code2", tags: ["App Router", "SSR", "Client State", "Vite"] },
      { name: "TypeScript & JavaScript", level: 92, experience: "6+ yrs", iconName: "FileCode", tags: ["ESNext", "Type Safety", "Async Patterns"] },
      { name: "Node.js & Express", level: 90, experience: "5+ yrs", iconName: "Server", tags: ["RESTful APIs", "Middleware", "Microservices"] },
      { name: "Tailwind CSS & UI/UX", level: 96, experience: "4+ yrs", iconName: "Palette", tags: ["Responsive Design", "Framer Motion", "Accessibility"] },
      { name: "WordPress & WooCommerce", level: 88, experience: "6+ yrs", iconName: "Globe", tags: ["Custom Themes", "Hooks & Filters", "Payment Gateways"] },
      { name: "REST APIs & Integration", level: 94, experience: "5+ yrs", iconName: "Cpu", tags: ["Webhooks", "JSON/REST", "Third-party APIs"] },
    ]
  },
  {
    category: "IT Systems & Infrastructure",
    description: "Robust enterprise IT solutions, mission-critical network deployments, cloud administration, and cybersecurity hardening across Dubai organizations.",
    skills: [
      { name: "Enterprise Networking (Cisco/MikroTik)", level: 94, experience: "6+ yrs", iconName: "Network", tags: ["VLANs", "Routing Protocols", "VPN Tunnels", "Switching"] },
      { name: "Server Administration", level: 90, experience: "5+ yrs", iconName: "HardDrive", tags: ["Windows Server", "Ubuntu/Linux", "Active Directory", "DNS/DHCP"] },
      { name: "Cloud Solutions & Virtualization", level: 88, experience: "4+ yrs", iconName: "Cloud", tags: ["AWS", "Microsoft Azure", "VMware ESXi", "Proxmox"] },
      { name: "Firewall & Cybersecurity", level: 91, experience: "5+ yrs", iconName: "ShieldCheck", tags: ["Fortinet", "Sophos", "SSL/TLS", "Pen-testing Defense"] },
      { name: "IT Helpdesk & Hardware Infrastructure", level: 98, experience: "6+ yrs", iconName: "Wrench", tags: ["Workstation Rollouts", "SLA Support", "Asset Management"] },
      { name: "Backup Automation & Disaster Recovery", level: 90, experience: "5+ yrs", iconName: "Database", tags: ["NAS Storage", "Veeam", "Cloud Redundancy"] },
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "standard",
    name: "Standard Plan",
    oneTimeAed: 2000,
    monthlyAed: 750,
    description: "Ideal for growing Dubai small businesses, startups, and professional consultants requiring a high-speed corporate presence.",
    idealFor: "Startups & Local Services",
    deliveryTime: "7 - 10 Business Days",
    features: [
      "High-performance responsive website (Up to 5 pages)",
      "On-page SEO fundamentals & Google Search Console setup",
      "Ultra-fast loading speed optimization (90+ score)",
      "Custom contact inquiry form with email routing",
      "Mobile, tablet & retina display compatibility",
      "Basic SSL security certificate installation",
      "1 month complimentary technical maintenance & support"
    ]
  },
  {
    id: "silver",
    name: "Silver Plan",
    oneTimeAed: 5000,
    monthlyAed: 1800,
    description: "Tailored for established commercial enterprises, medical clinics, and e-commerce stores seeking dynamic capabilities and automated lead generation.",
    isPopular: true,
    idealFor: "Established Companies & Retail",
    deliveryTime: "14 - 21 Business Days",
    features: [
      "Custom dynamic business portal or full e-commerce setup",
      "Custom API integrations & dynamic database structure",
      "Basic automated lead-capture AI Chatbot widget",
      "Enhanced firewall & server security configuration",
      "Payment gateway integration (Stripe, Tabby, or UAE bank)",
      "Full multilingual capability (English & Arabic ready)",
      "3 months priority technical maintenance & support hotline"
    ]
  },
  {
    id: "premium",
    name: "Premium Plan",
    oneTimeAed: 10000,
    monthlyAed: 3500,
    description: "Complete enterprise-grade solution delivering mission-critical web applications, intelligent custom AI agents, and corporate cloud infrastructure.",
    idealFor: "Corporate Entities & Enterprise Groups",
    deliveryTime: "30 - 45 Business Days",
    features: [
      "Full enterprise-grade web application / corporate infrastructure",
      "Advanced 24/7 Intelligent AI Agent trained on custom company knowledge",
      "Complete cloud deployment, multi-layer security hardening, and CDN setup",
      "Comprehensive Local & Global SEO optimization with schema markup",
      "Corporate network integration & dedicated VPN/API connectivity",
      "Automated cloud backup pipelines & disaster recovery protocol",
      "6 months full dedicated maintenance, backup automation & direct priority consulting"
    ]
  }
];

export const WORK_EXPERIENCE = [
  {
    role: "Senior IT Professional & Operations Lead",
    company: "ICT International LLC",
    location: "Dubai, UAE",
    period: "2021 - Present",
    description: "Leading corporate IT infrastructure, server administration, branch networking, and web portal engineering for enterprise business accounts across Dubai and the Northern Emirates.",
    highlights: [
      "Managed continuous IT operations for 200+ enterprise workstations and multi-site network architecture",
      "Designed and delivered high-impact corporate web systems including internal quotation engine",
      "Enforced zero-trust network policies and endpoint security across all company domains"
    ]
  },
  {
    role: "Full-Stack Web Specialist & Systems Engineer",
    company: "Freelance Tech Consultancy",
    location: "Dubai & Remote",
    period: "2018 - 2021",
    description: "Engineered scalable web applications, e-commerce storefronts, and tailored business software for clients in healthcare, retail, logistics, and professional services.",
    highlights: [
      "Delivered 50+ bespoke client web projects with 100% on-time milestone execution",
      "Implemented automated CRM workflows and third-party payment gateway solutions",
      "Provided on-demand server migration and cloud hosting transitions"
    ]
  }
];
