"use strict"

// Задача 9.Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.---------------------------------------------------------------------------------


function battleship() {
	const boardSize = parseInt(prompt('Введіть розмір дошки'))
	const numShips = parseInt(prompt('Введіть кількість кораблів'))
	const board = []

	for (let i = 0; i < boardSize; i++) {
		board.push(new Array(boardSize).fill(0))
	}

	let shipsPlaced = 0
	while (shipsPlaced < numShips) {
	  const row = Math.floor(Math.random() * boardSize)
	  const col = Math.floor(Math.random() * boardSize)
		if (board[row][col] === 0) {
		board[row][col] = 1
		shipsPlaced++
		}
	}

	let numShipsSunk = 0
	while (numShipsSunk < numShips) {
	const rowGuess = parseInt(prompt(`Введіть номер рядка від 0 до ${boardSize - 1}`))
	const colGuess = parseInt(prompt(`Введіть номер стовпця від 0 до ${boardSize - 1}`))
	if (board[rowGuess][colGuess] === 1) {
		alert('Ви потопили корабель!')
		board[rowGuess][colGuess] = 0
		numShipsSunk++
	} else {
		alert('Промах!') 
	}
	}
	
	alert('Ви перемогли!')
}

battleship()

