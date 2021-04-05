import { ContactEmail } from '../buildings/ContactEmail/ContactEmail';
import { ContactEmailWalls } from '../buildings/ContactEmail/ContactEmailWalls';


const reducer = (accumulator, walls) => {
    if (walls.length > 0) {
        accumulator.push(...walls);
    }
    return accumulator;
};

const buildingArray = [ContactEmail];

const buildingWalls = [ContactEmailWalls];

const buildingWallArray = buildingWalls.reduce(reducer, []);

const playerPosition =
{
    x: 625,
    y: 400
};

const eyePosition =
{
    x: 50,
    y: 50
};

export const contactMap = {
    buildingWallArray,
    buildingArray,
    playerPosition,
    eyePosition
};
