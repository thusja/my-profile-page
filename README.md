# 🌐 My React Portfolio

> 사용자 중심의 디자인과 성능을 모두 고려한 React 기반 포트폴리오 웹사이트입니다.

![preview]([./public/og-image.png](https://github.com/thusja/my-profile-page/blob/main/src/assets/React/RP01.PNG))

## 🚀 배포 주소

👉 [배포 사이트](https://my-profile-page-eight.vercel.app/)

---

## 📌 주요 기능

- 🎯 **React + Vite** 기반 빠른 개발 환경
- 📱 **반응형 UI** (모바일 ~ 데스크탑까지 최적화)
- 💡 **Framer Motion**을 활용한 애니메이션 효과
- 🧩 **Skills / Projects / Contact** 등 명확한 섹션 구분
- 🖼️ **Swiper 캐러셀**을 활용한 프로젝트 모달 뷰
- 🔗 **GitHub / Notion / 배포 링크 버튼** 통합
- 🆙 **온더탑 버튼** (About 이후 등장)
- 🌙 **다크 테마 최적화**
- ✅ `react-icons`, `tailwindcss`, `framer-motion` 등 modern UI 라이브러리 활용

- ---

## 🛠️ 사용 기술

| Category       | Stack |
|----------------|-------|
| **Frontend**   | React, Vite, Tailwind CSS |
| **UI/UX**      | Framer Motion, Swiper, React Icons |
| **배포**        | Vercel |
| **기타**        | GitHub Pages-ready, Mobile-first Design |

---

## 📂 프로젝트 구조

```bash
src/
├── assets/             # 이미지, 배경 등 정적 자산
├── components/         # Header, Footer, Hero, About 등 컴포넌트
├── data/               # 프로젝트 리스트 (projects.js)
├── utils/              # OnTheTop 버튼 등 유틸
├── App.jsx             # 루트 컴포넌트
├── main.jsx            # 진입점
└── index.css           # Tailwind 포함 전체 CSS
```

---

## 📸 섹션 구성

Hero: 메인 타이틀 + 포트폴리오 진입 버튼
About: 간단한 자기소개 문단
Skills: 주/부 스킬, 유틸리티를 아이콘으로 시각화
Portfolio: 클릭 시 모달 팝업 & 슬라이드
Contact: 이메일, GitHub, Notion 연결
Footer: SNS 아이콘 링크 제공

---

## 로컬 실행 방법

```
# 1. 프로젝트 클론
git clone https://github.com/thusja/my-profile-page.git

# 2. 디렉토리 이동
cd my-profile-page

# 3. 패키지 설치
npm install

# 4. 로컬 서버 실행
npm run dev
```
