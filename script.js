// ===== زر تغيير اللغة =====

let lang = "ar";

const langBtn = document.createElement("button");

langBtn.innerHTML = "EN";

langBtn.className = "lang-btn";

document.body.appendChild(langBtn);


// ===== النصوص =====

const translations = {

ar:{

nav1:"الرئيسية",

nav2:"المتجر",

nav3:"فيديوهات",

productsTitle:"أجمل تصاميم المجوهرات الفاخرة",

btn:"طلب عبر واتساب"

},

en:{

nav1:"Home",

nav2:"Products",

nav3:"Videos",

productsTitle:"Luxury Jewelry Collections",

btn:"Order on WhatsApp"

}

};



// ===== تغيير اللغة =====

function updateLang(){

const t = translations[lang];


// Navbar

const nav = document.querySelectorAll("nav a");

if(nav[0]) nav[0].textContent = t.nav1;

if(nav[1]) nav[1].textContent = t.nav2;

if(nav[2]) nav[2].textContent = t.nav3;


// عنوان المنتجات

const title = document.querySelector(".products-title p");

if(title) title.textContent = t.productsTitle;


// أزرار واتساب

const buttons = document.querySelectorAll(".btn");

buttons.forEach(b=>{
b.textContent = t.btn;
});


// الاتجاه

document.documentElement.dir = lang=="ar" ? "rtl":"ltr";

}




// ===== زر التغيير =====

langBtn.onclick = ()=>{

lang = lang=="ar" ? "en":"ar";

langBtn.innerHTML = lang=="ar" ? "EN":"AR";

updateLang();

};



// ===== تشغيل أول مرة =====

updateLang();