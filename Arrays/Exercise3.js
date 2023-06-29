
// to copy line shift + alt + down (didn't work) 
const courses = [
    { id: 1, name: 'a'},
    { id: 1, name: 'b'},
];

//This will make it false
//When we check for equality it's looking at memory 
//Theres two different places in memory
//courses.includes({ id: 1, name: 'a'});

//Each element in the array has a course object
/*const course = courses.find(function(course) {
    return course.name === 'a';
}); */

const course = courses.find((course) {
    return course.name === 'a'
});

console.log(course);