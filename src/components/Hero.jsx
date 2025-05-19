// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-black text-white flex flex-col justify-center min-h-[85vh] w-full px-12 py-24">
      <div className="w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[64px] sm:text-[96px] md:text-[140px] lg:text-[180px] leading-none font-extrabold text-gray-300"
        >
          PORT
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-lime-400 italic -mt-4 z-10 relative"
        >
          <motion.span
            animate={{
              y: [0, -6, 0, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            Bridge<span className="align-super text-sm sm:text-base md:text-xl ml-1">*</span>
          </motion.span>
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[64px] sm:text-[96px] md:text-[160px] lg:text-[220px] leading-none font-extrabold text-gray-300"
        >
          FOLIO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 text-lg mt-6 font-medium"
        >
          by 김정태
        </motion.p>

        <motion.div
          className="mt-28 md:mt-32 flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#portfolio"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold min-w-[140px] text-center hover:bg-gray-200 transition"
          >
            포트폴리오 보기
          </a>
          <a
            href="https://github.com/thusja"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold min-w-[140px] text-center border border-white hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
