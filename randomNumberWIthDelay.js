/*
2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds,
and store the delay in a variable so it can be modified.
The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.
*/

const randomNumber = Array.from({ length: 60 }, (_, index) => index + 1);

function randomNumberGenerator() {
  console.log(
    "Number=",
    randomNumber[Math.floor(Math.random() * randomNumber.length)]
  );
}

const delayTime = 3000;

let remainingTime = delayTime / 1000;

const countdownIntervalId = setInterval(() => {
  console.log(`Time remaining: ${remainingTime} seconds`);
  remainingTime--;

  if (remainingTime < 1) {
    clearInterval(countdownIntervalId);
    randomNumberGenerator();
  }
}, 1000);
