import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const OnTheTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const footer = document.getElementById("footer");

      if (!about || !footer) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const aboutTop = about.offsetTop;
      const footerTop = footer.offsetTop;

      const scrollBottom = scrollY + windowHeight;

      // 버튼 노출 조건: scroll이 about 아래부터 footer 위까지일 때
      const isInRange = scrollBottom >= aboutTop && scrollY <= footerTop;
      setVisible(isInRange);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 체크
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
