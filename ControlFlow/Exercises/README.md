# README #
This README goes over the various exercises done in the codewithmoshi course.

------------------------------------
## Control Flow Concepts ##
Loops are used for if you'd like to run the same type of coder over and over again.

## While
Conditionals are evaluated ahead of time.

## Do while loops
Executes at least once if the conditional evaluates to false.
This is a loop that that executes a statement until the test condition evaluates to false. 


`let i = 0;
do {
    if (1 % 2 !== 0 ) console.log(i);
    i++;
} while (1 <= 5);`


## For in
This loop iteratoes over enumerable string properties of an object. We hodl the key of the props.

`const person = {
    name: 'Eliza'
}

for {let key in person} {
    console.log(key., person[key];
}`

## For-of
We don't have to deal with the given index. 

## Break and Continue
Break will jump out of the loop.

Condition will jump over one iteration in the loop. Meaning it will jump to the beginning of loop. Continue is not usually recommended to use.

## ∞ Infinite Loop
Execute forever. These are limipted to while loops. This can happen with do while loops and for loops.

------------------------------------
## Exercises ##

## Exercise 1
In this exercise we are writing a fucntion that takes two numbers and returns the maximum of the two. Here we are learning to use the conditional (ternary) operator instead of writing what is below:

`function (a, b) {
    if (a > b) return a;
    return b;
}`

This better syntax being:
condition ? exprIfTrue: exprIfFalse


## Exercise 2
In this exercise we are deciding whether the size is landscape. 

## Exercise 3
This is a test giving in interviews. The task can change slightly in most cases you print integers one-to-N, but print prize if divisible by tree, and "Buzz" if interger is divisible by five, and "FizzBuzz" if an integer is divisible by both three and five.

This is seen as a good test as there's many ways to achieved the ouput, but some methods show more programming skill becuase they adhere to good programming principles, allow flexibility for changes as well as time about time complexity. 

## Exercise 4
This exercise focuses on demerit points.
* The speed limits is 70. 
* For every 5 kilometer the person is over they accure one point. 
* If a driver gets more then 12 point than they suspended.


We used Math.floor for this exercise as part of out calculator. The math.floor() is used to return the closet integer that's smaller than or equal to the given number. 

Math.floor() is a built-in method that allows you to round down a given to the nearest integer less than or equal to the number. IT is commonly used when you need to truncate the decimal part of a nummber and obtain the integer part. 

Return stops the sexecution of a function and returns a value.

## Exercise 5
A function that takes a parameter called limit. 
* Shows all numbers until the limits
* Display whether they are odd or event

A limit is defined as a value that that a fucntion approaches the ouput for 
the given input values. 

We are using the operator called "modulus" that will tells us whether the it's divisible by 2. 
This is how we are going to figure out whether the number is ODD or Even.

## Exercise 6
Function that takes an array returns the numbers of truthy elements in an array. An easy way for us to check if the value if truthy or falsy is by passing it to the Boolean constructor function.

Truthy and Falsy Expressions
* Truthy values in Javascript, a truthy value is a value that is considered true when encountered in Boolean context.
* Falsy values in Javascript, a falsy value is a value that is considered false when envountered in a Boolean context. 

Falsy Values
* False
* 0
* -0
* ""
* null
* undefined
* NaN

All other values are considered truthy!

## Exercise 7
Functions for the multiples of 3 and 5. 

Multiples are what we get after multiplying the number. "Factors" are the numbers we can multiple together to get another number.

Examples:
* 5 x 1 = 5
* 5 x 2 = 10
* 5 x 12 = 60

We will be using % module to give us the remaind of the division, this we will know whether it's a multple.