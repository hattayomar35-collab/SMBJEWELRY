// ===== تشغيل بعد تحميل الصفحة بالكامل =====
window.addEventListener("DOMContentLoaded", () => {

  // جميع العناصر التي نريد تطبيق أنيميشن لها
  const fadeElements = document.querySelectorAll(
    "header, .main-banner, .overlay-text, section, .card, .video-card, footer"
  );

  // إعداد الأنيميشن مبدئيًا
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });

  // تأخير قصير قبل اظهار العناصر تدريجيًا
  setTimeout(() => {
    fadeElements.forEach(el => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    });
  }, 100);

});