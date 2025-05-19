// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#121212] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400 mb-10">
          협업, 문의, 피드백 모두 환영합니다. <br />
          아래 경로 중 편한 방법으로 연락주세요!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
          <a
            href="mailto:your@email.com"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition"
          >
            <FiMail className="text-lg" />
            이메일 보내기
          </a>

          <a
            href="https://github.com/thusja"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-3 rounded hover:bg-gray-900 transition"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="https://notion.so/your-notion"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-white text-black border border-gray-300 px-4 py-3 rounded hover:bg-gray-100 transition"
          >
            <SiNotion className="text-lg" />
            Notion 프로필
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact;
