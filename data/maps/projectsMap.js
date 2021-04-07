import { Gibberish } from '../buildings/Gibberish/Gibberish';
import { BackButton } from '../buildings/BackButton/BackButton';
import { AlchemyLectures } from '../buildings/AlchemyLectures/AlchemyLectures';
import { LovingMonsters } from '../buildings/LovingMonsters/LovingMonsters';
import { Dwellingly } from '../buildings/Dwellingly/Dwellingly';

const buildingArray = [
    Gibberish,
    AlchemyLectures,
    LovingMonsters,
    Dwellingly,
    BackButton];

const playerPosition = {
    x: 60,
    y: 60
};

const eyePosition = {
    x: 50,
    y: 550
};

const marqueeText = ['Click on the links to see more about the cool stuff I\'ve been made!', 'Many thanks to my awesome teammates!'];


export const projectsMap = {
    buildingWallArray: buildingArray,
    buildingArray,
    playerPosition,
    eyePosition,
    BackButton,
    marqueeText
};
