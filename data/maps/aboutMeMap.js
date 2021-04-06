import { AboutMeBlock } from '../buildings/AboutMeBlock/AboutMeBlock';
import { BackButton } from '../buildings/BackButton/BackButton';

const buildingArray = [AboutMeBlock, BackButton];

const playerPosition = {
    x: 1175,
    y: 500
};

const eyePosition = {
    x: 50,
    y: 500
};

const marqueeText = 'Blah Blah Blah, who wants to hear me talk about myself?   ';


export const aboutMeMap = {
    buildingWallArray: buildingArray,
    buildingArray,
    playerPosition,
    eyePosition,
    BackButton,
    marqueeText
};
