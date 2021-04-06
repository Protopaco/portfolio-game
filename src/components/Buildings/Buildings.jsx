import React from 'react';
import Building from '../Building/Building';

export default function Buildings({ handlePopup, buildingArray }) {

    return buildingArray.map(building => {
        return (
            <Building
                key={building.name}
                building={building}
                handlePopup={handlePopup}
            />
        );
    });
}
