import { AboutMe } from '../buildings/AboutMe/AboutMe';
import { Projects } from '../buildings/Projects/Projects';
import { Contact } from '../buildings/Contact/Contact';
import { Career } from '../buildings/Career/Career';
import lobbyBuildingWalls from '../../src/utils/lobbyBuildingWalls';


const reducer = (accumulator, building) => {
    const wallArray = lobbyBuildingWalls(building);
    return [...accumulator, ...wallArray];
};

const buildingArray = [AboutMe, Projects, Career, Contact];

const buildingWallArray = buildingArray.reduce(reducer, []);

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

const marqueeText = 'Welcome to my portfolio! Use the arrow keys or buttons to explore.  Enjoy!   ';

export const lobbyMap = {
    buildingWallArray,
    buildingArray,
    playerPosition,
    eyePosition,
    marqueeText
};
