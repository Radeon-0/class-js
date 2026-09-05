const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const rollback = 10;
const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

console.log("за вычетом отката посреднику:", servicePercentPrice);

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
} else {
    console.log("Скидка не предусмотрена");
}