"use strict";

const randomNumber = Math.floor(Math.random() * 100) + 1;

function guessNumber() {
  const userNumber = prompt("Угадай число от 1 до 100");

  if (userNumber === null) {
    alert("Игра окончена");
    return;
  }

  const number = Number(userNumber);

  if (isNaN(number)) {
    alert("Введи число!");
    guessNumber();
    return;
  }

  if (number > randomNumber) {
    alert("Загаданное число меньше");
    guessNumber();
    return;
  }

  if (number < randomNumber) {
    alert("Загаданное число больше");
    guessNumber();
    return;
  }
  if (number === randomNumber) {
    alert("Поздравляю, Вы угадали!!!");
    return;
  }
}

guessNumber();