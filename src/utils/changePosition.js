export default function (position, speed, dir) {
    console.log('🚀 ~ file: changePosition.js ~ line 2 ~ position, speed, dir', position, speed, dir);

    switch (dir) {
        case 'up':
            return {
                x: position.x,
                y: position.y - speed,
            };

        case 'down':
            return {
                x: position.x,
                y: position.y + speed
            };

        case 'left':
            return {
                x: position.x - speed,
                y: position.y
            };

        case 'right':
            return {
                x: position.x + speed,
                y: position.y
            };
    }
}
