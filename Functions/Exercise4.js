/*Calcualte total price of items in cart */
function sum(discount, ...prices) {
    const total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));