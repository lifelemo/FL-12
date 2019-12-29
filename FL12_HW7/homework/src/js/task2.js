const INITIAL_PRIZE = 100;
const INITIAL_RANGE = 8;
const PRIZE_MULTIPLIER = 2;
const RANGE_EXPANDER = 4;
const ATTEMPTS = 3;


let continueGame = confirm('Do you want to play a game?');
if (continueGame === false) {
  alert('You did not become a billionaire, but can.');
} else {
  while (continueGame) {
    let sum = 0;
    let prize = INITIAL_PRIZE / PRIZE_MULTIPLIER;
    let range = INITIAL_RANGE - RANGE_EXPANDER;
    while (continueGame) {
      prize = prize * PRIZE_MULTIPLIER;
      range = range + RANGE_EXPANDER;
      let currentPrize = prize;
      let currentRange = range;
      let i = ATTEMPTS;
      let number = Math.random()*(range+1);
      while (i > 0 && i <=ATTEMPTS) {
        let message = `
          Chooseca roulette pocket number from 0 to ${currentRange}
          Attempts left: ${i}
          Total prize: ${sum}$
          Possible prize on current attempt: ${currentPrize}$
        `;
        let prediction = parseInt(prompt(message,''));
        if(prediction === number) {
          sum += currentPrize;
          break;
        } else {
          currentPrize /= PRIZE_MULTIPLIER;
          --i;
        }
      }
      if (i === 0) {
        alert('Thank you for your participation. Your prize is: ' + sum + '$');
        continueGame = confirm('Do you want to play again?','');
        break;
      } else {
        alert('Congratulation, you won! Your prize is: ' + sum + '$');
        continueGame = confirm('Do you want to continue?');
      }
    }

  }

}
