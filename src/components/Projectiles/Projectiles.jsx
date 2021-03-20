import { useProjectile } from '../../hooks/useProjectile';


export default function Projectiles() {
    const { projectileArray } = useProjectile();
    return projectileArray;
}
