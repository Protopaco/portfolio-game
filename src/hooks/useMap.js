import { useState, useRef } from 'react';
import { lobbyMap } from '../../data/maps/lobbyMap';
import { contactMap } from '../../data/maps/contactMap';
import { aboutMeMap } from '../../data/maps/aboutMeMap';
import { careerMap } from '../../data/maps/careerMap';
import { projectsMap } from '../../data/maps/projectsMap';


export const useMap = (movePlayer, resetEye) => {
    const [buildingArray, setBuildingArray] = useState(lobbyMap.buildingArray);
    const buildingWallArray = useRef(lobbyMap.buildingWallArray);
    const eyeStarting = useRef(lobbyMap.eyePosition);
    const [backButton, setBackButton] = useState(null);
    const [marqueeText, setMarqueeText] = useState(lobbyMap.marqueeText);

    const changeMap = ({ name }) => {
        switch (name) {
            case 'Lobby-Portal':
                movePlayer(lobbyMap.playerPosition);
                buildingWallArray.current = lobbyMap.buildingWallArray;
                setBuildingArray(lobbyMap.buildingArray);
                resetEye(lobbyMap.eyePosition);
                eyeStarting.current = lobbyMap.eyePosition;
                setBackButton(null);
                setMarqueeText(lobbyMap.marqueeText);
                break;
            case 'Contact-Portal':
                movePlayer(contactMap.playerPosition);
                buildingWallArray.current = contactMap.buildingWallArray;
                setBuildingArray(contactMap.buildingArray);
                resetEye(contactMap.eyePosition);
                eyeStarting.current = contactMap.eyePosition;
                setBackButton(contactMap.BackButton);
                setMarqueeText(contactMap.marqueeText);
                break;

            case 'About-Me-Portal':
                movePlayer(aboutMeMap.playerPosition);
                buildingWallArray.current = aboutMeMap.buildingWallArray;
                setBuildingArray(aboutMeMap.buildingArray);
                resetEye(aboutMeMap.eyePosition);
                eyeStarting.current = aboutMeMap.eyePosition;
                setBackButton(aboutMeMap.BackButton);
                setMarqueeText(aboutMeMap.marqueeText);
                break;
            case 'Career-Portal':
                movePlayer(careerMap.playerPosition);
                buildingWallArray.current = careerMap.buildingWallArray;
                setBuildingArray(careerMap.buildingArray);
                resetEye(careerMap.eyePosition);
                eyeStarting.current = careerMap.eyePosition;
                setBackButton(careerMap.BackButton);
                setMarqueeText(careerMap.marqueeText);
                break;
            case 'Projects-Portal':
                movePlayer(projectsMap.playerPosition);
                buildingWallArray.current = projectsMap.buildingWallArray;
                setBuildingArray(projectsMap.buildingArray);
                resetEye(projectsMap.eyePosition);
                eyeStarting.current = projectsMap.eyePosition;
                setBackButton(projectsMap.BackButton);
                setMarqueeText(projectsMap.marqueeText);

                break;

        }
    };


    return {
        buildingWallArray,
        buildingArray,
        eyeStarting,
        changeMap,
        backButton,
        marqueeText
    };
};
