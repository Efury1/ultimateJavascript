
showPrimes(20)

function showPrimes(limit) {
    for (let number = 2; number < limit; number++) {

        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break; // break out of look
            }
        }
        if (isPrime) console.log(number);
    }
}