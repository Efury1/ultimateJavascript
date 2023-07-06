/*function interest(principal, rate, years) {
    //using logical or to give default value
    rate = rate || 3.5;
    
    return principle * rate/ 100 * years;
}

console.log(interest(10000, 3.5, 5));*/

//ES6 way

//Settign default value.
function interest(principle, rate = 3.5, years = 5) {
    rate = rate || 3.5;
    years = years ||  5;

    return principal * rate / 100 * years;
}