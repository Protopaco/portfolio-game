const wallLength = 30;
const chimneyOffset = 30;

export default function lobbyBuildingWalls({ name, position, dimension }) {
    return [
        {
            name: `${name}-NorthWall`,
            type: 'object',
            position: {
                x: position.x,
                y: position.y + chimneyOffset
            },
            dimension: {
                x: dimension.x,
                y: wallLength
            }
        },
        {
            name: `${name}-WestWall`,
            type: 'object',
            position: {
                x: position.x,
                y: position.y + chimneyOffset
            },
            dimension: {
                x: wallLength,
                y: dimension.y - wallLength - chimneyOffset
            }
        },
        {
            name: `${name}-EastWall`,
            type: 'object',
            position: {
                x: position.x + dimension.x - wallLength,
                y: position.y + chimneyOffset
            },
            dimension: {
                x: wallLength,
                y: dimension.y - wallLength - chimneyOffset
            }
        },
        {
            name: `${name}-SouthWallWest`,
            type: 'object',
            position: {
                x: position.x,
                y: position.y + dimension.y - chimneyOffset
            },
            dimension: {
                x: dimension.x / 3,
                y: wallLength
            }
        },
        {
            name: `${name}-SouthWallEast`,
            type: 'object',
            position: {
                x: position.x + (dimension.x / 3) * 2,
                y: position.y + dimension.y - chimneyOffset
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
}
