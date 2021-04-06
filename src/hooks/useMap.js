import { useState, useRef } from 'react';
import { lobbyMap } from '../../data/maps/lobbyMap';
import { contactMap } from '../../data/maps/contactMap';
import { aboutMeMap } from '../../data/maps/aboutMeMap';
import { careerMap } from '../../data/maps/careerMap';


export const useMap = (movePlayer, resetEye) => {
    const [buildingArray, setBuildingArray] = useState(lobbyMap.buildingArray);
    const buildingWallArray = useRef(lobbyMap.buildingWallArray);
    const eyeStarting = useRef(lobbyMap.eyePosition);
    const [backButton, setBackButton] = useState(null);

    const changeMap = ({ name }) => {
        console.log(name);
        switch (name) {
            case 'Lobby-Portal':
                movePlayer(lobbyMap.playerPosition);
                buildingWallArray.current = lobbyMap.buildingWallArray;
                setBuildingArray(lobbyMap.buildingArray);
                resetEye(lobbyMap.eyePosition);
                eyeStarting.current = lobbyMap.eyePosition;
                setBackButton(null);
                break;
            case 'Contact-Portal':
                movePlayer(contactMap.playerPosition);
                buildingWallArray.current = contactMap.buildingWallArray;
                setBuildingArray(contactMap.buildingArray);
                resetEye(contactMap.eyePosition);
                eyeStarting.current = contactMap.eyePosition;
                setBackButton(contactMap.BackButton);
                break;

            case 'About-Me-Portal':
                movePlayer(aboutMeMap.playerPosition);
                buildingWallArray.current = aboutMeMap.buildingWallArray;
                setBuildingArray(aboutMeMap.buildingArray);
                resetEye(aboutMeMap.eyePosition);
                eyeStarting.current = aboutMeMap.eyePosition;
                setBackButton(aboutMeMap.BackButton);
                break;
            case 'Career-Portal':
                movePlayer(careerMap.playerPosition);
                buildingWallArray.current = careerMap.buildingWallArray;
                setBuildingArray(careerMap.buildingArray);
                resetEye(careerMap.eyePosition);
                eyeStarting.current = careerMap.eyePosition;
                setBackButton(careerMap.BackButton);
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
