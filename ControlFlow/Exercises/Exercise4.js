

checkSpeed(109);

function checkSpeed(speed) {
    const speedLimit = 70;
    var excess = speed - speedLimit;
    const kmPerPoint = 5;
    pointSystem = 12;
    if(speed <= speedLimit) {
        console.log("Your speed is good");
    }
    else {
        const points = Math.floor((excess) / kmPerPoint);
        if (points >= pointSystem) {
            console.log('License suspended');
        }
        else {
            console.log('Points', points)
        }
    }
}