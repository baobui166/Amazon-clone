const imgs = document.querySelectorAll(".header__img");
const prevBtn = document.querySelector(".header__prev");
const nextBtn = document.querySelector(".header__next");

console.log(imgs, prevBtn, nextBtn);
let countImgs = 0;
function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = " none";
  }

  imgs[countImgs].style.display = "block";
}

changeSlide();

prevBtn.addEventListener("click", function () {
  countImgs--;

  if (countImgs < 0) {
    countImgs = imgs.length - 1;
    console.log(n);
  }
  changeSlide();
});

nextBtn.addEventListener("click", function () {
  countImgs++;

  if (countImgs > imgs.length - 1) {
    countImgs = 0;
  }
  changeSlide();
});

// setInterval(function () {
//   countImgs++;
//   if (countImgs == imgs.length) {
//     countImgs = 0;
//   }
//   changeSlide();
// }, 4000);

const srollContainer = document.querySelectorAll(".product__list");
console.log(srollContainer);
for (const item of srollContainer) {
  item.addEventListener("wheel", (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
}
