// 1 задание
let password = 'qwerty';
let quetion = prompt('Введите пароль');
if (quetion === password) {
  alert('Пароль введен верно');
} else {
  alert('Пароль введен неверно');
}
// 2 задание
let c = 2;
if (c > 0 && c < 10) {
  console.log('верно');
} else {
  console.log('неверно');
}
// 3 задание
let e = 50;
let d = 12;
if (e > 100 || d > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
// 4 задание
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
console.log(Number(a) + Number(b));
// 5 задание

let month = prompt('Введите число');

switch (month) {
  case '1':
    console.log('Январь');
    break;
  case '2':
    console.log('Февраль');
    break;
  case '3':
    console.log('Март');
    break;
  case '4':
    console.log('Апрель');
    break;
  case '5':
    console.log('Май');
    break;
  case '6':
    console.log('Июнь');
    break;
  case '7':
    console.log('Июль');
    break;
  case '8':
    console.log('Август');
    break;
  case '9':
    console.log('Сентябрь');
    break;
  case '10':
    console.log('Октябрь');
    break;
  case '11':
    console.log('Ноябрь');
    break;
  case '12':
    console.log('Декабрь');
    break;

  default:
    console.log('В году 12 месяцев');
    break;
}
