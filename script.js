// 'use strict';

// document.querySelector('.message'); // class
// document.querySelector('#message'); // id

// // reading
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 23;

// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);
// .addEventListener(typeofEvent, whattodoFuceventHandler)
// fuction is just a value, we can pass as a argument

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// function expression
document.querySelector('.check').addEventListener('click', function () {
  // this function will not be called immediately once the script here is executed, This is function will only be called as soon as the Event happens
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number';
    displayMessage('⛔️ No Number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number!';
    displayMessage('🥳 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game!';
      displayMessage('😭 You lost the game!');
    }
  }
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You lost the game!';
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You lost the game!';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
