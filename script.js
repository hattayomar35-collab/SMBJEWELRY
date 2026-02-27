window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    "header, .main-banner, .overlay-text, section, .card, .video-card, footer"
  );

  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
    el.classList.add("fade-in");
  });
});