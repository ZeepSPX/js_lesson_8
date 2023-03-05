"use strict"

// Задача 5.Дано послідовність оцінок учня. Підрахувати кількість: двійок кількість хороших оцінок (добре, відмінно); кількість оцінок, які нижче середнього.---------------------------------------------------------------------------------

function countTwoRating(rating) {
    let count = 0 
    for (let i = 0; i < rating.length; i++) {
        if (rating[i] === 2) {
            count++
        }      
    }
    return count
}

function countGoodRating(rating) {
    let count = 0
    for (let i = 0; i < rating.length; i++) {
        if (rating[i] === 5 || rating[i] === 4 ) {
            count ++
        }
    }
    return count
}

function countAverageRating(rating) {
    let average = calculateAverage(rating)
    let count = 0
    for (let i = 0; i < rating.length; i++) {
        if (parseInt(rating[i]) < average) {
            count++
        }
    }
    return count
}

function calculateAverage(rating) {
    let sum = 0
    for (let i = 0; i < rating.length; i++) {
        sum += parseInt(rating[i])
    }
    return Math.floor(sum / (rating.length - countGoodRating(rating)))
}

let rating = [5, 4, 2, 3, 5, 5, 4 ]

document.write(`<div class="one__container"> <div> Кількість двійок: ${countTwoRating(rating)} </div></div> `)
document.write(`<div class="one__container"> <div> Кількість хороших оцінок: ${countGoodRating(rating)} </div></div> `)
document.write(`<div class="one__container"> <div> Кількість оцінок які нижче середнього ${countAverageRating(rating)} </div></div> `)