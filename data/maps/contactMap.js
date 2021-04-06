import { ContactEmail } from '../buildings/ContactEmail/ContactEmail';
import { ContactGithub } from '../buildings/ContactGithub/ContactGithub';
import { ContactLinkedIn } from '../buildings/ContactLinkedIn/ContactLinkedIn';
import { ContactPhone } from '../buildings/ContactPhone/ContactPhone';
import { Resume } from '../buildings/Resume/Resume';
import { BackButton } from '../buildings/BackButton/BackButton';

const buildingArray = [
    ContactPhone,
    ContactEmail,
    ContactLinkedIn,
    ContactGithub,
    Resume,
    BackButton];



const playerPosition =
{
    x: 625,
    y: 400
};

const eyePosition =
{
    x: 950,
    y: 50
};

const marqueeText = 'I\'d love to hear from you! Shoot or click the boxes to interact.   ';

export const contactMap = {
    buildingWallArray: buildingArray,
    buildingArray,
    playerPosition,
    eyePosition,
    BackButton,
    marqueeText
};
