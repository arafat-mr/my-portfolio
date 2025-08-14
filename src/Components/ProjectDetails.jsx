import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();   
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);

  const project = data.find(p => p.id === parseInt(id));

  if (!project) {
    return <p className="text-gray-500 text-center mt-10">Project not found</p>;
  }

  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500";
  const techGradient = "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500";
  const bulletGradient = "bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500";

  return (
    <div className="max-w-6xl mx-auto p-6 relative z-10">
      {/* Project Header */}
      <div className="mb-8">
        <motion.h1
          className={`text-4xl font-bold mb-2 ${gradientText}`}
          initial={{ opacity: 0, y: -20, textShadow: "0 0 15px rgba(255,0,255,0.5)" }}
          animate={{ opacity: 1, y: 0, textShadow: "0 0 15px rgba(255,0,255,0.5)" }}
          transition={{ duration: 0.6 }}
        >
          {project.projectName}
        </motion.h1>

        <motion.p
          className={` text-lg mb-4 ${gradientText}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {project.briefDescription}
        </motion.p>

        <div className="flex gap-4 mt-4">
          {project.liveProjectLink && (
            <motion.a
              href={project.liveProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg font-semibold text-white"
              style={{ background: "linear-gradient(90deg, #a855f7, #ec4899)" }}
              initial={{ opacity: 0, y: -10, boxShadow: "0 0 15px #a855f7" }}
              animate={{ opacity: 1, y: 0, boxShadow: "0 0 15px #a855f7" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #f472b6" }}
              transition={{ duration: 0.5 }}
            >
              Live Demo
            </motion.a>
          )}
          {project.githubClientRepo && (
            <motion.a
              href={project.githubClientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg font-semibold text-white"
              style={{ background: "linear-gradient(90deg, #f43f5e, #6366f1)" }}
              initial={{ opacity: 0, y: -10, boxShadow: "0 0 15px #6366f1" }}
              animate={{ opacity: 1, y: 0, boxShadow: "0 0 15px #6366f1" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #f472b6" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              GitHub
            </motion.a>
          )}
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {project.images?.length > 0 ? (
          project.images.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Project Screenshot ${idx + 1}`}
              className="rounded-lg shadow-lg w-full h-48 object-cover border-2 border-purple-500/50 hover:shadow-[0_0_30px_rgba(255,0,255,0.7)]"
              initial={{ opacity: 0, y: 30, boxShadow: "0 0 15px rgba(255,0,255,0.5)" }}
              animate={{ opacity: 1, y: 0, boxShadow: "0 0 15px rgba(255,0,255,0.5)" }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,192,203,0.8)" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            />
          ))
        ) : (
          <p className="text-gray-500">No images available</p>
        )}
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 ${gradientText}`}>Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.mainTechnologyStack?.length > 0 ? (
            project.mainTechnologyStack.map((tech, idx) => (
              <motion.span
                key={idx}
                className={`px-3 py-1 rounded-full text-sm text-white ${techGradient} shadow-[0_0_15px_rgba(255,0,255,0.5)]`}
                initial={{ opacity: 0, scale: 0.8, boxShadow: "0 0 15px rgba(255,0,255,0.5)" }}
                animate={{ opacity: 1, scale: 1, boxShadow: "0 0 15px rgba(255,0,255,0.5)" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 25px #f472b6" }}
              >
                {tech}
              </motion.span>
            ))
          ) : (
            <p className="text-gray-500">No technologies listed</p>
          )}
        </div>
      </div>

      {/* Challenges */}
      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 ${gradientText}`}>Challenges Faced</h2>
        {project.challengesFaced?.length > 0 ? (
          <ul className="list-disc list-inside">
            {project.challengesFaced.map((item, idx) => (
              <motion.li
                key={idx}
                className={bulletGradient + " text-lg mb-1"}
                initial={{ opacity: 0, x: -20, textShadow: "0 0 10px #ec4899" }}
                animate={{ opacity: 1, x: 0, textShadow: "0 0 10px #ec4899" }}
                transition={{ delay: idx * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No challenges listed</p>
        )}
      </div>

      {/* Future Plans */}
      <div className="mb-8">
        <h2 className={`text-2xl font-semibold mb-2 ${gradientText}`}>Potential Improvements & Future Plans</h2>
        {project.potentialImprovementsAndFuturePlans?.length > 0 ? (
          <ul className="list-disc list-inside">
            {project.potentialImprovementsAndFuturePlans.map((item, idx) => (
              <motion.li
                key={idx}
                className={bulletGradient + " text-lg mb-1"}
                initial={{ opacity: 0, x: -20, textShadow: "0 0 10px #a855f7" }}
                animate={{ opacity: 1, x: 0, textShadow: "0 0 10px #a855f7" }}
                transition={{ delay: idx * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No future plans listed</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
