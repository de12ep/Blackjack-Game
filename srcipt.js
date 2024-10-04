let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  Name: "Deepak",
  Chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $ " + player.Chips;

function getRandomCard() {
  let randamNo = Math.floor(Math.random() * 13 + 1);
  if (randamNo > 10) {
    return 10;
  } else if (randamNo === 1) {
    return 11;
  } else {
    return randamNo;
  }
}

function startgame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  rendergame();
}

function rendergame() {
  cardEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum :" + sum;
  if (sum <= 20) {
    message = "Do u want to draw a new card";
  } else if (sum === 21) {
    message = "You Won";
    hasBlackJack = true;
  } else {
    message = "You Lose";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newcard() {
  if (isAlive === true && hasBlackJack === false) {
    let newC = getRandomCard();
    sum += newC;
    cards.push(newC);
    rendergame();
  }
}
