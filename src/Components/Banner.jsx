import React from "react";
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import GLowing from "../Utilities/Glowing";
import GlowingText from "../Utilities/GlowingText";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const description =
    "Passionate about building scalable web applications using MongoDB, Express, React, and Node.js. Skilled in creating responsive UI and API-driven backend services.";

  // Colorful glowing styles for each icon (p5/neon style)
  const glowStyles = {
    js: `
    text-yellow-400 
    drop-shadow-[0_0_20px_rgba(250,204,21,1)] 
    filter drop-shadow-[0_0_30px_rgba(250,204,21,0.9)] 
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(250,204,21,1)]
  `,
    react: `
    text-cyan-400
    drop-shadow-[0_0_20px_rgba(14,165,233,1)]
    filter drop-shadow-[0_0_30px_rgba(14,165,233,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(14,165,233,1)]
  `,
    node: `
    text-green-500 
    drop-shadow-[0_0_20px_rgba(22,163,74,1)]
    filter drop-shadow-[0_0_30px_rgba(22,163,74,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(22,163,74,1)]
  `,
    mongo: `
    text-green-400 
    drop-shadow-[0_0_20px_rgba(34,197,94,1)]
    filter drop-shadow-[0_0_30px_rgba(34,197,94,0.9)]
    transition duration-300 cursor-pointer
    hover:drop-shadow-[0_0_40px_rgba(34,197,94,1)]
  `,
  };

  return (
    <div>
      <section className="max-w-10/12  mx-auto px-6 md:px-6 py-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left side - Info */}
        <div className="flex-1 text-center md:text-left">
          <GlowingText
            color="purpleBlue"
            className="text-6xl font-bold mb-3 opacity-90"
          >
            Md Yeasin Arafat
          </GlowingText>

          <GlowingText
            color="cyanPink"
            className="text-2xl font-semibold mb-6 block opacity-90"
          >
            Jr MERN Stack Developer
          </GlowingText>

          <p
            className="mb-6 block text-base md:text-lg dark:text-gray-300 text-cyanPink bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
            style={{ minHeight: "4.5rem", whiteSpace: "pre-wrap" }}
          >
            <Typewriter
              words={[description]}
              loop={2}
              cursor
              cursorStyle="|"
              typeSpeed={30}
              deleteSpeed={50}
              delaySpeed={300}
            />
          </p>

          <GLowing color="electricPink" className="mb-6">
            Download Resume
          </GLowing>

          {/* Tech Icons below button */}
          <div className="flex justify-center md:justify-start space-x-10 text-5xl px-4 py-2">
            <FaJsSquare className={glowStyles.js} title="JavaScript" />
            <FaReact className={glowStyles.react} title="React" />
            <FaNodeJs className={glowStyles.node} title="Node.js" />
            <SiMongodb className={glowStyles.mongo} title="MongoDB" />
          </div>
        </div>

        {/* Right side - Photo */}
        {/* Right side - Photo */}
        <div className="flex-1 flex justify-center md:justify-end relative w-96 h-96">
          {/* Rotating border ring */}
          <div
            className="
      absolute 
      
      rounded-full w-62 h-62  
      lg:w-84 lg:h-84 
      bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
      animate-spin
      shadow-[0_0_25px_20px_rgba(149,92,167,0.5)]
      z-10
    "
            style={{ animationDuration: "5s" }}
          ></div>

          {/* Static image centered inside */}
          <img
            src="./my-img.jpg"
            alt="Md Yeasin Arafat"
            className="
      relative rounded-full object-cover w-60 h-60  lg:w-83 lg:h-83   lg:p-0.5
   
      
      z-20
    "
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
