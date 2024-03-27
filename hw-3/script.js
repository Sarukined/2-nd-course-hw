// 1 задание
let hi = 0;
while (hi < 2) {
  console.log('Привет');
  hi++;
}
// 2 задание
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
// 3 задание
let k = 7;
while (k <= 22) {
  console.log(k);
  k++;
}
// 4 задание
const user = {
  Коля: '200',
  Вася: '300',
  Петя: '400',
};

for (let key in user) {
  console.log(`${key} - зарплата ${user[key]} долларов.`);
}
// 5 задание
let n = 1000;
let num = 0;
while (n >= 50) {
  n /= 2;
  num++;
}
console.log('Результат', n);
console.log('Итераций', num);
// 6 задание
let Friday = 5;
for (let day = Friday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-e число. Необходимо подготовить отчет`);
}
