// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і
//    виводить значення кольору в span.color.

const colorName = document.querySelector(".color");
const button = document.querySelector(".change-color");
const widgetColor = document.querySelector(".widget");
const randomColor = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", (event) => {
  colorName.textContent = randomColor;
  widgetColor.style.backgroundColor = randomColor;
});
