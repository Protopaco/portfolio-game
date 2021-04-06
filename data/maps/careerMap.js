import { NightLight } from '../buildings/NightLight/NightLight';
import { DragBrunch } from '../buildings/DragBrunch/DragBrunch';
import { TacoHouse } from '../buildings/TacoHouse/TacoHouse';
import { Pablitos } from '../buildings/Pablitos/Pablitos';

const BackButton = {
    name: 'Back Button',
    type: 'building',
    position: { x: 1150, y: 30 },
    dimension: { x: 70, y: 70 },
};

const buildingArray = [BackButton, NightLight, DragBrunch, TacoHouse, Pablitos];

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

export const careerMap = {
    buildingWallArray: buildingArray,
    buildingArray,
    playerPosition,
    eyePosition,
    BackButton
};

