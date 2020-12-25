const btn = document.querySelector('.btn');
const num = document.querySelector('.rollNum');
const calledNumbers = document.querySelector('.calledNumbers');

const arr = [];

const fillArray = () => {
  for (let i = 1; i <= 75; i++) arr.push(i);
};

const generateRandomNum = () => {
  let num = Math.floor(Math.random() * arr.length);
  let roll = arr.splice(num, 1);

  return roll[0];
};

const determineLetter = (num) => {
  if (num >= 1 && num <= 15) return 'B';
  else if (num >= 16 && num <= 30) return 'I';
  else if (num >= 31 && num <= 45) return 'N';
  else if (num >= 46 && num <= 60) return 'G';
  else return 'O';
};

const fillCalledNum = (letter, num) => {
  const div = document.createElement('div');
  div.innerHTML = `${letter} ${num}`;

  calledNumbers.appendChild(div);
  calledNumbers.scrollTop = calledNumbers.scrollHeight;
};

const randomAnimation = () => {
  let speed = 300;

  if (arr.length === 0) {
    num.innerHTML = '~';
    return;
  }

  const myNum = generateRandomNum();
  const letter = determineLetter(myNum);

  const time = setInterval(() => {
    speed--;
    num.innerHTML = Math.floor(Math.random() * 75) + 1;

    if (speed === 0) {
      clearInterval(time);
      num.innerHTML = `${letter} ${myNum}`;
      fillCalledNum(letter, myNum);
    }
  }, 5);
};

document.addEventListener('DOMContentLoaded', fillArray());
btn.addEventListener('click', randomAnimation);
