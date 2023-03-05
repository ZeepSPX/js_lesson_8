"use strict"

// Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які : починаються на букву «А»; перша і остання літери співпадають; складаються з більше ніш 5 символів; ---------------------------------------------------------------------------------



function countNumberFirstA(plate) {
    let count = 0
    for (let i = 0; i < plate.length; i++) {
        if (plate[i][0] === `А`) {
            count++
        }
    }
    return count++
}

function countNumberFirstAndLast(plate) {
    let count = 0
    for (let i = 0; i < plate.length; i++) {
        const firstLetter = plate[i][0]
        const lastLetter = plate[i][plate[i].length - 1]
        if (firstLetter === lastLetter) {
            count++
        }
    }
    return count
}

function countNumberMore5(plate) {
    let count = 0
    for (let i = 0; i < plate.length; i++) {
        if (plate[i].length > 5) {
            count ++
        }        
    }
    return count
}

const plateNumber = ['АА5421АБ', 'АА4578АА', 'ВА4582ЛО', 'МЛ098Р', 'ОЛ8ОФ', 'ЛО1', 'ЛОТВАРТ', 'ХРЕЩЕНА', 'БАДАН', 'КАПА', 'АНАРХІЯ', 'АЦТЕК', 'АЙБОК']

document.write(`<div class="one__container"> <div> Всі номера які починаютсья на А: ${countNumberFirstA(plateNumber)} </div></div> `)
document.write(`<div class="one__container"> <div> Всі номера в яких перша і остання буква співпадають: ${countNumberFirstAndLast(plateNumber)} </div></div> `)
document.write(`<div class="one__container"> <div> Всі номера в яких більше 5 знаків: ${countNumberMore5(plateNumber)} </div></div> `)





