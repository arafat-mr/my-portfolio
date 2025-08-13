import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNpm } from "react-icons/si";

const glowStyles = {
  html: `
    text-[#E34F26] 
    drop-shadow-[0_0_20px_rgba(227,79,38,1)] 
    filter drop-shadow-[0_0_30px_rgba(227,79,38,0.9)] 
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(227,79,38,1)]
  `,
  css: `
    text-[#1572B6] 
    drop-shadow-[0_0_20px_rgba(21,114,182,1)]
    filter drop-shadow-[0_0_30px_rgba(21,114,182,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(21,114,182,1)]
  `,
  react: `
    text-[#61DAFB]
    drop-shadow-[0_0_20px_rgba(97,218,251,1)]
    filter drop-shadow-[0_0_30px_rgba(97,218,251,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(97,218,251,1)]
  `,
  js: `
    text-[#F7DF1E] 
    drop-shadow-[0_0_20px_rgba(247,223,30,1)]
    filter drop-shadow-[0_0_30px_rgba(247,223,30,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(247,223,30,1)]
  `,
  tailwind: `
    text-[#06B6D4] 
    drop-shadow-[0_0_20px_rgba(6,182,212,1)]
    filter drop-shadow-[0_0_30px_rgba(6,182,212,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(6,182,212,1)]
  `,
  node: `
    text-[#339933] 
    drop-shadow-[0_0_20px_rgba(51,153,51,1)]
    filter drop-shadow-[0_0_30px_rgba(51,153,51,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(51,153,51,1)]
  `,
  express: `
    text-[#000000] 
    drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]
    filter drop-shadow-[0_0_30px_rgba(0,0,0,0.7)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(0,0,0,1)]
  `,
  mongo: `
    text-[#22C55E] 
    drop-shadow-[0_0_20px_rgba(34,197,94,1)]
    filter drop-shadow-[0_0_30px_rgba(34,197,94,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(34,197,94,1)]
  `,
  git: `
    text-[#F05032] 
    drop-shadow-[0_0_20px_rgba(240,80,50,1)]
    filter drop-shadow-[0_0_30px_rgba(240,80,50,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(240,80,50,1)]
  `,
  github: `
    text-[#181717] 
    drop-shadow-[0_0_20px_rgba(24,23,23,0.9)]
    filter drop-shadow-[0_0_30px_rgba(24,23,23,0.7)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(24,23,23,1)]
  `,
  code: `
    text-[#6E40C9]
    drop-shadow-[0_0_20px_rgba(110,64,201,1)]
    filter drop-shadow-[0_0_30px_rgba(110,64,201,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(110,64,201,1)]
  `,
  npm: `
    text-[#CB3837] 
    drop-shadow-[0_0_20px_rgba(203,56,55,1)]
    filter drop-shadow-[0_0_30px_rgba(203,56,55,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(203,56,55,1)]
  `,
};

const skills = {
  frontend: [
    { name: "HTML5", icon: FaHtml5, glowKey: "html" },
    { name: "CSS3", icon: FaCss3Alt, glowKey: "css" },
    { name: "React", icon: FaReact, glowKey: "react" },
    { name: "JavaScript", icon: FaJsSquare, glowKey: "js" },
    { name: "Tailwind CSS", icon: SiTailwindcss, glowKey: "tailwind" },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, glowKey: "node" },
    { name: "Express", icon: SiExpress, glowKey: "express" },
    { name: "MongoDB", icon: SiMongodb, glowKey: "mongo" },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt, glowKey: "git" },
    { name: "GitHub", icon: FaGithub, glowKey: "github" },
    { name: "Code Editor", icon: FaCode, glowKey: "code" },
    { name: "NPM", icon: SiNpm, glowKey: "npm" },
  ],
};

const SkillIcon = ({ name, Icon, glowKey }) => {
  const glowClass = glowStyles[glowKey] || "";
  return (
    <div
      title={name}
      className={`${glowClass} flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-300 hover:scale-110 min-w-[70px]`}
    >
      <div className="text-5xl mb-2">
        <Icon />
      </div>
      <span
        className="
          text-gray-100 font-semibold text-base whitespace-nowrap
          text-center
        "
      >
        {name}
      </span>
    </div>
  );
};

const sectionBg = `bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900

`;
const sectionBorder = `border-4 border-transparent rounded-2xl 
  bg-origin-border
  bg-clip-padding
  relative
  shadow-lg
  before:absolute before:-inset-1 before:rounded-2xl before:bg-gradient-to-r before:from-pink-500 before:via-purple-600 before:to-indigo-500 before:z-[-1]
`;

export default function SkillsSection() {
  return (
    <section className="max-w-10/12 relative z-10 mx-auto px-4 py-8 space-y-10 select-none overflow-x-hidden">
      <h2
        className="
          text-3xl md:text-4xl font-extrabold text-center
          bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
          bg-clip-text text-transparent select-none mb-8
        "
      >
        My Skills
      </h2>

      {/* Frontend Skills */}
      <div className={`${sectionBg} ${sectionBorder} p-8`}>
        <h3
          className="
            text-2xl md:text-3xl font-bold text-center
            bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300
            bg-clip-text text-transparent select-none mb-6
          "
        >
          Frontend
        </h3>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {skills.frontend.map(({ name, icon, glowKey }) => (
            <SkillIcon key={name} name={name} Icon={icon} glowKey={glowKey} />
          ))}
        </div>
      </div>

      {/* Backend Skills */}
      <div className={`${sectionBg} ${sectionBorder} p-8`}>
        <h3
          className="
            text-2xl md:text-3xl font-bold text-center
            bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300
            bg-clip-text text-transparent select-none mb-6
          "
        >
          Backend
        </h3>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {skills.backend.map(({ name, icon, glowKey }) => (
            <SkillIcon key={name} name={name} Icon={icon} glowKey={glowKey} />
          ))}
        </div>
      </div>

      {/* Tools Skills */}
      <div className={`${sectionBg} ${sectionBorder} p-8`}>
        <h3
          className="
            text-2xl md:text-3xl font-bold text-center
            bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300
            bg-clip-text text-transparent select-none mb-6
          "
        >
          Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          {skills.tools.map(({ name, icon, glowKey }) => (
            <SkillIcon key={name} name={name} Icon={icon} glowKey={glowKey} />
          ))}
        </div>
      </div>
    </section>
  );
}
