const MAXNUM = 90;
const MINNUM = 0;

const NUMSPERCARD = 15;

let allNumbers;

const createCard = () => {
  allNumbers = _.shuffle(allNumbers);
  return allNumbers.slice(0, NUMSPERCARD);
}

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

}

const getRandomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

startGame();
