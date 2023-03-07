let num1 = getRandomCard();
let num2 = getRandomCard();
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function getRandomCard() {
    return Math.floor( Math.random() * 100 ) + 1;
}

function add() {
    let result = num1 + num2;
    sumEl.textContent = "Sum:" + " " + result
}

function sub() {
    let result = num1 - num2;
    sumEl.textContent = "Sum:" + " " + result
}

function di() {
    let result = num1 / num2;
    sumEl.textContent = "Sum:" + " " + result
}

function mu() {
    let result = num1 * num2;
    sumEl.textContent = "Sum:" + " " + result
}