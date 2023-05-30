const femaleImage = document.querySelector(".img-female");
const articleImage = document.querySelector(".frame1-article-img");

femaleImage.classList.add("fade-in");

setTimeout(() => {
  articleImage.classList.add("visible");
}, 2000);

setTimeout(() => {
  femaleImage.style.opacity = "0";
}, 3000);

setTimeout(() => {
  articleImage.classList.remove("visible");
}, 6000);
