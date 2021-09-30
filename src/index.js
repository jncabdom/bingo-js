const MAXNUM = 90;
const MINNUM = 0;

const NUMSPERCARD = 15;

const BALLTEXT = document.querySelector(".bingo-ball-text");

let allNumbers;

const createCard = () => {
  allNumbers = _.shuffle(allNumbers);
  return allNumbers.slice(0, NUMSPERCARD);
}

const getRandomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const startGame = () => {
  allNumbers = _.range(MINNUM, MAXNUM + 1);
  const cards = document.querySelectorAll(".player-card");
  cards.forEach(card => {
    let newElements = createCard();
    for (let element of newElements) {
      let numberDiv = document.createElement('div');
      numberDiv.className = "card-number";
      numberDiv.classList.add(`number${element}`);
      numberDiv.textContent = (element < 10) ? "0" + element : element;
      card.appendChild(numberDiv);
    }
  });
  allNumbers = _.shuffle(allNumbers);
}

const newTurn = () => {
  let turnNumber = allNumbers.pop();
  BALLTEXT.innerHTML = (turnNumber < 10) ? "0" + turnNumber : turnNumber;
  const foundNumbers = document.querySelectorAll(`.number${turnNumber}`);
  foundNumbers.forEach(foundNumber => foundNumber.classList.toggle("found"));
}

startGame();
document.querySelector(".turn-button").addEventListener("click", newTurn);
