import { useState, useRef } from 'react';
import { lobbyMap } from '../../data/maps/lobbyMap';
import { contactMap } from '../../data/maps/contactMap';


export const useMap = (movePlayer) => {
    const [currentMap, setCurrentMap] = useState(lobbyMap);
    const [buildingArray, setBuildingArray] = useState(lobbyMap.buildingArray);
    const buildingWallArray = useRef(lobbyMap.buildingWallArray);

    const changeMap = ({ name }) => {
        console.log(name);
        switch (name) {
            case 'Lobby-Portal':
                setCurrentMap(lobbyMap);
                movePlayer(lobbyMap.playerPosition);
                buildingWallArray.current = lobbyMap.buildingWallArray;
                setBuildingArray(lobbyMap.buildingArray);
                break;
            case 'Contact-Portal':
                setCurrentMap(contactMap);
                movePlayer(contactMap.playerPosition);
                buildingWallArray.current = contactMap.buildingWallArray;
                setBuildingArray(contactMap.buildingArray);
                break;
        }
    };


    return {
        buildingWallArray,
        buildingArray,
        changeMap
    };
};
