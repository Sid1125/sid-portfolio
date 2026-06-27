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

export const PROJECTS = [
    {
        title: "AgentRecon",
        description: "Modular AI-powered reconnaissance pipeline automating tools like Nmap, Nikto, and Gobuster. Features AI-driven false positive filtering and CVE enrichment.",
        image: "/sid-portfolio/agent-recon.png",
        tags: ["Python", "AI", "Nmap", "Automation"],
        link: "https://github.com/sid1125/AgentRecon",
        linkText: "View Code"
    },
    {
        title: "Dr FUSED",
        description: "Modular Discord bot with moderation, logging, and interactive commands. Implements role-based access control and secure API practices.",
        image: "/sid-portfolio/Screenshot_18.png",
        tags: ["Node.js", "MongoDB", "Discord.js", "Security"],
        link: "https://github.com/sid1125/discord-bot",
        linkText: "View Code"
    },
    {
        title: "Embrizon VAPT",
        description: "Comprehensive vulnerability assessment and security auditing. Identified web vulnerabilities and prepared structured VAPT reports.",
        image: "/sid-portfolio/Screenshot_30.png",
        tags: ["Burp Suite", "Nmap", "Wireshark", "Auditing"],
        link: "/Embrizon_Project-Vulnerability_Assessment_Report-Siddharth Sinha.pdf",
        linkText: "View Report"
    },
    {
        title: "LMS",
        description: "Python & MySQL-based Library Management System. Handles book tracking, issuing, and returns with a focus on database efficiency.",
        image: "/sid-portfolio/Screenshot_24.png",
        tags: ["Python", "MySQL", "Database Design"],
        link: "https://github.com/sid1125/Library-Management-System",
        linkText: "View Code"
    }
];

export const SKILLS = [
    {
        category: "Cybersecurity",
        items: ["Ethical Hacking", "Network Security", "Vulnerability Assessment", "Burp Suite", "Wireshark", "Nmap", "Metasploit"],
        icon: "shield"
    },
    {
        category: "Languages",
        items: ["C", "C++", "Python", "JavaScript", "SQL", "Bash"],
        icon: "code"
    },
    {
        category: "Web & Backend",
        items: ["HTML5", "CSS3", "React.js", "Node.js", "Express", "MongoDB"],
        icon: "layout"
    },
    {
        category: "Cloud & AI",
        items: ["Google Cloud", "Generative AI", "Linux Fundamentals", "Docker"],
        icon: "cloud"
    }
];

export const EXPERIENCE = [
    {
        title: "Cyber Security Intern",
        company: "National Informatics Centre (MeitY)",
        period: "Jun 2025 - Jul 2025",
        description: "Conducted vulnerability assessments and security auditing of government applications. Analyzed risk impact and prepared VAPT reports aligned with organizational standards."
    },
    {
        title: "Cyber Security Trainee",
        company: "Embrizon Technologies",
        period: "Dec 2024 - Feb 2025",
        description: "Hands-on experience in penetration testing, network security, and ethical hacking using industry-standard tools."
    },
    {
        title: "Web Development Intern",
        company: "Prodigy Infotech",
        period: "Sept 2024 - Oct 2024",
        description: "Full-stack development tasks including backend integration, debugging, optimization, and implementing best practices."
    }
];

export const EDUCATION = [
    {
        degree: "B.Tech CSE (Blockchain Tech)",
        institution: "Amity University Gurugram",
        period: "2023 - 2027",
        score: "8.33 CGPA",
        description: "Focus on Cybersecurity, Ethical Hacking, and Network Security."
    },
    {
        degree: "Senior Secondary (12th)",
        institution: "Science Stream",
        period: "2023",
        score: "81%"
    },
    {
        degree: "Secondary (10th)",
        institution: "School",
        period: "2021",
        score: "94%"
    }
];

export const ACHIEVEMENTS = [
    {
        title: "TryHackMe Rank",
        description: "Level 8 [HACKER] with a 100+ Day fast-paced learning streak.",
        link: "https://tryhackme.com/p/sid1125"
    },
    {
        title: "IIT Bombay CTF",
        description: "Secured 13th place out of 80 teams in the CTF organized by IEEE-CS & IIT Bombay Trust Lab.",
        link: "#"
    },
    {
        title: "SIH 2024 Participant",
        description: "Participated in Smart India Hackathon 2024 (Problem ID: SIH1674).",
        link: "#"
    }
];

export const CERTIFICATIONS = [
    {
        title: "Fortinet Certified Fundamentals",
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
        issuer: "Cisco NetAcad",
        date: "Apr 2025",
        link: "https://www.credly.com/badges/65528b51-5b75-47ae-ac40-6848a6965332/public_url"
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "Nov 2024",
        link: "https://www.freecodecamp.org/certification/SiddharthS1125/responsive-web-design"
    }
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
    help: "Available commands: \nhelp, \nabout, \nskills, \ncontact, \nprojects, \neducation, \ncertifications, \nsocials, \nclear, \nwhoami, \nrecon",
    about: "I'm Siddharth Sinha, a 2nd Year B.Tech CSE (Blockchain) student at Amity University. Passionate about Cybersecurity, Ethical Hacking, and building secure systems.",
    skills: "Cybersecurity: Burp Suite, Nmap, Wireshark, Metasploit\nLanguages: C, C++, Python, JavaScript\nWeb: React, Node.js, Express",
    contact: "Email: siddharthsinha1125@gmail.com\nPhone: +91 7903066361",
    projects: "1. AgentRecon (AI Recon Pipeline)\n2. Dr FUSED (Discord Bot)\n3. Embrizon VAPT (Security Audit)",
    whoami: "root@sid-portfolio:~#",
    socials: "GitHub: github.com/sid1125\nLinkedIn: linkedin.com/in/ssinha1125\nTryHackMe: tryhackme.com/p/sid1125",
    education: "B.Tech CSE (Blockchain Tech) - Amity University (8.33 CGPA)",
    recon: "Executing AgentRecon...\n[+] Scanning target...\n[+] AI Analysis complete.\n[+] No critical vulnerabilities found (just kidding, check the VAPT report).",
};
