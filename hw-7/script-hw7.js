// задание 1

const peoples = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 },
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(peoples.sort((a, b) => a.age - b.age));

// задание 2

function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
  { name: 'Глеб', gender: 'male' },
  { name: 'Анна', gender: 'female' },
  { name: 'Олег', gender: 'male' },
  { name: 'Оксана', gender: 'female' },
];

console.log(filter(people, isMale));

// задание 3

const interval = setInterval(() => {
  console.log(new Date());
}, 3000);

setTimeout(() => {
  clearInterval(interval);
  console.log('30 секунд прошло');
}, 30000);

// задание 4

function delayForSecond(callback) {
  // Код писать можно только внутри этой функции
  setTimeout(() => {
    callback();
  }, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
});

// задание 5

function delayForSecond(cb) {
  setTimeout(() => {
    console.log('Прошла одна секунда');
    if (cb) {
      cb();
    }
  }, 1000);
}

function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(function () {
  sayHi('Глеб');
});
