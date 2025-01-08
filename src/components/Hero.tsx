import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          John Doe
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Full Stack Developer & UI/UX Designer
        </motion.p>
        
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-sm"
        >
          Scroll to explore
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;