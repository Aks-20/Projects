import React from 'react';
import { FaDatabase, FaCode, FaServer, FaLaptopCode, FaGitAlt, FaCertificate } from "react-icons/fa";

const domainSkills = [
  { category: "Languages", skills: ["Java", "Python"], icon: <FaCode className="text-yellow-400 text-3xl" /> },
  { category: "Frontend Development", skills: ["HTML", "CSS (Bootstrap, Tailwind)", "JavaScript", "React.js"], icon: <FaLaptopCode className="text-blue-400 text-3xl" /> },
  { category: "Backend Development", skills: ["Node.js", "Express.js"], icon: <FaServer className="text-green-400 text-3xl" /> },
  { category: "Databases", skills: ["MySQL", "MongoDB"], icon: <FaDatabase className="text-red-400 text-3xl" /> },
  { category: "Version Control", skills: ["Git", "GitHub"], icon: <FaGitAlt className="text-orange-400 text-3xl" /> },
];

const certifications = [
  { name: "MongoDB Certified", issuedBy: "MongoDB University", icon: <FaCertificate className="text-green-400 text-3xl" /> },
  { name: "Oracle Java Certification", issuedBy: "Oracle", icon: <FaCertificate className="text-blue-400 text-3xl" /> },
  { name: "Backend Development", issuedBy: "PwSkills", icon: <FaCertificate className="text-yellow-400 text-3xl" /> },
];

const Home = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Introduction Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl transform transition hover:scale-105 mb-8">
          <h2 className="text-3xl font-bold text-blue-300 flex items-center">
            Hi, I'm Akshat Gupta
          </h2>
          <p className="text-gray-300 mt-2">
            Dedicated Full Stack Developer with experience in building dynamic and responsive web applications using modern technologies.
          </p>
        </div>

        {/* Domain Skills Section */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">Domain Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {domainSkills.map((skill, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <ul className="text-gray-300">
                {skill.skills.map((item, idx) => (
                  <li key={idx} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block m-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <h2 className="text-3xl font-bold text-center text-white mt-12 mb-6">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                {cert.icon}
                <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
              </div>
              <p className="text-gray-300 text-sm">Issued by: {cert.issuedBy}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Home;
