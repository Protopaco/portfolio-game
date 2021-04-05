
export default function eyeDirection(playerPosition, eyePosition) {

    const xDiff = playerPosition.x - eyePosition.x;
    const yDiff = playerPosition.y - eyePosition.y;

    let firstChoice;
    let secondChoice;

    //if virtical Difference greater
    switch (Math.abs(yDiff) >= Math.abs(xDiff)) {
        case true:
            yDiff > 0 ? firstChoice = 'down' : firstChoice = 'up';
            xDiff > 0 ? secondChoice = 'right' : secondChoice = 'left';
            break;

        case false:
            xDiff > 0 ? firstChoice = 'right' : firstChoice = 'left';
            yDiff > 0 ? secondChoice = 'down' : secondChoice = 'up';
            break;
    }

    return { firstChoice, secondChoice };

}

