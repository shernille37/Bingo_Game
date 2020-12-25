const bingoContent = document.querySelector('.bingo-content');

const b = document.querySelectorAll('.b');
const i = document.querySelectorAll('.i');
const n = document.querySelectorAll('.n');
const g = document.querySelectorAll('.g');
const o = document.querySelectorAll('.o');

let numbers = [];

const generateNumbers = () => {
  while (1) {
    for (let ind = 0; ind < 25; ind++) {
      if (ind >= 0 && ind <= 4)
        numbers[ind] = Math.floor(Math.random() * 15) + 1;
      else if (ind >= 5 && ind <= 9)
        numbers[ind] = Math.floor(Math.random() * (30 - 16 + 1)) + 16;
      else if (ind >= 10 && ind <= 14)
        numbers[ind] = Math.floor(Math.random() * (45 - 31 + 1)) + 31;
      else if (ind >= 15 && ind <= 19)
        numbers[ind] = Math.floor(Math.random() * (60 - 46 + 1)) + 46;
      else numbers[ind] = Math.floor(Math.random() * (75 - 61 + 1)) + 61;
    }

    if (numbers.length === new Set(numbers).size) break;
  }
};

const displayNumbers = () => {
  generateNumbers();

  let divIndex = 0;

  numbers.forEach((num, ind) => {
    if (divIndex >= 5) divIndex = 0;
    if (ind >= 0 && ind <= 4) b[divIndex].innerHTML = num;
    else if (ind >= 5 && ind <= 9) i[divIndex].innerHTML = num;
    else if (ind >= 10 && ind <= 14) n[divIndex].innerHTML = num;
    else if (ind >= 15 && ind <= 19) g[divIndex].innerHTML = num;
    else o[divIndex].innerHTML = num;

    divIndex++;
  });

  document.querySelector('.free').innerHTML = 'Free';
};

document.addEventListener('DOMContentLoaded', displayNumbers());

bingoContent.addEventListener('click', (e) => {
  if (!e.target.classList.contains('free')) e.target.classList.toggle('active');
});
