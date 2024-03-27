// задание 1

let convertToUpperCase = 'js';

let upper = convertToUpperCase.toUpperCase();
console.log(upper);

// задание 2

function stringArrayAndString(array, prefix) {
  return array.filter(string => {
    return string.toLowerCase().startsWith(prefix.toLowerCase());
  });
}

// задание 3

let roundTheNumber = 32.58884;
let min = Math.floor(roundTheNumber);
let max = Math.ceil(roundTheNumber);
let near = Math.round(roundTheNumber);

console.log(
  `Меньшее целое - ${min}, большее целое - ${max}, ближайшее целое - ${near} от числа ${roundTheNumber}`
);

// задание 4

const minAndMaxNumb = [52, 53, 49, 77, 21, 32];

const minNumb = Math.min(...minAndMaxNumb);
console.log('Минимальное значение', minNumb);

const maxNumb = Math.max(...minAndMaxNumb);
console.log('Максимальное значение', maxNumb);

// задание 5

function randomNumbs() {
  const creationNumbs = Math.floor(Math.random() * 10) + 1;
  console.log(creationNumbs);
}
randomNumbs();

// задание 6

function acceptsAndReturns(meaning) {
  const arr = Math.floor(meaning / 2);
  const randomArr = [];

  for (let k = 0; k < arr; k++) {
    const randomNum = Math.floor(Math.random() * meaning);
    randomArr.push(randomNum);
  }

  return randomArr;
}

const meaning = 8;
const randomArr = acceptsAndReturns(meaning);
console.log(randomArr);

// задание 7

function twoWholeNumb(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

const n = 4;
const m = 12;
console.log(twoWholeNumb(n, m));

// задание 8

const currentDate = new Date();
console.log(currentDate);

// задание 9

const curDate = new Date();
curDate.setDate(curDate.getDate() + 73);
console.log(curDate);

// задание 10

function formatDate(date) {
  const daysOfWeek = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ];
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

const cuDate = new Date();
console.log(formatDate(currentDate));
