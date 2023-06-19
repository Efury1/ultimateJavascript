 const output = fizzBuzz(10);
 console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') 
        return NaN ;

    if ((input % 3) && (input % 5)) 
        return 'FizzBuzz';

   if (input % 3 == 0) 
        return 'Fizz';
    
    if ( input % 5 == 0) 
        return 'Buzz';
    
    return input;
}