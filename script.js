const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  adaptive: false,

  service1: '',
  servicePrice1: 0,
  service2: '',
  servicePrice2: 0,

  rollback: 10,

  allServicePrices: 0,
  fullPrice: 0,
  projectTitle: '',
  servicePercentPrice: 0,

  asking: function () {
    this.title = prompt("Как называется ваш проект?");

    this.screens = prompt("Какие типы экранов нужно разработать?");

    do {
      this.screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
    } while (isNaN(this.screenPrice) || this.screenPrice <= 0);

    this.adaptive = confirm("Нужен ли адаптив на сайте?");

    this.service1 = prompt("Какой дополнительный тип услуги нужен?");
    this.servicePrice1 = this.getValidatedPrice("Сколько это будет стоить?");

    this.service2 = prompt("Какой дополнительный тип услуги нужен?");
    this.servicePrice2 = this.getValidatedPrice("Сколько это будет стоить?");
  },

  getValidatedPrice: function (question) {
    let price;

    do {
      const input = prompt(question);
      price = parseFloat(input);
    } while (isNaN(price) || price < 0);

    return price;
  },

  showTypeOf: function (variable) {
    console.log(variable, typeof variable);
  },

  getAllServicePrices: function () {
    return this.servicePrice1 + this.servicePrice2;
  },

  getFullPrice: function () {
    return this.screenPrice + this.allServicePrices;
  },

  getTitle: function () {
    const newTitle = this.title.trim();

    return newTitle.charAt(0).toUpperCase() +
      newTitle.slice(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    return Math.ceil(this.fullPrice - this.fullPrice * (this.rollback / 100));
  },

  logger: function () {
    for (let key in this) {
      console.log(key, this[key]);
    }

    console.log("Типы экранов для разработки:", this.screens);

    if (this.fullPrice > 30000) {
      console.log("Даем скидку в 10%");
    } else if (this.fullPrice > 15000) {
      console.log("Даем скидку в 5%");
    } else if (this.fullPrice > 0) {
      console.log("Скидка не предусмотрена");
    } else {
      console.log("Что-то пошло не так");
    }

    console.log("За вычетом отката посреднику:",this.servicePercentPrice);
  },

  start: function () {
    this.asking();

    this.allServicePrices = this.getAllServicePrices();

    this.fullPrice = this.getFullPrice();

    this.projectTitle = this.getTitle();

    this.servicePercentPrice = this.getServicePercentPrices();

    console.clear();

    this.logger();
  }
};

appData.start();