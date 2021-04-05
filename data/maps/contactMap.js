import { ContactEmail } from '../buildings/ContactEmail/ContactEmail';
import { ContactGithub } from '../buildings/ContactGithub/ContactGithub';
import { ContactLinkedIn } from '../buildings/ContactLinkedIn/ContactLinkedIn';
import { ContactPhone } from '../buildings/ContactPhone/ContactPhone';

const BackButton = {
    name: 'Back Button',
    type: 'building',
    position: { x: 1150, y: 30 },
    dimension: { x: 70, y: 70 },
};

const buildingArray = [
    ContactPhone,
    ContactEmail,
    ContactLinkedIn,
    ContactGithub,
    BackButton];



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

export const contactMap = {
    buildingWallArray: buildingArray,
    buildingArray,
    playerPosition,
    eyePosition,
    BackButton
};
