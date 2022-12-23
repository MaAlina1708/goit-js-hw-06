// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ulList = document.querySelector("#ingredients");
const item = ingredients.map((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item");

  return ulList.append(li);
});

console.log(ulList);
