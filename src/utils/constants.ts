import netflixCloneIMG from "../assets/netflixClone.png"
import cheatsheetIMG from "../assets/cheatSheet.png"
import planenIMG from "../assets/planenTaskmanager.png"
import codeSnippetIMG from "../assets/snippetManager.png"
import animeTrackerIMG from "../assets/animeTracker.png"
import testImg from "../assets/stacked-waves-haikei (1).png"

export const links = [
    {
        link: "https://www.linkedin.com/in/kani02/",
        label: "LinkedIn"
    },
    {
        link: "https://github.com/2002kani",
        label: "Github"
    },
];

export const projects = [
    {
        new: true,
        section: "Frontend & Backend",
        label: "Planen - AI Task Manager",
        link: "https://github.com/2002kani/planen",
        badges: [
            "React", "TypeScript", "Tailwind", "Appwrite", "Clerk", "Gemini API", "Nodejs", "Shadcn/ui"
        ],
        img_src: planenIMG
    },
    {
        new: true,
        section: "Frontend & Backend",
        label: "Projectify",
        link: "https://github.com/2002kani/projectify",
        badges: [
            "React", "TypeScript", "Nodejs", "MongoDB", "ExpressJS", "CSS"
        ],
        img_src: testImg
    },
    {
        new: false,
        section: "Frontend & Backend",
        label: "Anime watchlist tracker",
        link: "https://github.com/2002kani/anime-watchlist-tracker",
        badges: [
            "React", "TypeScript", "Nodejs", "MongoDB", "ExpressJS", "useSWR"
        ],
        img_src: animeTrackerIMG
    },
    {
        new: false,
        section: "Frontend",
        label: "Coding Cheatsheet",
        link: "https://github.com/2002kani/coding-cheatsheet",
        badges: [
            "JavaScript", "React", "CSS", "Electron", "NodeJS", 
        ],
        img_src: cheatsheetIMG
    },
    {
        new: false,
        section: "Frontend & Backend",
        label: "Netflix Clone",
        link: "https://github.com/2002kani/Netflix-Clone",
        badges: [
            "React", "JavaScript", "Firebase", "ExpressJS", "CSS"
        ],
        img_src: netflixCloneIMG
    },
    {
        new: false,
        section: "Frontend",
        label: "Code snippet Manager",
        link: "https://github.com/2002kani/CodeSnippetManager",
        badges: [
            "JavaScript", "HTML", "CSS",
        ],
        img_src: codeSnippetIMG
    },
];