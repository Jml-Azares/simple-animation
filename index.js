const femaleImage = document.querySelector(".female");
const headline1Image = document.querySelector(".headline1");
const headline2Image = document.querySelector(".headline2");
const subheadlineImage = document.querySelector(".subheadline");
const learnMoreImage = document.querySelector(".learnmore");
const logoImage = document.querySelector(".logo");
const replayImage = document.querySelector(".replay");

setTimeout(() => {
  femaleImage.classList.add("fade-out");
}, 3000);

setTimeout(() => {
  headline2Image.style.opacity = "1";
}, 3000);

setTimeout(() => {
  headline1Image.classList.add("scale-out");
}, 5000);

setTimeout(() => {
  subheadlineImage.style.opacity = "1";
}, 7000);

setTimeout(() => {
  learnMoreImage.style.opacity = "1";
}, 9000);

setTimeout(() => {
  logoImage.style.opacity = "1";
}, 9000);

setTimeout(() => {
  replayImage.style.opacity = "1";
}, 12000);
