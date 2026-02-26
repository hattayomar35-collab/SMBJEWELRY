// ===== أنيميشن تحميل الصفحة =====
window.addEventListener("load", () => {
  // جعل الجسم ظاهر
  document.body.style.opacity = "1";

  // ظهور البانر
  const banner = document.querySelector(".main-banner");
  if (banner) {
    banner.style.opacity = 1;
    banner.style.transform = "translateY(0)";
  }

  // ظهور عنوان المنتجات
  const productsTitle = document.querySelector(".products-title");
  if (productsTitle) {
    productsTitle.style.opacity = 1;
    productsTitle.style.transform = "translateY(0)";
  }

  // ظهور كروت المنتجات
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 200 + index * 100);
  });

  // ظهور الفيديوهات
  const videos = document.querySelectorAll(".video-card");
  videos.forEach((video, index) => {
    setTimeout(() => {
      video.style.opacity = 1;
      video.style.transform = "translateY(0)";
    }, 500 + index * 100);
  });
});