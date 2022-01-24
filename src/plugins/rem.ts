(() => {
  const setRem = () => {
    const windowWidth: number = window.innerWidth;
    const width: number = Math.max(320, Math.min(750, windowWidth));
    (document.querySelector("html")?.style as any).fontSize = width / 10 + "px";
  };

  setRem();
  window.onresize = setRem;
})();
