// === ظهور المنتجات مباشرة عند التحميل مع أنيميشن خفيف ===
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
  cards.forEach(card => {
    card.classList.add("show"); // يجعل كل المنتجات تظهر مباشرة
  });
});

// يمكن ترك تأثير fade-in عند النزول إذا أحببت
/*
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      card.classList.add("show");
    }
  });
});
*/

// === السمك المتحرك ===
function createFish(){
  const fish = document.createElement("div");
  fish.classList.add("fish");
  fish.style.top = Math.random() * 80 + "%";
  document.body.appendChild(fish);
  setTimeout(() => fish.remove(), 15000);
}
setInterval(createFish, 3000);