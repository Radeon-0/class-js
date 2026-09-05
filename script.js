const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = Number(prompt("Сколько будет стоить данная работа?"));

const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));

const rollback = 10;

function showTypeOf(value) {
  console.log(typeof value);
}

function getRollbackMessage(price) {
  if (price > 30000) {
    console.log("Даем скидку в 10%");
  } else if (price > 15000 && price < 30000) {
    console.log("Даем скидку в 5%");
  } else if (price > 0 && price < 15000) {
    console.log("Скидка не предусмотрена");
  } else if (price < 0) {
    console.log("Что-то пошло не так");
  } else {
    console.log("Скидка не предусмотрена");
  }
}

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
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
}

const servicePercentPrice = getServicePercentPrices();


showTypeOf(title);
showTypeOf(screens);
showTypeOf(screenPrice);
showTypeOf(adaptive);
showTypeOf(service1);
showTypeOf(servicePrice1);
showTypeOf(service2);
showTypeOf(servicePrice2);

console.log("Типы экранов для разработки:", screens);

getRollbackMessage(fullPrice);

console.log("за вычетом отката посреднику:", servicePercentPrice);