"use strict"

// Задача 6.Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).---------------------------------------------------------------------------------

function priceAndProductArray(prices, items, budget) {
    let priceAndProduct = []
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= budget) {
            priceAndProduct.push(items[i])
        }
    }
    return priceAndProduct
}

let price = [200, 10, 50, 980, 66]
let items = [`apple`, `banana`, `orange`, `pen`, `mango`]
let budget = parseInt(prompt(`Введіть наявну кількість грошей:`))

document.write(`<div class="one__container"> <div> Товар на суму ${budget}: ${priceAndProductArray(price, items, budget)}</div></div> `)