import React, { useState } from 'react';
import { Copy, Check, MapPin } from 'lucide-react';

const Contact = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('akshatgupta0043@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform hover:scale-[1.02] transition-all w-full max-w-md">
          {/* Header */}
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-8">
            Contact Me
          </h2>

          {/* Email Copy Section */}
          <div
            className="flex items-center justify-between bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl cursor-pointer hover:bg-gray-600/50 mb-6 group"
            onClick={handleCopy}
          >
            <span className="text-gray-200">akshatgupta0043@gmail.com</span>
            {hasCopied ? (
              <Check className="h-6 w-6 text-green-400 transition-all" />
            ) : (
              <Copy className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-all" />
            )}
          </div>

          {/* Linktree Button */}
          <a
            href="https://linktr.ee/akshat_202004?utm_source=linktree_admin_share"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl text-center transition duration-300 mb-6 shadow-lg hover:shadow-xl"
          >
            Visit My Linktree
          </a>

          {/* Location Section */}
          <div className="bg-gray-700/50 backdrop-blur-sm p-4 rounded-xl">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <MapPin className="h-5 w-5 text-purple-400" />
              <p className="text-lg font-semibold text-purple-300">Location</p>
            </div>
            <p className="text-center text-gray-300">Pitampura, New Delhi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;