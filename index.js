// Code your solution in this file!
// First test returns a distance in blocks
function distanceFromHqInBlocks (block) {
    return Math.abs(block - 42);
}

function distanceFromHqInFeet (block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet (start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400) {
        return 0;
    }
    else if(distance > 400 && distance <=2000) {
        return (distance - 400) * 0.02;
    }
    else if(distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

}