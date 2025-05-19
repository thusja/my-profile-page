import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const OnTheTopButton = () => {
  const [visible, setVisible] = useState(false);

  // 스크롤 위치 감지
  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      if (!about) return;

      const rect = about.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setVisible(isInView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-white hover:text-black transition"
      title="맨 위로"
    >
      <FaArrowUp />
    </button>
  ) : null;
};

export default OnTheTopButton;
