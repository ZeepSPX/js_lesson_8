"use strict"

// Задача 7.Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за: за весь рік; у першій половині року; у другій половині року; за літо; за ІІ квартал; за парні місяці (з парними номерами); за місяці, які є початковими у сезоні (весна, літо, осінь, зима).---------------------------------------------------------------------------------


function totalPayments(payments) {
let total = 0

for (let i = 0; i < payments.length; i++) {
    total += payments[i]
    }
    return total
}
    
function paymentsInFirstHalfYear(payments) {
let total = 0

for (let i = 0; i < 6; i++) {
        total += payments[i]
    }
        return total
}
    
function paymentsInSecondHalfYear(payments) {
let total = 0

for (let i = 6; i < 12; i++) {
        total += payments[i]
    }
        return total
}

function summerPayments(payments) {
let total = 0

for (let i = 5; i <= 7; i++) {
        total += payments[i]
    }
        return total
}
    
function secondQuarterPayments(payments) {
let total = 0

for (let i = 3; i <= 5; i++) {
        total += payments[i]
    }
        return total
}
    
function evenMonthPayments(payments) {
let total = 0

for (let i = 0; i < payments.length; i += 2) {
        total += payments[i]
    }
        return total
}
    
function getSeasonStartMonth(month) {
    if (month < 3 || month === 12) {
        return 1; 
    } else if (month < 6) {
        return 4;
    } else if (month < 9) {
        return 7; 
    } else {
        return 10; 
    }
}
    
function seasonStartMonthPayments(payments) {
let total = 0

for (let i = 0; i < payments.length; i++) {
    if (i === getSeasonStartMonth(i)) {
        total += payments[i]
        }
    }
        return total
}
    
    let payments = [100, 200, 150, 300, 250, 400, 500, 450, 350, 550, 600, 700]
    
    document.write(`<div class="one__container"> <div> Оплата за весь рік: ${totalPayments(payments)} </div></div> `)
    document.write(`<div class="one__container"> <div> Оплата у першій половині року: ${paymentsInFirstHalfYear(payments)} </div></div> `)
    document.write(`<div class="one__container"> <div> Оплата у другій половині року: ${paymentsInSecondHalfYear(payments)} </div></div> `)
    document.write(`<div class="one__container"> <div> Оплата за літо: ${summerPayments(payments)}</div></div> `)
    document.write(`<div class="one__container"> <div> Оплата за 2 квартал: ${secondQuarterPayments(payments)} </div></div> `)
    document.write(`<div class="one__container"> <div> Оплата за парні місяці(за парними номерами): ${evenMonthPayments(payments)} </div></div> `)
    document.write(`<div class="one__container"> <div> Оплата за місяці, які є початковими у сезоні (весна, літо, осінь, зима): ${seasonStartMonthPayments(payments)} </div></div> `)

