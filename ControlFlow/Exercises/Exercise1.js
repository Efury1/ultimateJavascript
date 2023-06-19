/* Write a a fucntion that takes two numbers and returns the maximum of the two.
When writing code and functions, you should test it with 
different possible values  */
let number = max(4, 5);
console.log(number);

/*function (a, b) {
    if (a > b) return a;
    return b;
}*/

//The better way to write the code above
function max (a, b) {
    return (a > b) ? a : b;
}