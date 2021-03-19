import { AboutMe } from './buildings/AboutMe/AboutMe';
import { AboutMeWalls } from './buildings/AboutMe/AboutMeWalls';
import { Projects } from './buildings/Projects/Projects';
import { Career } from './buildings/Career/Carrer';
import { Contact } from './buildings/Contact/Contact';
import { ContactWalls } from './buildings/Contact/ContactWalls';



const reducer = (accumulator, walls) => {
    if (walls.length > 0) {
        accumulator.push(...walls);
    }
    return accumulator;
};

export const buildingArray = [AboutMe, Projects, Career, Contact];

const buildingWalls = [AboutMeWalls, ContactWalls];

export const buildingWallArray = buildingWalls.reduce(reducer, []);
