// === اللغة الافتراضية ===
let lang = 'ar';

// === إنشاء زر اللغة ===
const langBtn = document.createElement('button');
langBtn.textContent = 'EN/AR';
langBtn.style.position = 'fixed';
langBtn.style.top = '20px';
langBtn.style.right = '20px';
langBtn.style.padding = '10px 15px';
langBtn.style.background = 'gold';
langBtn.style.border = 'none';
langBtn.style.borderRadius = '10px';
langBtn.style.cursor = 'pointer';
langBtn.style.zIndex = '999';
document.body.appendChild(langBtn);

// === النصوص لكل صفحة ===
const translations = {
  ar: {
    navbar: ['الرئيسية', 'المتجر', 'فيديوهات'],
    overlayH1: 'SMB Jewelry',
    overlayP: 'سر الفخامة الملكية',
    productsTitle: 'أجمل تصاميم المجوهرات الفاخرة',
    videosTitle: 'فيديوهات SMB',
    // أمثلة لأسماء المنتجات (تغير حسب موقعك)
    products: [
      'نور القمر','لمسة حب','أميرة الليل','عهد العشق','نجمة الأمل','سر الجمال',
      'همس الحب','شمس العشق','إشراقة القلب','رقة الليل','خاطفة الأبصار','تحفة الملك'
    ]
  },
  en: {
    navbar: ['Home', 'Products', 'Videos'],
    overlayH1: 'SMB Jewelry',
    overlayP: 'The secret of royal luxury',
    productsTitle: 'The Most Beautiful Luxury Jewelry Designs',
    videosTitle: 'SMB Videos',
    products: [
      'Moonlight','Touch of Love','Night Princess','Pledge of Love','Star of Hope','Secret of Beauty',
      'Whisper of Love','Sun of Passion','Heart Shine','Night Elegance','Eye Catcher','Royal Masterpiece'
    ]
  }
};

// === دالة لتحديث اللغة ===
function updateLanguage() {
  const t = translations[lang];

  // تغيير Navbar
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach((link, i) => { if(t.navbar[i]) link.textContent = t.navbar[i]; });

  // تغيير النص الرئيسي على البانر
  const overlayH1 = document.querySelector('.overlay-text h1');
  const overlayP = document.querySelector('.overlay-text p');
  if(overlayH1) overlayH1.textContent = t.overlayH1;
  if(overlayP) overlayP.textContent = t.overlayP;

  // تغيير عنوان المنتجات
  const productsTitle = document.querySelector('.products-title p');
  if(productsTitle) productsTitle.textContent = t.productsTitle;

  // تغيير أسماء المنتجات
  const productNames = document.querySelectorAll('.card h3');
  productNames.forEach((name, i) => { if(t.products[i]) name.textContent = t.products[i]; });

  // تغيير عنوان الفيديوهات
  const videosTitle = document.querySelector('.videos-title p');
  if(videosTitle) videosTitle.textContent = t.videosTitle;

  // تغيير اتجاه الصفحة
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
}

// === زر التبديل ===
langBtn.addEventListener('click', () => {
  lang = lang === 'ar' ? 'en' : 'ar';
  updateLanguage();
});

// === ظهور المنتجات مباشرة مع أنيميشن خفيف ===
const cards = document.querySelectorAll(".card");
window.addEventListener("load", () => {
  cards.forEach(card => {
    card.classList.add("show");
  });
});

// === السمك المتحرك ===
function createFish(){
  const fish = document.createElement("div");
  fish.classList.add("fish");
  fish.style.top = Math.random() * 80 + "%";
  document.body.appendChild(fish);
  setTimeout(() => fish.remove(), 15000);
}
setInterval(createFish, 3000);