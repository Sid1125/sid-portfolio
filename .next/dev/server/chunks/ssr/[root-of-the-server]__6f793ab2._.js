module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/constants/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACHIEVEMENTS",
    ()=>ACHIEVEMENTS,
    "BLOG_POSTS",
    ()=>BLOG_POSTS,
    "CERTIFICATIONS",
    ()=>CERTIFICATIONS,
    "EDUCATION",
    ()=>EDUCATION,
    "EXPERIENCE",
    ()=>EXPERIENCE,
    "HERO",
    ()=>HERO,
    "LANGUAGES",
    ()=>LANGUAGES,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "PROJECTS",
    ()=>PROJECTS,
    "SKILLS",
    ()=>SKILLS,
    "SOCIALS",
    ()=>SOCIALS,
    "TERMINAL_COMMANDS",
    ()=>TERMINAL_COMMANDS
]);
const NAV_LINKS = [
    {
        name: "Home",
        href: "#home"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Experience",
        href: "#experience"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Blog",
        href: "#blog"
    },
    {
        name: "Terminal",
        href: "#terminal"
    },
    {
        name: "Contact",
        href: "#contact"
    }
];
const SOCIALS = {
    github: "https://github.com/sid1125",
    linkedin: "https://www.linkedin.com/in/ssinha1125/",
    tryhackme: "https://tryhackme.com/p/sid1125",
    email: "mailto:siddharthsinha1125@gmail.com",
    cv: "/SiddharthSinha_CV.pdf"
};
const HERO = {
    badge: "Available for New Projects",
    headline: "Building Intentional Digital Experiences",
    tagline: "Cybersecurity & Full-Stack Developer focused on secure, performant, and intelligent systems."
};
const PROJECTS = [
    {
        title: "Project SENTINEL (WIP)",
        description: "AI-powered network threat intelligence and monitoring platform with real-time network discovery, ARP scanning, Nmap-based enumeration, and local CVE intelligence engine. Features a natural language control layer using local LLMs and a modular SOC-style architecture.",
        image: "",
        tags: [
            "FastAPI",
            "React",
            "WebSockets",
            "AI",
            "Cybersecurity"
        ],
        link: "https://github.com/Sid1125/Project-SENTINEL",
        linkText: "View Code"
    },
    {
        title: "AgentRecon",
        description: "Modular AI-powered reconnaissance and vulnerability analysis pipeline integrating Nmap, Masscan, Nikto, Gobuster, and SSLyze. Features custom CVE enrichment from NVD and AlienVault OTX, with AI-driven false positive filtering.",
        image: "/sid-portfolio/agent-recon.png",
        tags: [
            "Python",
            "AI",
            "Nmap",
            "Automation",
            "Security"
        ],
        link: "https://github.com/sid1125/AgentRecon",
        linkText: "View Code"
    },
    {
        title: "F1 Insight Platform",
        description: "Full-stack analytics platform for Formula 1 telemetry and race data using FastAPI, Streamlit, and SQLAlchemy. Features XGBoost predictive models for race outcomes, strategy simulation for pit-stop timing and tyre management, and an AI-powered natural language interface.",
        image: "",
        tags: [
            "FastAPI",
            "Streamlit",
            "XGBoost",
            "AI",
            "Data Science"
        ],
        link: "https://github.com/Sid1125/F1-Insight",
        linkText: "View Code"
    },
    {
        title: "HITMEN",
        description: "Community-driven moderation and harmful content tracking platform leveraging crowdsourced inputs and structured reporting. Integrates Discord API for dynamic entity fetching, automated status verification, and real-time state transitions with a distinctive monochrome UI.",
        image: "",
        tags: [
            "Web",
            "Discord API",
            "TailwindCSS",
            "Moderation"
        ],
        link: "https://github.com/sid1125/hitmen_epi_prevention",
        linkText: "View Code"
    },
    {
        title: "AI Research Agent",
        description: "Full Retrieval-Augmented Generation (RAG) pipeline for private PDF question answering. Features custom Siamese BiLSTM embedding model in Keras, hybrid dense + TF-IDF retrieval, and grounded answer generation with extractive fallback for low-resource settings.",
        image: "",
        tags: [
            "Python",
            "NLP",
            "LLM",
            "RAG",
            "Keras"
        ],
        link: "https://github.com/Sid1125/Primitive-Research-RAG",
        linkText: "View Code"
    },
    {
        title: "Innovathon Platform",
        description: "Full-stack hackathon management and event platform featuring structured sections for overview, sponsors, competition tracks, timelines, and FAQs. Designed with a visually rich, futuristic UI and component-driven layout architecture.",
        image: "",
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "UI/UX"
        ],
        link: "https://innovathon2.onrender.com",
        linkText: "View Live"
    },
    {
        title: "OIA International Hub",
        description: "Comprehensive web platform for international academic collaboration featuring program highlights, partner universities, student mobility initiatives, and institutional outreach. Built with responsive multi-section content architecture and scalable layout systems.",
        image: "",
        tags: [
            "React",
            "Next.js",
            "UI/UX",
            "Responsive"
        ],
        link: "https://global-connect-hub-two.vercel.app/",
        linkText: "View Live"
    }
];
const SKILLS = [
    {
        category: "Cybersecurity",
        items: [
            "Ethical Hacking",
            "Network Security",
            "Vulnerability Assessment",
            "Penetration Testing",
            "Threat Detection",
            "OWASP Top 10",
            "Wireshark",
            "Burp Suite",
            "Nmap",
            "Metasploit"
        ],
        icon: "shield"
    },
    {
        category: "Languages",
        items: [
            "C",
            "C++",
            "Python",
            "JavaScript",
            "SQL",
            "Bash"
        ],
        icon: "code"
    },
    {
        category: "Web & Backend",
        items: [
            "HTML5",
            "CSS3",
            "React.js",
            "Next.js",
            "FastAPI",
            "Node.js",
            "Express",
            "MongoDB",
            "MySQL"
        ],
        icon: "layout"
    },
    {
        category: "Cloud & AI",
        items: [
            "Google Cloud",
            "Generative AI",
            "Linux",
            "Docker",
            "Ollama",
            "RAG Pipelines"
        ],
        icon: "cloud"
    }
];
const EXPERIENCE = [
    {
        title: "Student Intern",
        company: "Amity University Gurgaon",
        period: "Sept 2025 - Present",
        description: "Managing backend data workflows and structured content organisation across institutional platforms. Curating digital content pipelines and contributing to media operations. Providing on-ground media coverage through photography for academic and extracurricular events."
    },
    {
        title: "Cyber Security Intern",
        company: "National Informatics Centre (MeitY)",
        period: "Jun 2025 - Jul 2025",
        description: "Conducted hands-on vulnerability assessments using industry-standard tools, identifying security gaps across systems and networks. Developed foundational expertise in threat detection, risk analysis, and mitigation strategies within a government cybersecurity framework."
    },
    {
        title: "Cyber Security Intern",
        company: "Embrizon Technologies",
        period: "Dec 2024 - Feb 2025",
        description: "Completed intensive training in penetration testing, vulnerability assessment, and network security. Utilised industry tools and frameworks to identify and exploit system vulnerabilities in simulated environments, bridging theoretical knowledge with applied security practices."
    },
    {
        title: "Web Development Intern",
        company: "Prodigy InfoTech",
        period: "Sept 2024 - Oct 2024",
        description: "Executed full-stack development tasks across frontend and backend layers using HTML, CSS, JavaScript, and integrated systems. Debugged, optimised, and enhanced web applications adhering to modern development standards and performance best practices."
    }
];
const EDUCATION = [
    {
        degree: "B.Tech Computer Science Engineering",
        institution: "Amity School of Engineering & Technology, Amity University Haryana",
        period: "2023 - 2027",
        score: "8.46 CGPA",
        description: "Clubs: University Digital Club, Nihon Culture Club. Leadership: Organizing Team Member of Mission Veerangana Team for Women's Self-Defence, Former Club Coordinator of Nihon Culture Club."
    }
];
const ACHIEVEMENTS = [
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
const CERTIFICATIONS = [
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
const LANGUAGES = [
    {
        language: "English",
        proficiency: "Native / Bilingual Proficiency"
    },
    {
        language: "Hindi",
        proficiency: "Native / Bilingual Proficiency"
    },
    {
        language: "Japanese",
        proficiency: "Elementary Proficiency"
    }
];
const BLOG_POSTS = [
    {
        title: "The Journey of a B.Tech Student",
        excerpt: "Exploring the challenges and growth opportunities in the tech world through the lens of a B.Tech student. From classroom learning to real-world applications.",
        date: "Nov 26, 2024",
        readTime: "8 min read",
        tags: [
            "Education",
            "Tech Journey"
        ],
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
const TERMINAL_COMMANDS = {
    help: "Available commands: \nhelp, \nabout, \nskills, \ncontact, \nprojects, \neducation, \ncertifications, \nlanguages, \nsocials, \nclear, \nwhoami, \nrecon",
    about: "I'm Siddharth Sinha, a B.Tech CSE student at Amity University Haryana. Passionate about Cybersecurity, Ethical Hacking, and building secure, intelligent systems.",
    skills: "Cybersecurity: Ethical Hacking, Pentesting, Burp Suite, Nmap, Wireshark, Metasploit, OWASP Top 10\nLanguages: C, C++, Python, JavaScript, SQL, Bash\nWeb: React, Next.js, FastAPI, Node.js, Express, MongoDB, MySQL\nCloud & AI: Google Cloud, Docker, Ollama, RAG Pipelines",
    contact: "Email: siddharthsinha1125@gmail.com\nPhone: +91 7903066361",
    projects: "1. Project SENTINEL (AI Threat Intelligence)\n2. AgentRecon (AI Recon Pipeline)\n3. F1 Insight Platform (Race Analytics)\n4. HITMEN (Content Moderation)\n5. AI Research Agent (RAG System)\n6. Innovathon Platform (Event Platform)\n7. OIA International Hub",
    whoami: "root@sid-portfolio:~#",
    socials: "GitHub: github.com/sid1125\nLinkedIn: linkedin.com/in/ssinha1125\nTryHackMe: tryhackme.com/p/sid1125",
    education: "B.Tech CSE - Amity University Haryana (8.46 CGPA)\nClubs: University Digital Club, Nihon Culture Club",
    certifications: "1. Fortinet Certified Fundamentals in Cybersecurity\n2. Cybersecurity Fundamentals - IBM SkillsBuild\n3. Intro to Cybersecurity - Cisco NetAcad\n4. Google Cloud Fundamentals & Gen AI Study Jam\n5. Responsive Web Design - freeCodeCamp\n6. JavaScript Algorithms & Data Structures - freeCodeCamp",
    languages: "English (Native/Bilingual)\nHindi (Native/Bilingual)\nJapanese (Elementary)",
    recon: "Executing AgentRecon...\n[+] Scanning target...\n[+] AI Analysis complete.\n[+] Cross-referencing CVE database...\n[+] No critical vulnerabilities found (just kidding, check the VAPT report)."
};
}),
"[project]/src/components/ui/navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const navItems = [
    {
        name: "Home",
        href: "/#home"
    },
    {
        name: "Projects",
        href: "/#projects"
    },
    {
        name: "Experience",
        href: "/#experience"
    },
    {
        name: "Skills",
        href: "/#skills"
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "Terminal",
        href: "/terminal"
    },
    {
        name: "Contact",
        href: "/#contact"
    }
];
const Navigation = ()=>{
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 20);
            const sections = navItems.filter((item)=>item.href.startsWith("/#")).map((item)=>item.href.slice(2));
            for (const id of sections.reverse()){
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(id);
                    return;
                }
            }
            setActiveSection("");
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        mobileOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/[0.04] py-3" : "bg-transparent border-b border-transparent py-5"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-xl font-heading font-bold tracking-tighter",
                        onClick: ()=>setMobileOpen(false),
                        children: [
                            "SID",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/navigation.tsx",
                                lineNumber: 64,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/navigation.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-1",
                        children: [
                            navItems.map((item)=>{
                                const isActive = item.href.startsWith("/#") && activeSection === item.href.slice(2);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300", isActive ? "text-white" : "text-zinc-400 hover:text-white hover:bg-white/[0.03]"),
                                    children: [
                                        item.name,
                                        isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "nav-active",
                                            className: "absolute inset-0 bg-white/[0.05] rounded-lg -z-10",
                                            transition: {
                                                type: "spring",
                                                damping: 20,
                                                stiffness: 300
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/navigation.tsx",
                                            lineNumber: 83,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/src/components/ui/navigation.tsx",
                                    lineNumber: 71,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0));
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-5 bg-white/10 mx-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/navigation.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].cv,
                                download: true,
                                className: "flex items-center gap-2 bg-white/5 border border-white/[0.06] hover:bg-white/10 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/navigation.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "CV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/navigation.tsx",
                                lineNumber: 95,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#contact",
                                className: "bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity",
                                children: "Get in touch"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/navigation.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/navigation.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        className: "lg:hidden p-2 text-zinc-400 hover:text-white transition-colors",
                        "aria-label": "Toggle menu",
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/navigation.tsx",
                            lineNumber: 117,
                            columnNumber: 35
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/navigation.tsx",
                            lineNumber: 117,
                            columnNumber: 53
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/navigation.tsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/navigation.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/[0.04] lg:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-6 py-6 flex flex-col gap-1",
                        children: [
                            navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: ()=>setMobileOpen(false),
                                    className: "px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/[0.03] rounded-lg transition-all",
                                    children: item.name
                                }, item.name, false, {
                                    fileName: "[project]/src/components/ui/navigation.tsx",
                                    lineNumber: 132,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px bg-white/[0.04] my-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/navigation.tsx",
                                lineNumber: 141,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOCIALS"].cv,
                                download: true,
                                onClick: ()=>setMobileOpen(false),
                                className: "flex items-center gap-2 px-4 py-3 text-sm text-zinc-400 hover:text-white transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/navigation.tsx",
                                        lineNumber: 148,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Download CV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/navigation.tsx",
                                lineNumber: 142,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#contact",
                                onClick: ()=>setMobileOpen(false),
                                className: "mt-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold text-center hover:opacity-90 transition-opacity",
                                children: "Get in touch"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/navigation.tsx",
                                lineNumber: 151,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/navigation.tsx",
                        lineNumber: 130,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/navigation.tsx",
                    lineNumber: 123,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/navigation.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/navigation.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/sections/Terminal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Terminal",
    ()=>Terminal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-ssr] (ecmascript) <export default as Terminal>");
"use client";
;
;
;
;
const Terminal = ({ className })=>{
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        "Welcome to the interactive terminal. Type 'help' for a list of commands."
    ]);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleCommand = (e)=>{
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        // Add command to output
        const newOutput = [
            ...output,
            `root@sid-portfolio:~# ${input}`
        ];
        if (cmd === "clear") {
            setOutput([]);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TERMINAL_COMMANDS"][cmd]) {
            newOutput.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TERMINAL_COMMANDS"][cmd]);
            setOutput(newOutput);
        } else if (cmd !== "") {
            newOutput.push(`Command not found: ${cmd}. Type 'help' for available commands.`);
            setOutput(newOutput);
        } else {
            setOutput(newOutput);
        }
        setInput("");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        output
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "terminal",
        className: `bg-black relative flex flex-col ${className || 'py-20'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 flex-1 flex flex-col min-h-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto w-full flex-1 flex flex-col min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 mb-6 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px flex-1 bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-heading font-bold text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "<"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Terminal.tsx",
                                        lineNumber: 46,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " Terminal ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "/>"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Terminal.tsx",
                                        lineNumber: 46,
                                        columnNumber: 81
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-px flex-1 bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Terminal.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden shadow-2xl font-mono text-sm md:text-base flex-1 flex flex-col min-h-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-zinc-900/80 p-3 flex items-center justify-between border-b border-white/10 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-red-500/80"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                                lineNumber: 55,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-yellow-500/80"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                                lineNumber: 56,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-green-500/80"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                                lineNumber: 57,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Terminal.tsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-zinc-500 text-xs flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                                lineNumber: 60,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "sid@portfolio: ~"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Terminal.tsx",
                                        lineNumber: 59,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Terminal.tsx",
                                        lineNumber: 63,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 overflow-y-auto scrollbar-hide text-green-500/90 flex-1 min-h-0",
                                onClick: ()=>inputRef.current?.focus(),
                                children: [
                                    output.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2 whitespace-pre-wrap",
                                            children: line
                                        }, index, false, {
                                            fileName: "[project]/src/components/sections/Terminal.tsx",
                                            lineNumber: 69,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleCommand,
                                        className: "flex items-center gap-2 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary",
                                                children: "root@sid-portfolio:~#"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                                lineNumber: 73,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: inputRef,
                                                type: "text",
                                                value: input,
                                                onChange: (e)=>setInput(e.target.value),
                                                className: "bg-transparent border-none outline-none flex-1 text-white/90",
                                                autoFocus: true,
                                                spellCheck: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                                lineNumber: 74,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Terminal.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: bottomRef
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Terminal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Terminal.tsx",
                                lineNumber: 67,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Terminal.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Terminal.tsx",
                lineNumber: 42,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Terminal.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Terminal.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6f793ab2._.js.map