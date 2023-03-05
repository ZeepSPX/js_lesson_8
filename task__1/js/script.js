"use strict"

// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка))---------------------------------------------------------------------------------


let marks = [];

function fillArray(marks) {
let mark;
	do {
    		mark = prompt("Введіть оцінку або натисніть 'Відміна', щоб завершити введення:");
   		if (mark !== null) {
    		marks.push(Number(mark));
    	}
	} while (mark !== null);
}

function calculateAverage(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let average = sum / marks.length;
  return average;
}

function calculateCategory(marks) {
  let category;
  if (marks.includes(2)) {
    category = "двійочник";
  } else if (marks.includes(3)) {
    category = "трійочник";
  } else if (marks.every(mark => mark >= 4)) {
    category = "відмінник";
  } else {
    category = "хорошист";
  }
  return category;
}

fillArray(marks);
let average = calculateAverage(marks);
let category = calculateCategory(marks);

document.write(`<div class="one__container"> <div> Оцінки: ${marks}</div></div> `)
document.write(`<div class="one__container"> <div> Середній бал: ${average.toFixed(2)} </div></div> `)
document.write(`<div class="one__container"> <div> Категорія: ${category} </div></div> `)

