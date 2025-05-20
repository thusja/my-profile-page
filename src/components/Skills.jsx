// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AiFillHtml5, AiOutlineGithub } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import {
  SiJavascript, SiTypescript, SiC, SiCplusplus,
  SiReact, SiReactrouter, SiFigma, SiOracle, 
  SiMysql, SiTailwindcss, SiMongodb, SiFirebase,
  SiPostman, SiSqlite, SiExpress, SiVercel, SiRender } from "react-icons/si";
import { FaNodeJs, FaCuttlefish, FaServer } from "react-icons/fa";

// 주 스킬
const mainSkills = [
  { name: "HTML", icon: <AiFillHtml5 size={40} color="#e34c26" /> },
  { name: "CSS", icon: <DiCss3Full size={40} color="#2965f1" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#f7df1e" /> },
  { name: "React", icon: <SiReact size={40} color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#68a063" /> },
  { name: "Express", icon: <SiExpress size={40} color="#404D59" /> },
  { name: "Oracle", icon: <SiOracle size={40} color="#F80000" /> },
  { name: "SQLite", icon: <SiSqlite size={40} color="#003B57" /> },
];

// 서브 스킬
const subSkills = [
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178c6" /> },
  // { name: "C", icon: <SiC size={40} color="#555" /> },
  // { name: "C++", icon: <SiCplusplus size={40} color="#00599c" /> },
  { name: "C#", icon: <FaCuttlefish size={40} color="#68217A" /> },
  { name: "React Native", icon: <SiReactrouter size={40} color="#61dafb" /> },
  { name: "REST API", icon: <FaServer size={40} color="#888" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38bdf8" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#00758f" /> },
  // { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
];

// 유틸리티
const utilities = [
  { name: "GitHub", icon: <AiOutlineGithub size={40} color="white" /> },
  { name: "Figma", icon: <SiFigma size={40} color="#a259ff" /> },
  { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
  { name: "Postman", icon: <SiPostman size={40} color="#FF6C37" /> },
  { name: "Vercel", icon: <SiVercel size={40} color="#000000" /> },
  { name: "Render", icon: <SiRender size={40} color="#46E3B7" /> },
];

// 반복 렌더링 섹션
const SkillsSection = ({ title, skills }) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 inline-block pb-1">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.3 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {skill.icon}
          <span className="mt-2 text-sm">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// 전체 Skills 섹션
const Skills = () => {
  return (
    <section id="skills" className="bg-[#242424] text-white py-20 px-6">
      <h2 className="text-7xl font-bold text-center mb-16">Skills</h2>
      <div className="max-w-6xl mx-auto">
        <SkillsSection title="Main Skills" skills={mainSkills} />
        <SkillsSection title="Sub Skills" skills={subSkills} />
        <SkillsSection title="Tools & Utilities" skills={utilities} />
      </div>
    </section>
  );
};

export default Skills;
