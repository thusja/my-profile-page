const About = () => {
  return (
    <section id="about" className="bg-[#121212] text-white px-6 sm:px-12 py-24">
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-12 items-start">
        {/* 왼쪽 */}
        <div>
          <h3 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-10">
            I'm 김정태
          </h3>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            사용자 경험을 먼저 생각하며 코드를 짜고,<br />
            프론트와 백엔드를 자유롭게 넘나들며,<br />
            사용자와 시스템 사이의 다리를 만드는 개발자입니다.
          </p>
        </div>

        {/* 오른쪽 */}
        <div className="text-base text-gray-400 leading-relaxed">
          <h4 className="font-semibold text-white mb-4 text-lg">What I Value</h4>
          <p>
            저는 문제 해결 중심의 사고를 바탕으로, 사용자와 팀을 이해하는 개발자가 되고자 합니다.<br />
            UI 흐름을 설계하고, 프론트와 백엔드를 넘나들며 사용자 경험을 깊이 고민합니다.<br />
            소통과 협업을 소중히 여기며, 함께 성장하는 개발 문화를 중요하게 생각합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
