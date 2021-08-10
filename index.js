// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264);
}

function distanceTravelledInFeet(start, end) {
    return (Math.abs(start - end) * 264);
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    let fare;
    if (distance <= 400) {
        fare = 0;
    } else if (distance <= 2000) {
        fare = (distance - 400) * .02;
    } else if (distance <= 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }
    return fare;
}