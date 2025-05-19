import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 */}
        <div className="text-xl font-bold tracking-wide">KJT</div>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-lime-400 transition">About</a>
          <a href="#skills" className="hover:text-lime-400 transition">Skills</a>
          <a href="#portfolio" className="hover:text-lime-400 transition">Projects</a>
          <a href="#contact" className="hover:text-lime-400 transition">Contact</a>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-4 text-sm">
          <a href="#about" className="block hover:text-lime-400" onClick={toggleMenu}>About</a>
          <a href="#skills" className="block hover:text-lime-400" onClick={toggleMenu}>Skills</a>
          <a href="#portfolio" className="block hover:text-lime-400" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block hover:text-lime-400" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
