values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
suits = ['♥', '♦', '♠', '♣']
deck = [];

class Card {
 constructor(suit, value) {
  this.suit = suit;
  this.value = value;
 }
 get color() {
  return this.suit === '♠' || this.suit === '♣' ? 'black' : 'red';
 }
 getHTML() {
  const cardDiv = document.createElement('div');
  cardDiv.innerText = this.suit;
  cardDiv.classList.add("player-card", this.color);
  cardDiv.dataset.value = `${this.value} ${this.suit}`;
  return cardDiv;
 }
 getValue() {
  return this.value
 }
}
function createDeck() {
 for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
   const card = new Card(suits[i], values[j])
   deck.push(card)
  }
 }
}


function shuffle(min, max) {
 for (let i = 0; i < 1000; i++) {
  let j = Math.floor(Math.random() * (max - min) + min);

  deck.push(deck[j])
  deck.splice(j, 1)
 }
}
createDeck()
shuffle(0, 51)
console.log(deck);
const CARD_VALUE_MAP = {
 "2": 2,
 "3": 3,
 "4": 4,
 "5": 5,
 "6": 6,
 "7": 7,
 "8": 8,
 "9": 9,
 "10": 10,
 "J": 10,
 "Q": 10,
 "K": 10,
 "A": 11
}

let total = 0;
let aceChecker = [];
const playerSlot = document.querySelector('.player-slot');
const playerTotal = document.querySelector('.total')

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
 // playerSlot.innerHTML = ''
 // deck = []
 // createDeck()
 // shuffle(1, 52)
 let cardValue = deck[0].getValue()
 aceChecker.push(cardValue)
 console.log(aceChecker);
 playerSlot.appendChild(deck[0].getHTML())

 total += CARD_VALUE_MAP[deck[0].getValue()]

 getPlayerCard()

 if ((aceChecker.indexOf('A') !== -1) && total > 21) {
  total = total - 10
  aceChecker.splice(aceChecker.indexOf('A'), 1)

 } else {
  total = total;
 }


 console.log(aceChecker);
 console.log(deck)

 playerTotal.textContent = total;
})
const deal = document.querySelector('.btn-deal')
const dealerSlot = document.querySelector('.pc-slot')
const dealerTotal = document.querySelector('.dealer-total')
let dealerAceChecker = []
deal.addEventListener('click', function () {
 aceChecker.push(deck[0].getValue())
 dealerAceChecker.push(deck[1].getValue())
 aceChecker.push(deck[2].getValue())
 dealerAceChecker.push(deck[3].getValue())
 playerSlot.appendChild(deck[0].getHTML())
 playerSlot.appendChild(deck[2].getHTML())
 dealerSlot.appendChild(deck[1].getHTML())
 dealerSlot.appendChild(deck[3].getHTML())

 total += (CARD_VALUE_MAP[deck[0].getValue()] + CARD_VALUE_MAP[deck[2].getValue()])
 getPlayerCard()
 getPlayerCard()
 getPlayerCard()
 getPlayerCard()
 playerTotal.textContent = total;
})
function getPlayerCard() {
 deck.shift()
}

