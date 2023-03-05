"use strict"

// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».---------------------------------------------------------------------------------
const students = ['Іван', 'Петро', 'Марія', 'Іван', 'Олександр', 'Микола', 'Іван', 'Іван']

function countName(name, studentsArray) {
    let count = 0
    for (let i = 0; i < studentsArray.length; i++) {
        if (studentsArray[i] === name) {
            count++
        }
    }
    return count
}

const ivanCount = countName('Іван', students)

document.write(`<div class="one__container"> <div> Кількість разів коли зустрічається ім'я "Іван": ${ivanCount}</div></div> `)
