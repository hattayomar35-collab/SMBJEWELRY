// ===== تحديد اللغة تلقائيًا حسب لغة المتصفح =====
let lang = navigator.language.startsWith("ar") ? "ar" : "en";

// ===== دالة تحديث اللغة =====
function updateLang() {
  // جميع العناصر التي تحتوي على data-ar و data-en
  const elements = document.querySelectorAll("[data-ar][data-en]");

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  // ضبط اتجاه الصفحة
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

// ===== تشغيل الترجمة تلقائيًا عند تحميل الصفحة =====
updateLang();