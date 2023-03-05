"use strict"

// Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.---------------------------------------------------------------------------------


function calculateTotalWinning(winningArray) {
	let totalWinning = 0;
	let userChoice = true;
	
	while (userChoice) {
	  // Запитати користувача про індекс елементу
	let index = prompt(`Введіть індекс елементу масиву (від 0 до ${winningArray.length - 1}):`);
	  // Перевірити, чи користувач відмовився від вибору
	if (index === null) {
		userChoice = false;
		continue;
	}
	  // Перетворити рядок на число та перевірити, чи відповідає індекс умовам
	index = parseInt(index);
	if (isNaN(index) || index < 0 || index >= winningArray.length) {
		alert('Невірний ввід!');
		continue;
		}
	  	// Додати виграш до загальної суми
		totalWinning += winningArray[index];
	}
	return totalWinning;
}
// Приклад виклику функції
let winningArray = [-250, 300, 150, -100, 50, 200, -300, 100, -400, 350];
let totalWinning = calculateTotalWinning(winningArray);
console.log(``);
document.write(`<div class="one__container"> <div> Загальний виграш: ${totalWinning} </div></div> `)