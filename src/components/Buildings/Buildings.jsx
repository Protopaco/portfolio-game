import React from 'react';
import { buildingArray } from '../../../data/buildings';
import Building from '../Building/Building';

export default function Buildings() {

    return buildingArray.map(building => {
        return (
            <Building
                key={building.name}
                building={building}
            />
        );
    });
}
