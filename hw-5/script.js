// задание 1

let numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] === 10) {
    console.log(numbs[i]);
    break;
  } else {
    console.log(numbs[i]);
  }
}

// задание 2

let num = [1, 5, 4, 10, 0, 3];

num.forEach((el, index) => {
  if (el === 4) {
    console.log(`${el}:${index}`);
  }
});

// задание 3

let nJoin = [1, 3, 5, 10, 20];

let result = nJoin.join(' ');
console.log(result);

// задание 4

let arr = [];

for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push(1);
  }
  arr.push(row);
}

console.log(arr);

// задание 5

let mas = [1, 1, 1];

mas.push(2, 2, 2);
console.log(mas);

// задание 6

let del = [9, 8, 7, 'a', 6, 5];

del.sort();
const filter = del.filter(No => typeof No === 'number');
console.log(filter);

// задание 7

const guess = [9, 8, 7, 6, 5];
let userInput = prompt('Введите число');

if (guess.includes(Number(userInput))) {
  alert('Угадал');
} else {
  alert('Не угадал');
}

// задание 8

let word = 'abcdef';
word = word.split('').reverse().join('');
console.log(word);

// задание 9
const TwoMas = [
  [1, 2, 3],
  [4, 5, 6],
];
const Sum = [...TwoMas[0], ...TwoMas[1]];
console.log(Sum);

// задание 10

const overkill = [2, 4, 1, 7, 5, 9];

for (let i = 0; i < overkill.length - 1; i++) {
  const currentElement = overkill[i];
  const nextElement = overkill[i + 1];
  const sum = currentElement + nextElement;
  console.log(`Сумма элементов ${currentElement} и ${nextElement} равна ${sum}`);
}

// задание 11

function getSquaresArray(arr) {
  const squaresArray = [];
  for (let i = 0; i < arr.length; i++) {
    const square = arr[i] * arr[i];
    squaresArray.push(square);
  }
  return squaresArray;
}

const inputArray = [2, 4, 5];
const outputArray = getSquaresArray(inputArray);
console.log(outputArray);

// задание 12

function getWordLengths(ar) {
  const wordLengths = ar.map(word => word.length);
  console.log(wordLengths);
  return wordLengths;
}

const words = ['apple', 'banana', 'orange', 'world'];
getWordLengths(words);

// задание 13

function getNegativeNumbers(ak) {
  const negativeNumbers = ak.filter(num => num < 0);
  console.log(negativeNumbers);
  return negativeNumbers;
}

const numbers = [-2, 3, -5, 6, -1, 7, -8, 10, 12];
getNegativeNumbers(numbers);

// задание 14

const massiv = [];

for (let i = 0; i < 10; i++) {
  massiv.push(Math.floor(Math.random() * 11));
}

const eNum = massiv.filter(num => num % 2 === 0);
console.log('массив:', massiv);
console.log('Четные числа:', eNum);

// задание 15

// const arr = [];

// for (let i = 0; i < 6; i++) {
//   arr.push(Math.floor(Math.random() * 10) + 1);
// }

// const sum = arr.reduce((acc, num) => acc + num, 0);
// const avg = sum / arr.length;

// console.log('Array:', arr);
// console.log('Average:', avg);
