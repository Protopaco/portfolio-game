import { AboutMe } from './buildings/AboutMe/AboutMe';
import { AboutMeWalls } from './buildings/AboutMe/AboutMeWalls';
import { Projects } from './buildings/Projects/Projects';
import { ProjectsWalls } from './buildings/Projects/ProjectsWalls';
import { Contact } from './buildings/Contact/Contact';
import { ContactWalls } from './buildings/Contact/ContactWalls';
import { Career } from './buildings/Career/Career';
import { CareerWalls } from './buildings/Career/CareerWalls';



const reducer = (accumulator, walls) => {
    if (walls.length > 0) {
        accumulator.push(...walls);
    }
    return accumulator;
};

export const buildingArray = [AboutMe, Projects, Career, Contact];

const buildingWalls = [AboutMeWalls, ContactWalls, CareerWalls, ProjectsWalls];

export const buildingWallArray = buildingWalls.reduce(reducer, []);
