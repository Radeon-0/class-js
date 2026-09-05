

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};


const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");

let screenPrice;

do {
  screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
} while (isNaN(screenPrice) || screenPrice <= 0);


const adaptive = confirm("Нужен ли адаптив на сайте?");


// Проверка стоимости дополнительных услуг
const getValidatedPrice = (question) => {
  let price;

  do {
    const input = prompt(question);
    price = parseFloat(input);
  } while (isNaN(price) || price < 0);

  return price;
};


const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = getValidatedPrice("Сколько это будет стоить?");

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = getValidatedPrice("Сколько это будет стоить?");


const rollback = 10;


const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

const allServicePrices = getAllServicePrices();


function getFullPrice() {
  return screenPrice + allServicePrices;
}

const fullPrice = getFullPrice();


function getTitle() {
  const newTitle = title.trim();

  return newTitle.charAt(0).toUpperCase() +
    newTitle.slice(1).toLowerCase();
}

const projectTitle = getTitle();


function getServicePercentPrices() {
  return Math.ceil(
    fullPrice - fullPrice * (rollback / 100)
  );
}

const servicePercentPrice = getServicePercentPrices();


console.clear();


showTypeOf(title);
showTypeOf(screens);
showTypeOf(screenPrice);
showTypeOf(adaptive);
showTypeOf(service1);
showTypeOf(servicePrice1);
showTypeOf(service2);
showTypeOf(servicePrice2);


console.log("Типы экранов для разработки:", screens);


if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что-то пошло не так");
}

console.log("за вычетом отката посреднику:", servicePercentPrice);