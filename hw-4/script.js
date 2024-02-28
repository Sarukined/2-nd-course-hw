// 1 задание

function min(a, b) {
  if (a >= b) {
    return b;
  } else {
    return a;
  }
}

console.log(min(2, 3));

// 2 задание

function number(n) {
  if (n % 2 == 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

console.log(number(2));

// 3 задание

function squareDisplay(m) {
  console.log(m ** 2);
}

function squareback(m) {
  return m ** 2;
}

// 4 задание

function user() {
  let age = prompt('Сколько Вам лет');

  if (age < 0) {
    return 'Вы ввели неправильное значение';
  } else if (age <= 12) {
    return 'Привет,друг!';
  } else {
    return 'Добро пожаловать!';
  }
}

console.log(user());

// 5 задание

function numberCorrect(x, y) {
  if (typeof x === 'number' && typeof y === 'number' && !isNaN(x) && !isNaN(y)) {
    return x * y;
  } else {
    return 'Одно или оба значения не являются числом';
  }
}

console.log(numberCorrect('a', 4));

// 6 задание

function cube() {
  let n = prompt('Введите число:');

  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  } else {
    let result = n ** 3;
    return n + ' в кубе равняется ' + result;
  }
}

console.log(cube());

// 7 задание

let circle1 = {
  radius: 7,

  getArea: function () {
    return 3, 14 * this.radius ** 2;
  },

  getPerimeter: function () {
    return 2 * 3, 14 * this.radius;
  },
};

let circle2 = {
  radius: 10,

  getArea: function () {
    return 3, 14 * this.radius ** 2;
  },

  getPerimeter: function () {
    return 2 * 3, 14 * this.radius;
  },
};

console.log('Площадь circle1:', circle1.getArea());
console.log('Периметр circle1:', circle1.getPerimeter());

console.log('Площадь circle2:', circle2.getArea());
console.log('Периметр circle2:', circle2.getPerimeter());

// 8 задание

function season() {
  let month = Number(prompt('Введите месяц'));
  if (month < 1 || month > 12) {
    alert('В году 12 месяцев');
  } else if ((month >= 1 && month <= 2) || month === 12) {
    alert('Зима');
  } else if (month >= 3 && month <= 5) {
    alert('Весна');
  } else if (month >= 6 && month <= 8) {
    alert('Лето');
  } else {
    alert('Осень');
  }
}
