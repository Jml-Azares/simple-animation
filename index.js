const femaleImage = document.querySelector(".img-female");
const articleImage = document.querySelector(".frame1-article-img");

femaleImage.classList.add("fade-in");

setTimeout(() => {
  articleImage.classList.add("visible");
}, 2000);

setTimeout(() => {
  femaleImage.style.opacity = "0"; // Fade out the female image
}, 3000); // Delay the fade-out of the female image by 5 seconds

setTimeout(() => {
  articleImage.classList.remove("visible");
}, 7000); // Remove the 'visible' class from the second image after 7 seconds
