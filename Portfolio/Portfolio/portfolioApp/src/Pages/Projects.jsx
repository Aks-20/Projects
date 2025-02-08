import React from 'react';
import { FaShieldAlt, FaUserAlt, FaBookOpen, FaMusic, FaBus } from 'react-icons/fa';

const completedProjects = [
  {
    name: "Disaster Management System",
    description: "A system to help in disaster response, resource allocation, and communication.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js","TailWind","Google Map Api",],
    icon: <FaShieldAlt className="text-red-400 text-4xl" />,
    link: "https://github.com/degenerate-kun-69/PostBurnRecOp", // Replace with project link
  },
  {
    name: "Portfolio Website",
    description: "A modern and interactive portfolio showcasing my skills, experience, and projects.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js","TailWind","Luicide-React"],
    icon: <FaUserAlt className="text-blue-400 text-4xl" />,
    link: "#", // Replace with portfolio link
  },
  {
    name: "Bookstore (CRUD App)",
    description: "A bookstore application with full CRUD operations, allowing users to manage books.",
    techStack: ["React", "Node.js", "MongoDb", "Express.js","TailWind"],
    icon: <FaBookOpen className="text-green-400 text-4xl" />,
    link: "https://github.com/Aks-20/Projects/tree/main/BookStore", // Replace with project link
  }
];

const upcomingProjects = [
  {
    name: "AI DJ Music Generator",
    description: "AI-powered DJ that automates music mixing, transitions, and tempo adjustments.",
    techStack: ["Next.js", "Tone.js", "Web Audio API", "Express.js"],
    icon: <FaMusic className="text-purple-400 text-4xl" />,
    link: "#", // Placeholder for future link
  },
  {
    name: "Fintech + Transport App",
    description: "A fintech-powered travel app for seamless bus ticketing & payments.",
    techStack: ["React Native", "Firebase", "Stripe API", "Node.js"],
    icon: <FaBus className="text-yellow-400 text-4xl" />,
    link: "#", // Placeholder for future link
  }
];

const Projects = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>

        {/* Completed Projects */}
        <h3 className="text-2xl font-semibold text-gray-300 mb-6">Completed Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {completedProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                {project.icon}
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition">
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <h3 className="text-2xl font-semibold text-gray-300 mt-12 mb-6">Upcoming Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                {project.icon}
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Placeholder Button */}
              <button disabled className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm opacity-50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
