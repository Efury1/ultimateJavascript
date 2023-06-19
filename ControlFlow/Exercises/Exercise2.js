

/*function isLandscape(width, height) {
    if (width > height) {
        return true;
    }
    return false;

}*/

//using the conditional operator
/*Don't want to return true or false explicity
and simply return the value of expression
therefore, you can do return (width > height)*/

console.log(isLandscape(800, 600));
/*function isLandscape(width, height) {
    return (width > height) ? true : false;
}*/

function isLandscape(width, height) {
    return (width > height);
}