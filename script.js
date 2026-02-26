// ===== الترجمة التلقائية حسب لغة المتصفح =====
let lang = navigator.language.startsWith("ar") ? "ar" : "en";

// ===== تحديث النصوص تلقائياً حسب الـ data-ar و data-en =====
function updateLang() {
  // تغيير اتجاه الصفحة
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // كل العناصر التي تحتوي على data-ar و data-en
  const elements = document.querySelectorAll("[data-ar][data-en]");
  elements.forEach(el => {
    el.textContent = lang === "ar" ? el.getAttribute("data-ar") : el.getAttribute("data-en");
  });
}

// ===== تشغيل أول مرة =====
updateLang();