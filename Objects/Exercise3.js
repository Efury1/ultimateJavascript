

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

//Construction function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    } 
}

//Passing one a radius
const circle = new Circle(1);