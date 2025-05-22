import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const ProjectModal = ({ project, onClose }) => {

  // esc키 이벤트 리스너
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-black transition z-50"
          onClick={onClose}
        >
          ×
        </button>

        {/* 이미지 캐러셀 */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          spaceBetween={20}
          slidesPerView={1}
          className="w-full aspect-video rounded-t-xl"
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index} className="h-full">
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full aspect-[4/2] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 상세 정보 */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 mb-4">{project.description}</p>

          <div className="flex flex-wrap justify-center gap-4 pt-6 pb-4">
            <div className="relative group">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  <FiGlobe className="text-lg" />
                  프로젝트 사이트
                </a>
              ) : (
                <div className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded opacity-60 cursor-not-allowed">
                  <FiGlobe className="text-lg" />
                  프로젝트 사이트
                </div>
              )}
            </div>

            <div className="relative group">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  <FaGithub className="text-lg" />
                  GitHub 저장소
                </a>
              ) : (
                <div className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded opacity-60 cursor-not-allowed">
                  <FaGithub className="text-lg" />
                  GitHub 저장소
                </div>
              )}
            </div>

            <div className="relative group">
              {project.notion ? (
                <a
                  href={project.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 transition"
                >
                  <SiNotion className="text-lg" />
                  발표자료 (Notion)
                </a>
              ) : (
                <div className="flex items-center gap-2 bg-gray-200 text-black border border-gray-300 px-4 py-2 rounded opacity-60 cursor-not-allowed">
                  <SiNotion className="text-lg" />
                  발표자료 (Notion)
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
