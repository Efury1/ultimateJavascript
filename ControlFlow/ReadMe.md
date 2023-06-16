Control Flow

Conditional Statements
If ..else 

If (condition) {
    statement 
}

Switch statement 

Loops
For, while, d.. while, for..in, for.. of

They are all the same but there's a subtle different between how they start and end]

while loops:
conditions are evaluated ahead of time

Do while:
Do while loops are always excutred at least once event if this condition evaluates to false

Infinite Loop
Execute infinitely or forever. Infinite loops aren't limited to while loop. This can happen with while, do while and a for loop.

For in 
We use to interate over the properties of an o bejct 

We aren't doing what we usually do which is this:
for (initialExpression; condition; increment)

We are doing:
Hold the key of of of the props.
for (let key in person) {
    //accessing the value. We want to use the bracket notation when don't know at the time nwhat property we are //going to access
}

For-of 
We don't have to deal with the given index. SO in erach iteration this col=or will hold one of the iteams in array.
Iterate over items in an array.
for (let color of colours) {
    
}

Break and Continue
Continue will jump to the began ;to the begining of loop. Continue is not something that is reccomended to use.
