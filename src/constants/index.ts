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
        description: "Full-stack telecom forensics platform for CDR/IPDR investigation with FastAPI, SQLAlchemy, Pandas, NetworkX, D3.js, and Leaflet. Features network graphs, tower movement maps, timelines, cross-subject correlation, and court-ready dossier export. Includes spatiotemporal inference modules for risk scoring, impossible travel detection, and offline-first AI insights via Ollama/LoRA.",
        image: "/ARGUS.jpg",
        tags: ["FastAPI", "Python", "NetworkX", "D3.js", "Forensics"],
        link: "https://github.com/sid1125",
        linkText: "View Code"
    },
    {
        title: "Project SENTINEL (WIP)",
        description: "AI-powered network threat intelligence and monitoring platform with real-time network discovery, ARP scanning, Nmap-based enumeration, and local CVE intelligence engine. Features a natural language control layer using local LLMs and a modular SOC-style architecture designed for offline-first deployment.",
        image: "",
        tags: ["FastAPI", "React", "WebSockets", "AI", "Cybersecurity"],
        link: "https://github.com/Sid1125/Project-SENTINEL",
        linkText: "View Code"
    },
    {
        title: "AgentRecon",
        description: "Automated reconnaissance and vulnerability analysis pipeline integrating Nmap, Masscan, Nikto, Gobuster, and SSLyze. Features custom CVE enrichment from NVD and AlienVault OTX, with AI-driven false positive filtering for improved signal accuracy.",
        image: "/agent-recon.png",
        tags: ["Python", "AI", "Nmap", "Automation", "Security"],
        link: "https://github.com/sid1125/AgentRecon",
        linkText: "View Code"
    },
    {
        title: "AI Research Agent",
        description: "Retrieval-Augmented Generation pipeline for private PDF question answering. Features a custom Siamese BiLSTM embedding model in Keras, hybrid dense + TF-IDF retrieval, and grounded answer generation with extractive fallback for low-resource settings.",
        image: "",
        tags: ["Python", "NLP", "LLM", "RAG", "Keras"],
        link: "https://github.com/Sid1125/Primitive-Research-RAG",
        linkText: "View Code"
    },
    {
        title: "F1 Insight Platform",
        description: "Analytics platform for Formula 1 telemetry and race data using FastAPI, Streamlit, and SQLAlchemy with XGBoost predictive models for race outcomes. Includes strategy simulation for pit-stop timing and tyre management, plus an AI-powered natural language interface.",
        image: "",
        tags: ["FastAPI", "Streamlit", "XGBoost", "AI", "Data Science"],
        link: "https://github.com/Sid1125/F1-Insight",
        linkText: "View Code"
    },
    {
        title: "HITMEN",
        description: "Community-driven moderation and harmful content tracking platform leveraging crowdsourced inputs and structured reporting. Integrates Discord API for dynamic entity fetching with automated status verification and real-time state transitions.",
        image: "/Hitmen.png.jpg",
        tags: ["Web", "Discord API", "TailwindCSS", "Moderation"],
        link: "https://sid1125.github.io/hitmen_epi_prevention/",
        linkText: "View Live"
    },
    {
        title: "Innovathon Platform",
        description: "Full-stack hackathon management and event platform with structured sections for overview, sponsors, competition tracks, timelines, and FAQs. Designed with a visually rich, futuristic UI and component-driven layout architecture.",
        image: "/Innovathon.jpg",
        tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
        link: "https://innovathon2.onrender.com",
        linkText: "View Live"
    },
    {
        title: "OIA International Hub",
        description: "Web platform for international academic collaboration featuring program highlights, partner universities, student mobility initiatives, and institutional outreach. Built with responsive multi-section content architecture for the Office of International Affairs at Amity University.",
        image: "/OIA.jpg",
        tags: ["React", "Next.js", "UI/UX", "Responsive"],
        link: "https://global-connect-hub-two.vercel.app/",
        linkText: "View Live"
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
