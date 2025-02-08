import React from 'react';
import { GraduationCap, Brain,  Laptop } from 'lucide-react';
import { FaFutbol } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            About Me
          </h1>
          <p className="text-xl text-gray-300">Passionate Developer & Lifelong Learner</p>
        </div>

        {/* Education Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all">
          <div className="flex items-center space-x-4 mb-6">
            <GraduationCap size={32} className="text-blue-400" />
            <h2 className="text-3xl font-bold text-blue-400">Education</h2>
          </div>
          
          <div className="space-y-8">
            <div className="pl-4 border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold">THE NORTHCAP UNIVERSITY</h3>
              <p className="text-gray-300">B.Tech in Computer Science and Engineering</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-blue-400 font-semibold">CGPA: 7.8</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-300">2022-2026</span>
              </div>
            </div>

            <div className="pl-4 border-l-4 border-purple-400">
              <h3 className="text-xl font-semibold">LANCER'S CONVENT</h3>
              <p className="text-gray-300">Class X-Class XII</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-purple-400 font-semibold">Class XII: 70%</span>
                <span className="text-gray-400">|</span>
                <span className="text-purple-400 font-semibold">Class X: 80%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Chess Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <Brain size={24} className="text-yellow-400" />
              <h3 className="text-xl font-bold text-yellow-400">Chess</h3>
            </div>
            <p className="text-gray-300">
              Enhancing critical thinking and strategic planning through the art of chess.
            </p>
          </div>

          {/* Football Playing Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <FaFutbol size={24} className="text-green-400" />
              <h3 className="text-xl font-bold text-green-400">Football (Playing)</h3>
            </div>
            <p className="text-gray-300">
              Building teamwork, leadership skills, and physical endurance on the field.
            </p>
          </div>

          {/* Football Watching Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <FaFutbol size={24} className="text-red-400" />
              <h3 className="text-xl font-bold text-red-400">Football (Watching)</h3>
            </div>
            <p className="text-gray-300">
              Analyzing match dynamics and tactics to deepen game understanding.
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all">
            <div className="flex items-center space-x-3 mb-4">
              <Laptop size={24} className="text-purple-400" />
              <h3 className="text-xl font-bold text-purple-400">Reading Tech Blogs</h3>
            </div>
            <p className="text-gray-300">
             Keeping up with tech updates and learning new concepts through tech blogs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;