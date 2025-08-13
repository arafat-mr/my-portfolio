import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si"; 
export default function Social() {
  return (
    <div className="max-w-11/12 mx-auto flex flex-col items-center space-y-6">
      {/* Heading */}
      <h2
        className="
          text-3xl font-bold z-50
          bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
          bg-clip-text text-transparent
          text-center
          select-none
        "
      >
        Let's connect
      </h2>

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-5 md:space-x-18"> {/* 3x gap */}
        {/* GitHub */}
        <a
          href="https://github.com/arafat-mr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            relative inline-flex items-center justify-center w-14 h-14 rounded-full
            bg-gradient-to-r from-gray-700 via-gray-900 to-black
            text-white
            shadow-[0_0_25px_8px_rgba(100,100,100,0.8)]
            hover:shadow-[0_0_35px_14px_rgba(100,100,100,1)]
            transition-shadow duration-500
          "
        >
          <FaGithub size={28} />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/arafat-mr42"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="
            relative inline-flex items-center justify-center w-14 h-14 rounded-full
            bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
            text-white
            shadow-[0_0_25px_8px_rgba(59,89,152,0.8)]
            hover:shadow-[0_0_35px_14px_rgba(59,89,152,1)]
            transition-shadow duration-500
          "
        >
          <FaFacebookF size={28} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/arafat-mr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="
            relative inline-flex items-center justify-center w-14 h-14 rounded-full
            bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700
            text-white
            shadow-[0_0_25px_8px_rgba(79,70,229,0.8)]
            hover:shadow-[0_0_35px_14px_rgba(79,70,229,1)]
            transition-shadow duration-500
          "
        >
          <FaLinkedinIn size={28} />
        </a>

        {/* Gmail */}
        <a
          href="mailto:arafatmr42@gmail.com"  
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
          className="
            relative inline-flex items-center justify-center w-14 h-14 rounded-full
            bg-gradient-to-r from-red-500 via-red-600 to-red-700
            text-white
            shadow-[0_0_25px_8px_rgba(220,38,38,0.8)]
            hover:shadow-[0_0_35px_14px_rgba(220,38,38,1)]
            transition-shadow duration-500
          "
        >
          <SiGmail size={28} />
        </a>
      </div>
    </div>
  );
}
