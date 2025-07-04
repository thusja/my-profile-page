// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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
          <span className="text-white font-medium">rebearose@gmail.com</span> 으로 편하게 연락 주시면 감사하겠습니다.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://github.com/thusja"
            target="_blank"
            className="min-w-[200px] flex items-center justify-center gap-2 bg-gray-800 text-white px-4 py-3 rounded hover:bg-gray-900 transition"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="https://rough-lime-f80.notion.site/Project-List-21e2d24c870d806c97ebedded3d13e55"
            target="_blank"
            className="min-w-[200px] flex items-center justify-center gap-2 bg-white text-black border border-gray-300 px-4 py-3 rounded hover:bg-gray-100 transition"
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
