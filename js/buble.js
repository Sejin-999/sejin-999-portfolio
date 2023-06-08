document.addEventListener("DOMContentLoaded", function () {
  const bubblesContainer = document.querySelector(".bubbles");
  let numberOfBubbles = calculateNumberOfBubbles(); // 페이지 크기에 따라 초기값 설정

  createBubbles(numberOfBubbles);

  window.addEventListener("resize", function () {
    const newNumberOfBubbles = calculateNumberOfBubbles();
    if (newNumberOfBubbles !== numberOfBubbles) {
      numberOfBubbles = newNumberOfBubbles;
      updateBubbles(numberOfBubbles);
    }
  });
});

function calculateNumberOfBubbles() {
  // 페이지 크기에 따라 적절한 버블 개수 계산
  // 예시로 페이지 너비의 100픽셀당 1개의 버블을 생성하도록 설정
  const pageWidth = window.innerWidth;
  const bubbleSize = 40;
  return Math.floor(pageWidth / bubbleSize);
}

function createBubbles(number) {
  const bubblesContainer = document.querySelector(".bubbles");
  bubblesContainer.innerHTML = "";

  for (let i = 0; i < number; i++) {
    const bubble = document.createElement("span");
    bubble.style.setProperty("--i", getRandomDelay(10, 50));
    bubblesContainer.appendChild(bubble);
  }
}

function updateBubbles(number) {
  createBubbles(number);
}

function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
