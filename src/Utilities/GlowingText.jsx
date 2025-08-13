import React from "react";

const glowTextColors = {
  indigoPink: {
    base: "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500",
    glowDefault: "drop-shadow-[0_0_10px_rgba(131,63,248,0.7)]",
    glowHover: "hover:drop-shadow-[0_0_25px_rgba(219,39,119,1)]",
  },
  tealBlue: {
    base: "bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600",
    glowDefault: "drop-shadow-[0_0_10px_rgba(13,148,136,0.7)]",
    glowHover: "hover:drop-shadow-[0_0_25px_rgba(14,165,233,1)]",
  },
  pinkBlue: {
    base: "bg-gradient-to-r from-blue-400 via-purple-600 to-blue-800",
    glowDefault: "drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]",
    glowHover: "hover:drop-shadow-[0_0_25px_rgba(239,35,562,1)]",
  },
  purpleBlue: {
    base: "bg-gradient-to-r from-pink-600 to-blue-600",
    glowDefault: "drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]",
    glowHover: "hover:drop-shadow-[0_0_25px_rgba(59,130,246,1)]",
  },
  greenYellow: {
    base: "bg-gradient-to-r from-green-400 via-lime-400 to-yellow-300",
    glowDefault: "drop-shadow-[0_0_10px_rgba(132,204,22,0.7)]",
    glowHover: "hover:drop-shadow-[0_0_25px_rgba(250,204,21,1)]",
  },
  cyanPink: {
    base: "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",
    glowDefault: "drop-shadow-[0_0_10px_rgba(129,140,248,0.7)]",
    glowHover: "hover:drop-shadow-[0_0_25px_rgba(219,39,119,1)]",
  },
};


const GlowingText = ({ children, color = "indigoPink", className = "", ...props }) => {
  const { base, glowDefault, glowHover } = glowTextColors[color] || glowTextColors.indigoPink;

  return (
    <span
      {...props}
      className={`
        ${base} ${glowDefault} ${glowHover} transition duration-300 ease-in-out ${className}
        bg-clip-text text-transparent
        -webkit-bg-clip-text -webkit-text-fill-color-transparent
      `}
    >
      {children}
    </span>
  );
};


export default GlowingText;
