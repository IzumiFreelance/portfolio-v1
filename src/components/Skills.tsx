import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code2 size={40} />,
      title: "Frontend Development",
      description: "React, Vue.js, TypeScript",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development",
      description: "Node.js, Python, SQL",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Globe size={40} />,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript",
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 group-hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 mx-auto`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-center">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;