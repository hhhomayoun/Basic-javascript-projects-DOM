class Counter {
 constructor(element, value) {
  this.Counter = element;
  this.value = value;
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.resetBtn = element.querySelector('.reset');
  this.increase = this.increase.bind(this)
  this.decrease = this.decrease.bind(this)
  this.reset = this.reset.bind(this)
  this.increaseBtn.addEventListener('click', this.increase)
  this.decreaseBtn.addEventListener('click', this.decrease)
  this.resetBtn.addEventListener('click', this.reset)
 }
 increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value
 }
 decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value
 }
 reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value
 }
}
const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)

function getElement(selection) {
 const element = document.querySelector(selection)
 if (element) {
  return element
 }
 throw new Error`select the right element`

}