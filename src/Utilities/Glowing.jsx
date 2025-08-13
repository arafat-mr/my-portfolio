import React from "react";

const GLowing = ({
  children,
  className = "",
  color = "neonBlue",
  ...props
}) => {
  const glowColors = {
    neonBlue: {
      bg: "bg-blue-600 dark:bg-blue-500",
      shadowDefault: "shadow-[0_0_20px_7px_rgba(59,130,246,0.8)]",
      shadowHover: "hover:shadow-[0_0_30px_12px_rgba(59,130,246,1)]",
    },
    electricPink: {
      bg: "bg-pink-600 dark:bg-pink-500",
      shadowDefault: "shadow-[0_0_20px_7px_rgba(219,39,119,0.8)]",
      shadowHover: "hover:shadow-[0_0_30px_12px_rgba(219,39,119,1)]",
    },
    brightGreen: {
      bg: "bg-green-600 dark:bg-green-500",
      shadowDefault: "shadow-[0_0_20px_7px_rgba(22,163,74,0.8)]",
      shadowHover: "hover:shadow-[0_0_30px_12px_rgba(22,163,74,1)]",
    },
    vibrantPurple: {
      bg: "bg-purple-600 dark:bg-purple-500",
      shadowDefault: "shadow-[0_0_20px_7px_rgba(139,92,246,0.8)]",
      shadowHover: "hover:shadow-[0_0_30px_12px_rgba(139,92,246,1)]",
    },
    fieryOrange: {
      bg: "bg-orange-600 dark:bg-orange-500",
      shadowDefault: "shadow-[0_0_20px_7px_rgba(249,115,22,0.8)]",
      shadowHover: "hover:shadow-[0_0_30px_12px_rgba(249,115,22,1)]",
    },
    sunnyYellow: {
      bg: "bg-yellow-500 dark:bg-yellow-400",
      shadowDefault: "shadow-[0_0_20px_7px_rgba(234,179,8,0.8)]",
      shadowHover: "hover:shadow-[0_0_30px_12px_rgba(234,179,8,1)]",
    },
  };

  const { bg, shadowDefault, shadowHover } = glowColors[color] || glowColors.neonBlue;

  return (
    <button
      {...props}
      className={`
        px-6 py-3 rounded-full text-white font-semibold
        ${bg}
        transition-shadow duration-300
        ${shadowDefault} ${shadowHover}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GLowing;
