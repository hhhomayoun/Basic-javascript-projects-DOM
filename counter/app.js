const counter = document.querySelector('#value');
// const btnIncrease = document.querySelector('.increase');
// const btnDecrease = document.querySelector('.decrease');
// const btnReset = document.querySelector('.reset');
const btns = document.querySelectorAll('.btn');

let count = 0

btns.forEach(function (btn) {
 btn.addEventListener('click', function (e) {
  if (e.currentTarget.classList.contains('increase')) {
   count++;

  } else if (e.currentTarget.classList.contains('decrease')) {
   count--;

  } else {
   count = 0;

  }
  if (count > 0) {
   counter.style.color = 'green';
  } else if (count < 0) {
   counter.style.color = 'red';
  } else {
   counter.style.color = 'black';
  }
  counter.textContent = count;
 })
})
