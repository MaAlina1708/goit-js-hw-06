// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і
//    виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  colorName.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
