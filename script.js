// ===== تشغيل أنيميشن عند تحميل الصفحة =====
window.addEventListener("DOMContentLoaded", () => {

  // جميع العناصر المهمة للأنيميشن
  const elements = document.querySelectorAll(
    "header, .main-banner, .overlay-text, section, .card, .video-card, footer"
  );

  // إضافة class مع تأخير بسيط لكل عنصر
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
    el.classList.add("fade-in");
  });

});