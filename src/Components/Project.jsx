import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Smart Bazar",
    description: "An online bazar platform for fresh produce.",
    images: [
      "https://i.ibb.co/Fk2QR82X/smart-bazar-1.png",
      "https://i.ibb.co/n8Vn41SM/smart-baza-4.png",
      "https://i.ibb.co/MyTfgp3f/smart-bazar-3.png",
    ],
    liveLink: "https://gleaming-alpaca-00df2d.netlify.app/",
  },
  {
    id: 2,
    title: "Smart Shelf",
    description: "Track and review your personal book collection.",
    images: [
      "https://i.ibb.co/BV7Gm79x/smart-shelf-1.png",
      "https://i.ibb.co/RWdv5Bj/smart-shel-main.png",
      "https://i.ibb.co/jvgGB9GQ/smart-shelf-3.png",
    ],
    liveLink: "https://heartfelt-selkie-12ab58.netlify.app/",
  },
  {
    id: 3,
    title: "Find Fest",
    description: "A modern event management and booking platform.",
    images: [
      "https://i.ibb.co/7tX2Rgw3/event-1.png",
      "https://i.ibb.co/8HZknNL/event-2.png",
      "https://i.ibb.co/psv8QzS/event-3.png",
    ],
    liveLink: "https://super-phoenix-41b268.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section className="py-16 rounded-lg relative z-10 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl bg-gradient-to-r from-indigo-200 via-pink-700 to-purple-300
            bg-clip-text text-transparent font-bold mb-8 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

//    imgs 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 ">
      {/* Rotating Images */}
      <div className="relative w-full h-56 overflow-hidden rounded-t-xl ">
        <AnimatePresence mode="wait">
          <motion.img
            key={project.images[currentImage]}
            src={project.images[currentImage]}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover p-3 rounded-2xl "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* Text */}
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-200 text-sm">{project.description}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-pink-500/50 transition"
          >
            <FaExternalLinkAlt /> View Live
          </a>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-blue-500/50 transition"
          >
            <FaInfoCircle /> View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
