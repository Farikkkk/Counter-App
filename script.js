const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const countNum = document.querySelector(".counter");

let count = 0;

prevButton.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 0;
  }
  countNum.innerHTML = count;
});

nextButton.addEventListener("click", () => {
  count++;
  countNum.innerHTML = count;
});
