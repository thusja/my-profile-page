function importAll(glob) {
  return Object.values(glob).map((module) => module.default);
}

export const ProjectImages = {
  appInventor: importAll(import.meta.glob('../assets/App Inventor/*.{jpg,png,JPG,PNG}', { eager: true })),
  htmlCss: importAll(import.meta.glob('../assets/HTML CSS/*.{jpg,png,JPG,PNG}', { eager: true })),
  jsApi: importAll(import.meta.glob('../assets/JS API/*.{jpg,png,JPG,PNG}', { eager: true })),
  html5: importAll(import.meta.glob('../assets/HTML5/*.{jpg,png,JPG,PNG}', { eager: true })),
  python: importAll(import.meta.glob('../assets/Python/*.{jpg,png,JPG,PNG}', { eager: true })),
  csharp: importAll(import.meta.glob('../assets/Cuttlefish/*.{jpg,png,JPG,PNG}', { eager: true })),
  react: importAll(import.meta.glob('../assets/React/*.{jpg,png,JPG,PNG}', { eager: true })),
  travelFlow: importAll(import.meta.glob('../assets/TravelFlow/*.{jpg,png,JPG,PNG}', { eager: true })),
};
