const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

let bcColor = [];
btn.addEventListener("click", function () {
 getRandomNum();
 document.body.style.backgroundColor = '#' + bcColor.join('');
 color.textContent = `#${bcColor.join('')}`;
 bcColor = [];
})

function getRandomNum() {
 let num;
 for (let i = 0; i < 6; i++) {
  num = hex[Math.floor(Math.random() * hex.length)];
  bcColor.push(num);
 }
 console.log(bcColor);
}