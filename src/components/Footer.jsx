import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400 py-10 px-6 text-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* 좌측 텍스트 */}
        <p>© 2025 KJT. All rights reserved.</p>

        {/* 우측 소셜 아이콘 */}
        <div className="flex gap-6 text-2xl items-center">
          <a href="https://open.kakao.com/o/sJ4fxbxh" target="_blank" rel="noopener noreferrer" title="KakaoTalk">
            <SiKakaotalk className="text-yellow-400 hover:scale-110 transition" />
          </a>
          <a href="https://github.com/thusja" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" title="YouTube">
            <FaYoutube className="text-red-500 hover:scale-110 transition" />
          </a>
          <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram className="text-pink-500 hover:scale-110 transition" />
          </a>
          <a href="mailto:your@gmail.com" title="Google Mail">
            <FcGoogle className="text-xl hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
