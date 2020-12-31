const bingoContent = document.querySelector('.bingo-content');
const bingoTitle = document.querySelector('.bingo-title');
const backBtn = document.querySelector('.win .back');

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

  n[2].innerHTML = 'Free';
};

const verifyWin = () => {
  // Diagonals
  const dia1 = [b[0], i[1], n[2], g[3], o[4]];
  const dia2 = [o[0], g[1], n[2], i[3], b[4]];

  // Horizontals
  const x1 = [b[0], i[0], n[0], g[0], o[0]];
  const x2 = [b[1], i[1], n[1], g[1], o[1]];
  const x3 = [b[2], i[2], n[2], g[2], o[2]];
  const x4 = [b[3], i[3], n[3], g[3], o[3]];
  const x5 = [b[4], i[4], n[4], g[4], o[4]];

  // Counter
  cnt = 0;

  // ----- VERTICAL -----

  b.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  i.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  n.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  g.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  o.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  // -----DIAGONAL-----

  dia1.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  dia2.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  // Horizontal

  x1.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  x2.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  x3.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  x4.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;

  x5.forEach((div) => {
    if (div.classList.contains('active')) cnt++;
  });

  if (cnt === 5) return true;
  cnt = 0;
};

document.addEventListener('DOMContentLoaded', displayNumbers());

bingoContent.addEventListener('click', (e) => {
  if (!e.target.classList.contains('free')) e.target.classList.toggle('active');

  if (verifyWin()) {
    const body = document.querySelector('body');
    backBtn.style.display = 'block';
    bingoTitle.style.display = 'block';
    body.style.justifyContent = 'space-around';

    bingoContent.style.pointerEvents = 'none';
  }
});

backBtn.addEventListener('click', (e) => {
  const body = document.querySelector('body');
  backBtn.style.display = 'none';
  bingoTitle.style.display = 'none';
  body.style.justifyContent = 'center';
  bingoContent.style.pointerEvents = 'all';
});
