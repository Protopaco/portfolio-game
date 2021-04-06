import { AboutMeBlock } from '../buildings/AboutMeBlock/AboutMeBlock';
import { BackButton } from '../buildings/BackButton/BackButton';

const buildingArray = [AboutMeBlock, BackButton];

const playerPosition = {
    x: 50,
    y: 20
};

const eyePosition = {
    x: 50,
    y: 700
};


export const aboutMeMap = {
    buildingWallArray: buildingArray,
    buildingArray,
    playerPosition,
    eyePosition,
    BackButton
};
