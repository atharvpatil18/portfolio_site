import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const portfolioData = {
    name: "Your Name",
    role: "Full Stack Developer",
    about: "I build accessible, pixel-perfect, performant, and engaging digital experiences.",
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com",
            icon: Linkedin,
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
            icon: Twitter,
        },
        {
            name: "Email",
            url: "mailto:hello@example.com",
            icon: Mail,
        },
    ],
    experience: [
        {
            id: 1,
            company: "Tech Corp",
            role: "Senior Developer",
            period: "2023 - Present",
            description: "Leading the frontend team and building scalable applications.",
        },
        {
            id: 2,
            company: "Startup Inc",
            role: "Full Stack Developer",
            period: "2021 - 2023",
            description: "Developed and maintained multiple client projects.",
        },
    ],
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A modern e-commerce solution built with Next.js and Stripe.",
            tech: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task manager with real-time updates.",
            tech: ["React", "Firebase", "Tailwind"],
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Minimalist portfolio to showcase work and skills.",
            tech: ["React", "Framer Motion", "Tailwind"],
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        },
    ],
    skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Framer Motion",
        "Git",
    ],
};
