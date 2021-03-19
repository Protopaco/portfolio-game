import { AboutMe } from './AboutMe';

const wallLength = 10;
const { name, position, dimension } = AboutMe;

export const AboutMeWalls = [
    {
        name: `${name}-NorthWall`,
        type: 'object',
        position: {
            x: position.x,
            y: position.y
        },
        dimension: {
            x: dimension.x,
            y: wallLength
        }
    },
    {
        name: `${name}-EastWall`,
        type: 'object',
        position: {
            x: position.x,
            y: position.y
        },
        dimension: {
            x: wallLength,
            y: dimension.y - 60
        }
    },
    {
        name: `${name}-WestWall`,
        type: 'object',
        position: {
            x: position.x + dimension.x - wallLength,
            y: position.y
        },
        dimension: {
            x: wallLength,
            y: dimension.y - 60
        }
    },
    {
        name: `${name}-SouthWallEast`,
        type: 'object',
        position: {
            x: position.x,
            y: position.y + dimension.y - wallLength - 50
        },
        dimension: {
            x: dimension.x / 3,
            y: wallLength
        }
    },
    {
        name: `${name}-SouthWallWest`,
        type: 'object',
        position: {
            x: position.x + (dimension.x / 3) * 2,
            y: position.y + dimension.y - wallLength - 50
        },
        dimension: {
            x: dimension.x / 3,
            y: wallLength
        }
    },
    {
        name: `${name}-Portal`,
        type: 'portal',
        position: {
            x: position.x + (dimension.x / 3),
            y: position.y + dimension.y - wallLength - 100
        },
        dimension: {
            x: dimension.x / 3,
            y: wallLength
        }
    }
];