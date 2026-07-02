export const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Blog", href: "#blog" },
    { name: "Terminal", href: "#terminal" },
    { name: "Contact", href: "#contact" },
];

export const SOCIALS = {
    github: "https://github.com/sid1125",
    linkedin: "https://www.linkedin.com/in/ssinha1125/",
    tryhackme: "https://tryhackme.com/p/sid1125",
    email: "mailto:siddharthsinha1125@gmail.com",
    cv: "/SiddharthSinha_CV.pdf"
};

export const HERO = {
    badge: "Available for New Projects",
    headline: "Building Intentional Digital Experiences",
    tagline: "Computer Science undergraduate focused on cybersecurity, digital forensics, and AI-enabled full-stack systems."
};

export const PROJECTS = [
    {
        title: "Project ARGUS",
        description: "Full-stack telecom forensics platform for CDR/IPDR investigation with FastAPI, SQLAlchemy, Pandas, NetworkX, D3.js, and Leaflet. Features network graphs, tower movement maps, timelines, cross-subject correlation, and court-ready dossier export.",
        details: "A comprehensive telecom forensics investigation platform designed for law enforcement and cybersecurity analysts. ARGUS ingests Call Detail Records (CDR) and IP Detail Records (IPDR) to reconstruct communication patterns, visualize network relationships, and detect suspicious activity through spatiotemporal analysis. The platform generates court-admissible dossier exports and leverages local AI models for offline deployment in sensitive environments.",
        image: "./ARGUS.jpg",
        tags: ["Telecom Forensics", "CDR/IPDR", "Analytics"],
        features: [
            "Interactive network graphs with D3.js force-directed layouts showing call/subscriber relationships",
            "Tower movement maps with Leaflet for geospatial tracking and timeline playback",
            "Cross-subject correlation engine linking disparate CDR records to common entities",
            "Spatiotemporal inference modules for risk scoring and impossible travel detection",
            "Offline-first AI insights via Ollama/LoRA for air-gapped environments",
            "Court-ready dossier export with chain-of-custody metadata"
        ],
        techStack: ["FastAPI", "Python", "SQLAlchemy", "Pandas", "NetworkX", "D3.js", "Leaflet", "Ollama", "LoRA", "PostgreSQL"],
        link: "https://github.com/sid1125/tifm-cdr-ipdr-visualizer",
        linkText: "View Code",
        links: [
            { label: "GitHub", url: "https://github.com/sid1125/tifm-cdr-ipdr-visualizer" }
        ]
    },
    {
        title: "Project SENTINEL (WIP)",
        description: "AI-powered network threat intelligence and monitoring platform with real-time network discovery, ARP scanning, Nmap-based enumeration, and local CVE intelligence engine. Features a natural language control layer using local LLMs and a modular SOC-style architecture designed for offline-first deployment.",
        details: "A next-generation network security monitoring platform that combines traditional network scanning tools with AI-powered analysis. SENTINEL provides real-time network discovery, vulnerability assessment, and natural language querying of network state. The modular SOC-style architecture allows security teams to deploy it in air-gapped environments without external dependencies, making it ideal for sensitive or classified network infrastructures.",
        image: "",
        tags: ["Network Security", "AI", "SOC"],
        features: [
            "Real-time network discovery with ARP scanning and Nmap-based enumeration",
            "Local CVE intelligence engine with automated vulnerability matching",
            "Natural language control layer using local LLMs for querying network state",
            "Modular SOC-style dashboard with real-time WebSocket updates",
            "Offline-first deployment with no external API dependencies",
            "Automated alerting and threat severity scoring"
        ],
        techStack: ["FastAPI", "React", "WebSockets", "Ollama", "Nmap", "Python", "SQLite", "Docker"],
        link: "https://github.com/Sid1125/Project-SENTINEL",
        linkText: "View Code",
        links: [
            { label: "GitHub", url: "https://github.com/Sid1125/Project-SENTINEL" }
        ]
    },
    {
        title: "AgentRecon",
        description: "Automated reconnaissance and vulnerability analysis pipeline integrating Nmap, Masscan, Nikto, Gobuster, and SSLyze. Features custom CVE enrichment from NVD and AlienVault OTX, with AI-driven false positive filtering for improved signal accuracy.",
        details: "An intelligent reconnaissance automation framework that orchestrates multiple industry-standard scanning tools through a unified pipeline. AgentRecon goes beyond simple tool orchestration by enriching findings with real-time CVE data from NVD and AlienVault OTX, then applying machine learning to filter false positives. The result is a prioritized, actionable vulnerability report that saves hours of manual analysis.",
        image: "./agent-recon.png",
        tags: ["Recon", "Automation", "Vulnerability"],
        features: [
            "Orchestrated scanning pipeline with Nmap, Masscan, Nikto, Gobuster, SSLyze",
            "Real-time CVE enrichment from NVD and AlienVault OTX threat feeds",
            "AI-driven false positive filtering using supervised classification models",
            "Automated report generation with severity-based prioritization",
            "Modular plugin architecture for adding custom scanners",
            "Parallel execution engine for faster comprehensive scans"
        ],
        techStack: ["Python", "Nmap", "Masscan", "Scikit-learn", "NVD API", "AlienVault OTX", "Docker"],
        link: "https://github.com/sid1125/AgentRecon",
        linkText: "View Code",
        links: [
            { label: "GitHub", url: "https://github.com/sid1125/AgentRecon" }
        ]
    },
    {
        title: "AI Research Agent",
        description: "Retrieval-Augmented Generation pipeline for private PDF question answering. Features a custom Siamese BiLSTM embedding model in Keras, hybrid dense + TF-IDF retrieval, and grounded answer generation with extractive fallback for low-resource settings.",
        details: "A specialized RAG system designed for research environments where data privacy is paramount. Unlike cloud-based solutions, this agent processes sensitive PDF documents entirely on local hardware. It uses a custom-trained Siamese BiLSTM network for generating document embeddings, combined with TF-IDF for hybrid retrieval that balances semantic understanding with keyword precision. The extractive fallback mechanism ensures answers are always grounded in source material, even when generative models are uncertain.",
        image: "",
        tags: ["RAG", "NLP", "Research"],
        features: [
            "Custom Siamese BiLSTM embedding model trained in Keras for domain-specific understanding",
            "Hybrid retrieval combining dense embeddings with TF-IDF sparse retrieval",
            "Grounded answer generation with confidence scoring",
            "Extractive fallback for low-confidence predictions — never hallucinates",
            "Full offline operation — no external API calls or data leaks",
            "Streamlit-based UI for interactive document querying"
        ],
        techStack: ["Python", "Keras", "TensorFlow", "TF-IDF", "Streamlit", "Sentence-Transformers", "FastAPI"],
        link: "https://github.com/Sid1125/Primitive-Research-RAG",
        linkText: "View Code",
        links: [
            { label: "GitHub", url: "https://github.com/Sid1125/Primitive-Research-RAG" }
        ]
    },
    {
        title: "F1 Insight Platform",
        description: "Analytics platform for Formula 1 telemetry and race data using FastAPI, Streamlit, and SQLAlchemy with XGBoost predictive models for race outcomes. Includes strategy simulation for pit-stop timing and tyre management, plus an AI-powered natural language interface.",
        details: "A data-intensive sports analytics platform that transforms raw Formula 1 telemetry into actionable race intelligence. F1 Insight uses XGBoost regression models trained on historical race data to predict finishing positions, optimal pit-stop windows, and tyre degradation curves. The natural language interface allows users to ask questions like 'What if Hamilton pits on lap 25?' and receive simulated outcomes with confidence intervals.",
        image: "",
        tags: ["Sports Analytics", "ML", "Data Viz"],
        features: [
            "XGBoost predictive models for race outcome forecasting with confidence intervals",
            "Strategy simulation engine for pit-stop timing, tyre management, and fuel load",
            "AI-powered natural language interface for ad-hoc race queries",
            "Interactive telemetry visualizations with lap-by-lap comparison",
            "Historical data pipeline ingesting Ergast API and FastF1 data sources",
            "Driver and constructor performance trend analysis across seasons"
        ],
        techStack: ["FastAPI", "Streamlit", "SQLAlchemy", "XGBoost", "Python", "Pandas", "Plotly", "FastF1"],
        link: "https://github.com/Sid1125/F1-Insight",
        linkText: "View Code",
        links: [
            { label: "GitHub", url: "https://github.com/Sid1125/F1-Insight" }
        ]
    },
    {
        title: "HITMEN",
        description: "Community-driven moderation and harmful content tracking platform leveraging crowdsourced inputs and structured reporting. Integrates Discord API for dynamic entity fetching with automated status verification and real-time state transitions.",
        details: "A community safety platform that harnesses crowdsourced intelligence to track and mitigate harmful online content. HITMEN integrates with Discord's API to automatically fetch and verify reported entities, maintaining a real-time state machine for tracking moderation actions from report through resolution. The structured reporting system provides transparency and accountability in community moderation workflows.",
        image: "./Hitmen.png.jpg",
        tags: ["Moderation", "Discord", "Community"],
        features: [
            "Crowdsourced harmful content reporting with structured evidence collection",
            "Discord API integration for automated entity fetching and status verification",
            "Real-time state machine tracking moderation lifecycle: report → review → action → resolution",
            "Community dashboard showing active cases, resolved reports, and moderator activity",
            "Automated notifications and escalation workflows for urgent reports",
            "Anonymous reporting with optional identity verification for moderators"
        ],
        techStack: ["HTML", "CSS", "JavaScript", "Discord API", "TailwindCSS", "Node.js"],
        link: "https://sid1125.github.io/hitmen_epi_prevention/",
        linkText: "View Live",
        links: [
            { label: "Live Site", url: "https://sid1125.github.io/hitmen_epi_prevention/" },
            { label: "GitHub", url: "https://github.com/Sid1125/hitmen_epi_prevention" }
        ]
    },
    {
        title: "Innovathon Platform",
        description: "Full-stack hackathon management and event platform with structured sections for overview, sponsors, competition tracks, timelines, and FAQs. Designed with a visually rich, futuristic UI and component-driven layout architecture.",
        details: "A comprehensive event management platform built for college-level hackathons. The Innovathon Platform provides everything needed to run a successful coding competition: sponsor showcase, competition track descriptions with judging criteria, real-time timeline management, FAQ sections, and team registration. The futuristic UI design uses glassmorphism and animated transitions to create an engaging experience that reflects the innovative spirit of the event.",
        image: "./Innovathon.jpg",
        tags: ["Event Platform", "UI/UX", "Hackathon"],
        features: [
            "Multi-section landing page with hero, sponsors, tracks, timeline, FAQ",
            "Component-driven architecture for easy content updates and theming",
            "Responsive design with glassmorphism and animated transitions",
            "Team registration flow with skill-based team matching",
            "Real-time hackathon timeline with countdown and milestone tracking",
            "Judge dashboard for submission review and scoring"
        ],
        techStack: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Vite"],
        link: "https://innovathon2.onrender.com",
        linkText: "View Live",
        links: [
            { label: "Live Site", url: "https://innovathon2.onrender.com" }
        ]
    },
    {
        title: "OIA International Hub",
        description: "Web platform for international academic collaboration featuring program highlights, partner universities, student mobility initiatives, and institutional outreach. Built with responsive multi-section content architecture for the Office of International Affairs at Amity University.",
        details: "A professional web platform developed for the Office of International Affairs at Amity University to showcase global academic partnerships and student mobility programs. The hub features comprehensive program listings, partner university profiles with geographic mapping, student testimonial carousels, and an integrated inquiry system. The responsive multi-section architecture ensures a seamless experience across devices for prospective international students and partner institutions worldwide.",
        image: "./OIA.jpg",
        tags: ["Education", "International", "Next.js"],
        features: [
            "Program highlights and partner university profiles with geographic mapping",
            "Student mobility initiative listings with eligibility and application details",
            "Institutional outreach section with downloadable resources and contacts",
            "Testimonial carousel featuring student experiences from partner universities",
            "Responsive design spanning desktop to mobile for global accessibility",
            "Integrated inquiry and contact form for prospective students"
        ],
        techStack: ["React", "Next.js", "TailwindCSS", "JavaScript", "CSS"],
        link: "https://global-connect-hub-two.vercel.app/",
        linkText: "View Live",
        links: [
            { label: "Live Site", url: "https://global-connect-hub-two.vercel.app/" }
        ]
    }
];

export const SKILLS = [
    {
        category: "Cybersecurity",
        items: ["Vulnerability Assessment", "Penetration Testing", "Threat Modelling", "OWASP Top 10", "CTF Practice", "Wireshark", "Burp Suite", "Nmap", "Metasploit"],
        icon: "shield"
    },
    {
        category: "Programming & Backend",
        items: ["Python", "C", "C++", "FastAPI", "SQLAlchemy", "Pandas", "NetworkX", "REST APIs", "WebSockets", "PostgreSQL", "SQLite", "MySQL"],
        icon: "code"
    },
    {
        category: "Frontend & Data",
        items: ["HTML", "CSS", "JavaScript", "React", "Streamlit", "D3.js", "Chart.js", "Leaflet", "Data Visualisation"],
        icon: "layout"
    },
    {
        category: "AI / ML",
        items: ["Ollama", "OpenAI API", "RAG", "TF-IDF", "Embeddings", "Keras", "XGBoost", "LoRA Fine-Tuning", "Local-First AI"],
        icon: "cloud"
    }
];

export const EXPERIENCE = [
    {
        title: "Cyber Security Summer Intern",
        company: "Gurugram Police Cyber Security Summer Internship (GPCSSI)",
        period: "Jun 2026",
        description: "Selected among 1,000+ students from 15,000+ national applicants for the 13th edition of this premier in-person cybersecurity programme. Completed practical training under Dr. Rakshit Tandon across cyber hygiene, AI scam prevention, OSINT, and digital investigation. Worked through investigation-oriented learning modules focused on real-world cybercrime awareness, evidence handling, and defensive-security thinking."
    },
    {
        title: "Student Intern",
        company: "Amity University Gurgaon",
        period: "Sept 2025 - Present",
        description: "Manage backend content workflows and structured institutional data across digital platforms, improving accuracy and accessibility. Support media operations through event coverage, photography, and standards-aligned content publishing."
    },
    {
        title: "Cyber Security Intern",
        company: "National Informatics Centre (MeitY)",
        period: "Jun 2025 - Jul 2025",
        description: "Performed hands-on vulnerability assessments and security reviews across systems and networks in a government cybersecurity environment. Applied threat detection, risk analysis, and mitigation concepts to practical defensive-security scenarios."
    },
    {
        title: "Cyber Security Intern",
        company: "Embrizon Technologies",
        period: "Dec 2024 - Feb 2025",
        description: "Completed intensive training in penetration testing, vulnerability assessment, network security, and ethical-hacking workflows. Used common assessment tools and frameworks to identify vulnerabilities and understand defensive controls."
    },
    {
        title: "Web Development Intern",
        company: "Prodigy InfoTech",
        period: "Sept 2024 - Oct 2024",
        description: "Built and refined frontend and backend web features using HTML, CSS, JavaScript, and integrated application workflows."
    }
];

export const EDUCATION = [
    {
        degree: "B.Tech. Computer Science Engineering",
        institution: "Amity School of Engineering & Technology, Amity University Haryana",
        period: "2023 - 2027",
        score: "8.46 CGPA",
        description: "Leadership: Mission Veerangana organising team; former Nihon Culture Club Coordinator; member of University Digital Club."
    }
];

export const ACHIEVEMENTS = [
    {
        title: "TryHackMe 100-Day Streak",
        description: "Achieved a 100-day streak on TryHackMe, attaining Rank 200,830 and Level [0x8][HACKER], demonstrating consistency in hands-on cybersecurity practice.",
        link: "https://tryhackme.com/p/sid1125"
    },
    {
        title: "IIT Bombay CTF",
        description: "Secured 13th position out of 80 teams in a Capture The Flag competition organised by IEEE Computer Society in collaboration with IIT Bombay Trust Lab.",
        link: "#"
    },
    {
        title: "SIH 2024 Participant",
        description: "Participated in Smart India Hackathon 2024, contributing to Problem Statement ID SIH1674.",
        link: "#"
    }
];

export const CERTIFICATIONS = [
    {
        title: "Fortinet Certified Fundamentals in Cybersecurity",
        issuer: "Fortinet",
        date: "Apr 2025",
        link: "https://www.credly.com/badges/a4f05231-ad41-427b-ab62-acc861c4df34/public_url"
    },
    {
        title: "Cybersecurity Fundamentals",
        issuer: "IBM SkillsBuild",
        date: "Apr 2025",
        link: "https://www.credly.com/badges/cec671d1-430a-400f-bf83-ca63fe1ea625/public_url"
    },
    {
        title: "Introduction to Cybersecurity",
        issuer: "Cisco Networking Academy",
        date: "Apr 2025",
        link: "https://www.credly.com/badges/65528b51-5b75-47ae-ac40-6848a6965332/public_url"
    },
    {
        title: "Google Cloud Computing Fundamentals and Generative AI Study Jam",
        issuer: "Google Cloud",
        date: "2025",
        link: "#"
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Nov 2024",
        link: "https://www.freecodecamp.org/certification/SiddharthS1125/responsive-web-design"
    },
    {
        title: "JavaScript Algorithms and Data Structures (Basics)",
        issuer: "freeCodeCamp",
        date: "2024",
        link: "#"
    }
];

export const LANGUAGES = [
    { language: "English", proficiency: "Native / Bilingual Proficiency" },
    { language: "Hindi", proficiency: "Native / Bilingual Proficiency" },
    { language: "Japanese", proficiency: "Elementary Proficiency" }
];

export const BLOG_POSTS = [
    {
        title: "The Journey of a B.Tech Student",
        excerpt: "Exploring the challenges and growth opportunities in the tech world through the lens of a B.Tech student. From classroom learning to real-world applications.",
        date: "Nov 26, 2024",
        readTime: "8 min read",
        tags: ["Education", "Tech Journey"],
        content: `
            <p>When I decided to pursue a B.Tech in Computer Science, I had a vision of where I wanted to be—a tech enthusiast eager to decode the mysteries of algorithms, software, and innovation. Little did I know, this journey would be far more than just academic—it would be a holistic development of skills, resilience, and perspective.</p>
            <h3>Starting with Curiosity</h3>
            <p>The first year of B.Tech felt like diving into an ocean of opportunities and challenges. Subjects like programming, discrete mathematics, and digital logic introduced me to the fundamentals. As exciting as it was, the real challenge lay in adapting to the fast-paced environment.</p>
            <h3>Learning Beyond the Classroom</h3>
            <p>One of the most exciting aspects of a B.Tech journey is the exposure to real-world applications. Internships, hackathons, and group projects bring a flavor of the industry right to the college campus. My participation in a web development internship not only improved my coding skills but also taught me the importance of collaboration and meeting deadlines.</p>
            <h3>The Road Ahead</h3>
            <p>As a student specializing in Blockchain and Cybersecurity, I know the journey is far from over. The upcoming semesters will bring more specialized subjects, exciting projects, and opportunities to explore areas like artificial intelligence, cloud computing, and cybersecurity.</p>
        `
    }
];

export const TERMINAL_COMMANDS = {
    help: "Available commands: \nhelp, \nabout, \nskills, \ncontact, \nprojects, \neducation, \ncertifications, \nlanguages, \nsocials, \nclear, \nwhoami, \nrecon",
    about: "Computer Science undergraduate focused on cybersecurity, digital forensics, and AI-enabled full-stack systems.",
    skills: "Cybersecurity: Vuln Assessment, Pentesting, Wireshark, Burp Suite, Nmap, Metasploit, OWASP Top 10\nProgramming & Backend: Python, C, C++, FastAPI, SQLAlchemy, Pandas, NetworkX, PostgreSQL\nFrontend & Data: HTML, CSS, JS, React, D3.js, Chart.js, Leaflet, Streamlit\nAI/ML: Ollama, RAG, TF-IDF, Embeddings, Keras, XGBoost, LoRA",
    contact: "Email: siddharthsinha1125@gmail.com\nPhone: +91 7903066361",
    projects: "1. Project ARGUS (Telecom Forensics)\n2. Project SENTINEL (AI Threat Intel)\n3. AgentRecon (AI Recon Pipeline)\n4. AI Research Agent (RAG System)\n5. F1 Insight Platform (Race Analytics)\n6. HITMEN (Content Moderation)\n7. Innovathon Platform (Event Platform)\n8. OIA International Hub",
    whoami: "root@sid-portfolio:~#",
    socials: "GitHub: github.com/sid1125\nLinkedIn: linkedin.com/in/ssinha1125\nTryHackMe: tryhackme.com/p/sid1125",
    education: "B.Tech CSE - Amity University Haryana (8.46 CGPA)\nLeadership: Mission Veerangana, Nihon Culture Club, University Digital Club",
    certifications: "1. Fortinet Certified Fundamentals in Cybersecurity\n2. Cybersecurity Fundamentals - IBM SkillsBuild\n3. Intro to Cybersecurity - Cisco NetAcad\n4. Google Cloud Fundamentals & Gen AI Study Jam\n5. Responsive Web Design - freeCodeCamp\n6. JavaScript Algorithms & Data Structures - freeCodeCamp",
    languages: "English (Native/Bilingual)\nHindi (Native/Bilingual)\nJapanese (Elementary)",
    recon: "Executing AgentRecon...\n[+] Scanning target...\n[+] AI Analysis complete.\n[+] Cross-referencing CVE database...\n[+] No critical vulnerabilities found (just kidding, check the VAPT report).",
};
