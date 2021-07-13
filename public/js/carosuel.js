const track = document.querySelector(".carosuel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carosuel__button--right");
const prevButton = document.querySelector(".carosuel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

// slides side by side with

const slidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(slidePosition);

const moveSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("cuurent-slide");
  targetDot.classList.add("cuurent-slide");
};

const removeDot = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};
// when a next button is clicke

nextButton.addEventListener("click", (e) => {
  // current slide
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const cuurentDot = dotsNav.querySelector(".cuurent-slide");
  const nextDot = cuurentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveSlide(track, currentSlide, nextSlide);
  updateDots(cuurentDot, nextDot);
  removeDot(slides, prevButton, nextButton, nextIndex);
});

// previous slides

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevslide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".cuurent-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevslide);
  moveSlide(track, currentSlide, prevslide);
  updateDots(currentDot, prevDot);
  removeDot(slides, prevButton, nextButton, prevIndex);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".cuurent-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  removeDot(slides, prevButton, nextButton, targetIndex);
});
