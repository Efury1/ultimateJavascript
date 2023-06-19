

checkSpeed(100);

function checkSpeed(speed) {
    const speedLimit = 70;
    var excess = speedLimit - speed;
    var points;
    if(speed > speedLimit) {
        points = excess;
        return points;
    }
    if (points > 12) {
        return 'License suspended'
    }
}

