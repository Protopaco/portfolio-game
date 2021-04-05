import { useState, useRef } from 'react';
import { lobbyMap } from '../../data/maps/lobbyMap';
import { contactMap } from '../../data/maps/contactMap';
import { aboutMeMap } from '../../data/maps/aboutMeMap';


export const useMap = (movePlayer, resetEye) => {
    const [buildingArray, setBuildingArray] = useState(lobbyMap.buildingArray);
    const buildingWallArray = useRef(lobbyMap.buildingWallArray);
    const [eyeStarting, setEyeStarting] = useState(lobbyMap.eyePosition);
    const [backButton, setBackButton] = useState(null);

    const changeMap = ({ name }) => {
        console.log(name);
        switch (name) {
            case 'Lobby-Portal':
                movePlayer(lobbyMap.playerPosition);
                buildingWallArray.current = lobbyMap.buildingWallArray;
                setBuildingArray(lobbyMap.buildingArray);
                resetEye(lobbyMap.eyePosition);
                setEyeStarting(lobbyMap.eyePosition);
                setBackButton(null);
                break;
            case 'Contact-Portal':
                movePlayer(contactMap.playerPosition);
                buildingWallArray.current = contactMap.buildingWallArray;
                setBuildingArray(contactMap.buildingArray);
                resetEye(contactMap.eyePosition);
                setEyeStarting(contactMap.eyePosition);
                setBackButton(contactMap.BackButton);
                break;

            case 'About-Me-Portal':
                movePlayer(aboutMeMap.playerPosition);
                buildingWallArray.current = aboutMeMap.buildingWallArray;
                setBuildingArray(aboutMeMap.buildingArray);
                resetEye(aboutMeMap.eyePosition);
                setEyeStarting(aboutMeMap.eyePosition);
                setBackButton(aboutMeMap.BackButton);
                break;

        }
    };


    return {
        buildingWallArray,
        buildingArray,
        eyeStarting,
        changeMap,
        backButton
    };
};
