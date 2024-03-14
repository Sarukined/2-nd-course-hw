// games 1

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

// games 2

function randomWords() {
  const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  const num = 3;
  const result = [];
  for (let i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * fruits.length);
    const fruit = fruits[index];
    if (!result.includes(fruit)) {
      result.push(fruit);
    } else {
      i--;
    }
  }
  const fruitfinally = result;
  alert(fruitfinally);

  let inputUser = prompt('Введите слова увиденные ранее').toLowerCase().split(',');

  if (
    inputUser.length === fruitfinally.length &&
    inputUser.every((item, index) => fruitfinally[index].toLowerCase() === item.trim())
  ) {
    alert('Введено верно');
  } else {
    alert('Введено неверно');
  }
}
