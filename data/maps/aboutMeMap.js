import { AboutMeBlock } from '../buildings/AboutMeBlock/AboutMeBlock';

const BackButton = {
    name: 'Back Button',
    type: 'building',
    position: { x: 1150, y: 30 },
    dimension: { x: 70, y: 70 },
};

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
