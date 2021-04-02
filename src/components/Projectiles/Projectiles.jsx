import React from 'react';

import Projectile from '../Projectile/Projectile';


export default function Projectiles({ projectileArray }) {

    return projectileArray.map(projectile =>
        <Projectile
            key={projectile.position}
            position={projectile.position}
        />
    );
}
