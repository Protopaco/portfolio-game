import { NightLight } from '../buildings/NightLight/NightLight';
import { DragBrunch } from '../buildings/DragBrunch/DragBrunch';
import { TacoHouse } from '../buildings/TacoHouse/TacoHouse';
import { Pablitos } from '../buildings/Pablitos/Pablitos';
import { BackButton } from '../buildings/BackButton/BackButton';


const buildingArray = [BackButton, NightLight, DragBrunch, TacoHouse, Pablitos];

const playerPosition =
{
    x: 1125,
    y: 500
};

const eyePosition =
{
    x: 50,
    y: 50
};

const marqueeText = ['Look at all of my cool experience!', 'Think about the value I could bring to your team!', 'Shoot or click the boxes to find out more!'];


export const careerMap = {
    buildingWallArray: buildingArray,
    buildingArray,
    playerPosition,
    eyePosition,
    BackButton,
    marqueeText
};

