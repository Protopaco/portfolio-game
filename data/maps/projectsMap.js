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
    x: 625,
    y: 400
};

const eyePosition = {
    x: 50,
    y: 50
};

export const projectsMap = {
    buildingWallArray: buildingArray,
    buildingArray,
    playerPosition,
    eyePosition,
    BackButton
};
