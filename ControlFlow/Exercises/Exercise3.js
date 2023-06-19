 const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') 
        return NaN ;

    if ((output % 3) && (output % 5)) 
        return 'FizzBuzz';

   if (output % 3 == 0) 
        return 'Fizz';
    
    if ( input % 5 == 0) 
        return 'Buzz';
    
    return input;
}