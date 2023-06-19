/*FizBuz */

//If number is divisible by 3 we get fiz.
//id disible by 5 we get buzz.
//If it's divisible by both 3 and 5 we get both 3 and 5, we get fizzBuz
//Not dibible by 3 or 5 -? input
//Not a number -- 'Not numbrtr */

const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
    if ((output % 3) && (output % 5)) {
        console.log('fizzBuz')
    }
    else if ((output % 3) == 0) {
        console.log('fizz')
    } 
    else if ((input % 5) == 0) {
        console.log('Buz')
    }
    
 
}