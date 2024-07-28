import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Info = {
    name: "Arjun Jain",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Open Source Contributor"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "College Society Website",
        desc: "College Techno-managerial society’s official website which is completely developed and deployed under my supervision and control.",
        image: "Ekart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://code-mars.github.io/Ekart/",
        github: "https://github.com/arjun28jain/HorizonWebsite"
    },
    {
        title: "HEALTH-BASED AI KIOSK INTERFACE",
        desc: "AI-Based health KIOSK to help people in remote areas with medical assistance. Project shortlisted in Smart India Hackathon 2023",
        image: "Facebook.png",
        live: false,
        technologies: ["React", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://github.com/Code-Mars/Facebook-Clone",
        github: "https://github.com/arjun28jain/Health-beats"
    },
    {
        title: "DOCS-APP",
        desc: "Notes Making Application using React JS and Framer Motion, to make an interactive and dynamic interface for keeping notes, writing blogs",
        image: "Spotify.png",
        live: false,
        technologies: ["React", "Tailwind", "Framer Motion", "MongoDB", "Firebase"],
        link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/arjun28jain/docsapp"
    },
   
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Atlas"]
    }
]
const socialLinks = [
    { link: "https://github.com/arjun28jain", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/arjun-jain-8821a0212/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/arjun28jain/", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@ArjunJain-gx7wt", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/arjun28jain/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Frontend Web Developer",
        company: "Cognifyz Technologies",
        date: "May-June 2024",
        desc: "I led frontend web development with Javascript, React, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["JavaScript", "React JS", "Next JS", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "Techno-Managerial Society AKGEC",
        company: "HORIZON",
        date: "April 2022 - present",
        skills: ["Oratory", "Technical Content Writing", "Team Management"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "angular",
    "docker",
    "git",
    "jira",
    "github",
    "express",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };