const screenOne = document.querySelector('.screen-one');
const screenTwo = document.querySelector('.screen-two');
const inputNumber = document.querySelector('#input-number');
const btnTry = document.querySelector('#btn-try');
const btnAgain = document.querySelector('#btn-again');

let randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

function handleTry(e) {
  e.preventDefault();

  if (inputNumber.value == randomNumber) {
    toggleScreen();
    screenTwo.querySelector('h1').innerText = `Hit in ${xAttempts} attempts!`;
  }

  if (inputNumber.value == '' || inputNumber.value > 10) {
    alert(`Please enter a number from 0 to 10.`);
    xAttempts--;
  }

  inputNumber.value = '';
  xAttempts++;
}

function toggleScreen() {
  screenOne.classList.toggle('hide');
  screenTwo.classList.toggle('hide');
}

function tryAgain() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

btnTry.addEventListener('click', handleTry);

btnAgain.addEventListener('click', tryAgain);

document.addEventListener('keydown', e => {
  if (e.key == 'Enter' && screenOne.classList.contains('hide')) {
    tryAgain();
  }
});
