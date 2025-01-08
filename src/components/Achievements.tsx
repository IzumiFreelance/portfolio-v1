import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Coffee, Code } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award size={32} />,
      number: "15+",
      text: "Awards Won"
    },
    {
      icon: <Users size={32} />,
      number: "50+",
      text: "Clients Served"
    },
    {
      icon: <Coffee size={32} />,
      number: "100+",
      text: "Projects Completed"
    },
    {
      icon: <Code size={32} />,
      number: "500k+",
      text: "Lines of Code"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 mb-4">
                {item.icon}
              </div>
              <motion.h3 
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {item.number}
              </motion.h3>
              <p className="text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;