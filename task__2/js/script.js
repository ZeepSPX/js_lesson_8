"use strict"

// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран: номери днів, протягом яких кількість відвідувачів була меншою за 20; номери днів, коли кількість відвідувачів була мінімальною; номери днів, коли кількість відвідувачів була мінімальною; загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.----------------------------------------
let visitors = []
let input
const daysInWeek = 7

for (let i = 0; i < daysInWeek; i++) {
    input = parseInt(prompt(`Введіть кількість відвідувачів за день ${i + 1}:`))
    visitors.push(input)
}

function findMinValue(visit) {
    let min = visit[0]
    for (let i = 0; i < visit.length; i++) {
        if (visit[i] < min) {
            min = visit[i]
        }
    }
    return min
}

function findMaxValue(visit) {
    let max = visit[0]
    for (let i = 0; i < visit.length; i++) {
        if (visit[i] > max) {
            max = visit[i]
        }
    }
    return max
}

function findIndexesByValue(visit, value) {
    let indexes = []
    for (let i = 0; i < visit.length; i++) {
        if (visit[i] === value) {
            indexes.push(i)
        }
    }
    return indexes
}

function countClientsDay(visit) {
    let workDays = 0
    let weekendDays = 0
    let clientsWorkDays = 0
    let clientsWeekendDays = 0

    for (let i = 1; i < visit.length; i++) {
        if (i % 7 === 5 || i % 7 === 6) {
            weekendDays++
            clientsWeekendDays += parseInt(visit[i])
        } else {
            workDays++
            clientsWorkDays += parseInt(visit[i])
        }
    }

    return {
        workDays: workDays,
        weekendDays: weekendDays,
        clientsWorkDays: clientsWorkDays,
        clientsWeekendDays: clientsWeekendDays
    }
}

function findDaysWithLessThan20Clients(visit) {
    let daysWithLessThan20Clients = []
    for (let i = 0; i < visit.length; i++) {
        if (visit[i] < 20) {
            daysWithLessThan20Clients.push(i + 1)
        }
    }
    return daysWithLessThan20Clients
}

let minValue = findMinValue(visitors)
let maxValue = findMaxValue(visitors)
let minIndexes = findIndexesByValue(visitors, minValue)
let maxIndexes = findIndexesByValue(visitors, maxValue)
let countClients = countClientsDay(visitors)
let daysWithLessThan20Clients = findDaysWithLessThan20Clients(visitors)

document.write(`<div class="one__container"> <div> Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${daysWithLessThan20Clients.join(`,`)}</div></div> `)
document.write(`<div class="one__container"> <div> Дні, коли кількість відвідувачів була найбільшою: ${maxIndexes.join(` `)} </div></div> `)
document.write(`<div class="one__container"> <div> Дні, коли кількість відвідувачів була найменшою: ${minIndexes.join(` `)} </div></div> `)
document.write(`<div class="one__container"> <div> Кількість клієнтів за робочі дні: ${countClients.clientsWorkDays} </div></div> `)
document.write(`<div class="one__container"> <div> Кількість клієнтів в вихідні дні: ${countClients.clientsWeekendDays} </div></div> `)




