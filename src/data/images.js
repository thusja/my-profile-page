export const ProjectImages = {
  appInventor: Object.values(import.meta.globEager('../assets/App Inventor/*.{jpg,png,JPG,PNG}')).map(m => m.default),
  htmlCss: Object.values(import.meta.globEager('../assets/HTML CSS/*.{jpg,png,JPG,PNG}')).map(m => m.default),
  jsApi: Object.values(import.meta.globEager('../assets/JS API/*.{jpg,png,JPG,PNG}')).map(m => m.default),
  html5: Object.values(import.meta.globEager('../assets/HTML5/*.{jpg,png,JPG,PNG}')).map(m => m.default),
  python: Object.values(import.meta.globEager('../assets/Python/*.{jpg,png,JPG,PNG}')).map(m => m.default),
  csharp: Object.values(import.meta.globEager('../assets/Cuttlefish/*.{jpg,png,JPG,PNG}')).map(m => m.default),
  react: Object.values(import.meta.globEager('../assets/React/*.{jpg,png,JPG,PNG}')).map(m => m.default),
};
