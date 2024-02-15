// задание 1
let a = 10;
alert(a);
a = 20;
alert(a);
// задание 2
const ageIphone = '29 июня 2007 г.';
alert(ageIphone);
// задание 3
const creator = 'Brendan Eich';
alert(creator);
// задание 4
let oneNumber = 10;
let twoNumber = 2;
let sum = oneNumber + twoNumber;
let difference = oneNumber - twoNumber;
let product = oneNumber * twoNumber;
let quotient = oneNumber / twoNumber;
alert(`sum: ${sum} dif: ${difference} prod: ${product} quot: ${quotient}`);
// задание 5
let power = 2 ** 5;
let result = alert(power);
// задание 6
let A = 9;
let B = 2;
let remainder = A % B;
alert(remainder);
// задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
// задание 8
let age = prompt('Сколько вам лет?');
alert(age);
// задание 9.0
const user = {
  name: 'Victor',
  age: 35,
  isAdmin: true,
};
// задание 9.1
user.cityOfResidence = 'Moscow';
// задание 9.2
user['age'] = 37;
// задание 9.3
delete user['cityOfResidence'];
// задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);
// задание 10
let quetion = String(prompt('Какое у Вас имя?'));
alert(`Привет, ${quetion}!`);
