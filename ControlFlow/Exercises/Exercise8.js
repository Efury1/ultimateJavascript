
const marks = [80, 80, 50];

console.log(calculateGrade(marks))

function calculateGrade(marks) {
    //sum divided by array length
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    average = sum / marks.length;
    if (average <= 100 && average >= 90) {
        return average, console.log('A');
    }
    else if (average <= 89 && average >= 80) {
        return average, console.log('B');
    }
    else if (average <= 79 && average >= 70) {
        return average, console.log('C');
    }
    else if (average <= 79 && average >= 70) {
        return average, console.log('D');
    }
    
    
}