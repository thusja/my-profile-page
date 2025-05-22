import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/projects";

const Portfolio = () => {
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // 화면 너비로 모바일 여부 판단
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // 최초 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 포트폴리오 카드 UI
  const renderCard = (project) => (
    <div
      key={project.id}
      className="cursor-pointer group overflow-hidden rounded-lg shadow-lg bg-[#424242] w-full max-w-sm"
      onClick={() => setSelected(project)}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full aspect-[4/2.5] object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{project.summary}</p>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-20 px-6 bg-[#101010] text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>

      {/* 반응형 카드 출력 방식 분기 */}
      {isMobile ? (
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1.2}
          spaceBetween={20}
          centeredSlides={true}
          className="pb-6"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>{renderCard(project)}</SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 justify-items-center max-w-7xl mx-auto px-4">
          {projects.map((project) => renderCard(project))}
        </div>
      )}

      {/* 프로젝트 모달 */}
      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;
