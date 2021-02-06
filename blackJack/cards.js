// values = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']
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
let pcTotal = 0;
let pcTotalHiden = 0;

let aceChecker = [];
const playerSlot = document.querySelector('.player-slot');
const playerTotal = document.querySelector('.total')

const btn = document.querySelector('.btn');
const deal = document.querySelector('.btn-deal')
const stayBtn = document.querySelector('.btn-stay');
const nextHandBtn = document.querySelector('.btn-next-hand')
// loading page
window.addEventListener('DOMContentLoaded', () => {
 btn.setAttribute('disabled', 'disabled')
 stayBtn.setAttribute('disabled', 'disabled')
 nextHandBtn.setAttribute('disabled', 'disabled')
})

btn.addEventListener('click', () => {
 // playerSlot.innerHTML = ''
 // deck = []
 // createDeck()
 // shuffle(1, 52)
 let cardValue = deck[1].getValue()
 aceChecker.push(cardValue)
 console.log(aceChecker);
 playerSlot.appendChild(deck[1].getHTML())

 total += CARD_VALUE_MAP[deck[1].getValue()]

 // getPlayerCard()
 deck.splice(1, 1)
 if ((aceChecker.indexOf('A') !== -1) && total > 21) {
  total = total - 10
  aceChecker.splice(aceChecker.indexOf('A'), 1)

 } else {
  total = total;
 }

 if (total === 21) {
  playerTotal.textContent = `${total} player has 21`;
  return
 } else if (total > 21) {
  playerTotal.textContent = `${total} player bust`;
  return
 } else {
  total = total;
 }
 console.log(aceChecker);
 console.log(deck)

 playerTotal.textContent = total;
})

const dealerSlot = document.querySelector('.pc-slot')
const dealerTotal = document.querySelector('.dealer-total')

const unfliped = document.createElement('div')
let dealerAceChecker = []
deal.addEventListener('click', function () {
 deal.setAttribute('disabled', 'disabled')
 btn.removeAttribute('disabled')
 stayBtn.removeAttribute('disabled')

 aceChecker.push(deck[0].getValue())
 dealerAceChecker.push(deck[1].getValue())
 aceChecker.push(deck[2].getValue())
 dealerAceChecker.push(deck[3].getValue())
 playerSlot.appendChild(deck[0].getHTML())
 dealerSlot.appendChild(deck[1].getHTML())
 playerSlot.appendChild(deck[2].getHTML())
 // dealerSlot.appendChild(deck[3].getHTML())

 dealerSlot.appendChild(unfliped)
 unfliped.classList.add('unfliped-card')

 total += (CARD_VALUE_MAP[deck[0].getValue()] + CARD_VALUE_MAP[deck[2].getValue()])
 if ((aceChecker.indexOf('A') !== -1) && total > 21) {
  total = total - 10
  aceChecker.splice(aceChecker.indexOf('A'), 1)

 } else {
  total = total;
 }
 pcTotalHiden += (CARD_VALUE_MAP[deck[1].getValue()] + CARD_VALUE_MAP[deck[3].getValue()])
 pcTotal += (CARD_VALUE_MAP[deck[1].getValue()])
 getPlayerCard()
 getPlayerCard()
 getPlayerCard()
 // getPlayerCard()
 console.log(deck);
 console.log(pcTotalHiden);

 if (total === 21) {
  playerTotal.textContent = `${total} black jack congrats`;
  return
 }
 if (pcTotalHiden === 21) {
  dealerSlot.removeChild(unfliped)
  dealerSlot.appendChild(deck[3].getHTML())

  dealerTotal.textContent = `dealer has 21`;
  return;
 }


 dealerTotal.textContent = pcTotal;
 playerTotal.textContent = total;
})


stayBtn.addEventListener('click', function () {
 btn.setAttribute('disabled', 'disabled')

 dealerSlot.removeChild(unfliped)
 dealerSlot.appendChild(deck[0].getHTML())
 pcTotal += CARD_VALUE_MAP[deck[0].getValue()]
 getPlayerCard()
 if ((dealerAceChecker.indexOf('A') !== -1) && pcTotal > 21) {
  pcTotal = pcTotal - 10
  dealerAceChecker.splice(dealerAceChecker.indexOf('A'), 1)

 } else {
  pcTotal = pcTotal;
 }
 while (pcTotal < 17) {
  dealerAceChecker.push(deck[0].getValue())
  dealerSlot.appendChild(deck[0].getHTML())
  pcTotal += CARD_VALUE_MAP[deck[0].getValue()]
  getPlayerCard()
  if ((dealerAceChecker.indexOf('A') !== -1) && pcTotal > 21) {
   pcTotal = pcTotal - 10
   dealerAceChecker.splice(dealerAceChecker.indexOf('A'), 1)

  } else {
   pcTotal = pcTotal;
  }
  if (pcTotal > 21) {
   dealerTotal.textContent = `${pcTotal} dealer bust`;
   // break;
   return
  }
 }
 if (pcTotal > total) {
  dealerTotal.textContent = `${pcTotal} dealer has won`;
  playerTotal.textContent = `you have ${total},sorry you lost dealer has ${pcTotal}`;
 } else if (total > pcTotal) {
  dealerTotal.textContent = `${pcTotal} dealer lost`;
  playerTotal.textContent = `nice you have ${total}, you won`;
 } else {
  dealerTotal.textContent = `you both have ${pcTotal},draw`;
  playerTotal.textContent = `you both have ${total},draw`;
 }
 console.log(deck.length);

 // dealerTotal.textContent = pcTotal;
})


function getPlayerCard() {
 deck.shift()
}

