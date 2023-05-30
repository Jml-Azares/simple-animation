const femaleImage = document.querySelector(".female");
const headline1Image = document.querySelector(".headline1");
const headline2Image = document.querySelector(".headline2");
const subheadlineImage = document.querySelector(".subheadline");
const learnMoreImage = document.querySelector(".learnmore");
const logoImage = document.querySelector(".logo");
const replayImage = document.querySelector(".replay");

// Fade out the female image after 3 seconds
setTimeout(() => {
  femaleImage.classList.add("fade-out");
}, 3000);

// Make headline2 image visible after 5 seconds
setTimeout(() => {
  headline2Image.style.opacity = "1";
}, 3000);

// Scale down and move headline1 image to the right corner after 6 seconds
setTimeout(() => {
  headline1Image.classList.add("scale-out");
}, 5000);

// Make subheadline image visible after 6 seconds
setTimeout(() => {
  subheadlineImage.style.opacity = "1";
}, 7000);

// Make learnmore image visible after 9 seconds
setTimeout(() => {
  learnMoreImage.style.opacity = "1";
}, 9000);

// Move the logo image from left to right after 9 seconds
setTimeout(() => {
  logoImage.style.opacity = "1";
}, 9000);

// Make replay image visible after 12 seconds
setTimeout(() => {
  replayImage.style.opacity = "1";
}, 12000);
