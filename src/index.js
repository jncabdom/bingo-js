const MAXNUM = 90;
const MINNUM = 0;

const NUMSPERCARD = 15;

const BALLTEXT = document.querySelector(".bingo-ball-text");
const WINTEXT = document.querySelector(".win-text");

let allNumbers;
let playerCards = [];
let mustReset = false;

const createCard = () => {
  allNumbers = _.shuffle(allNumbers);
  return allNumbers.slice(0, NUMSPERCARD);
}

const getRandomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const generateCards = () => {
  const cards = document.querySelectorAll(".player-card");
  cards.forEach(card => {
    let newElements = createCard();
    playerCards.push(newElements);
    for (let number of newElements) {
      addNumberToCard(number, card);
    }
  });
}

const addNumberToCard = (number, card) => {
  let numberDiv = document.createElement('div');
  numberDiv.className = "card-number";
  numberDiv.classList.add(`number${number}`);
  numberDiv.textContent = (number < 10) ? "0" + number : number;
  card.appendChild(numberDiv);
}

const startGame = () => {
  restartGame();
  generateCards();
  allNumbers = _.shuffle(allNumbers);
}

const restartGame = () => {
  playerCards = [];
  document.querySelectorAll(".card-number").forEach(number => number.remove());
  BALLTEXT.innerHTML = "?";
  allNumbers = _.range(MINNUM, MAXNUM + 1);
  if (!WINTEXT.classList.contains("inactive")) WINTEXT.classList.toggle("inactive");
}

const newTurn = () => {
  if (!mustReset) {
    let turnNumber = allNumbers.pop();
    BALLTEXT.innerHTML = (turnNumber < 10) ? "0" + turnNumber : turnNumber;
    const foundNumbers = document.querySelectorAll(`.number${turnNumber}`);
    foundNumbers.forEach(foundNumber => foundNumber.classList.toggle("found"));
    playerCards.forEach(card => { if (card.includes(turnNumber)) card.splice(card.indexOf(turnNumber), 1) });
    checkWinConditions();
  }
}

const checkWinConditions = () => {
  const winCondition = ((playerCards[0].length === 0) ? 1 : 0) +
                       ((playerCards[1].length === 0) ? 2 : 0);
  console.log(winCondition);
  switch (winCondition) {
    case 1:
      WINTEXT.innerHTML = "Player 1 wins! Please restart the game."
      break;
    case 2:
      WINTEXT.innerHTML = "Player 2 wins! Please restart the game."
      break;
    case 3:
      WINTEXT.innerHTML = "It's a draw! Please restart the game."
      break;
    default:
      break;
  }
  if (winCondition > 0) {
    mustReset = true;
    WINTEXT.classList.toggle("inactive");
  }
    
}

document.querySelector(".start-button").addEventListener("click", startGame);
document.querySelector(".turn-button").addEventListener("click", newTurn);
