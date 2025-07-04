import { FaGithub } from "react-icons/fa";
import { SiKakaotalk, SiNotion } from "react-icons/si";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0d0d0d] text-gray-400 py-10 px-6 text-sm">
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
          <a
            href="https://rough-lime-f80.notion.site/Project-List-21e2d24c870d806c97ebedded3d13e55"
            target="_blank" rel="noopener noreferrer" title="Notion"
          >
            <SiNotion className="hover:text-white transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
