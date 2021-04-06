import { wallWidth, engineHeight, engineWidth } from '../src/sizeConstants';

const WestWall = {
    name: 'Westwall',
    type: 'object',
    position: {
        x: 0,
        y: 0,
    },
    dimension: {
        x: wallWidth,
        y: engineHeight
    }
};

const NorthWall = {
    name: 'NorthWall',
    type: 'object',
    position: {
        x: 0,
        y: 0
    },
    dimension: {
        x: engineWidth,
        y: wallWidth
    }


};

const EastWall = {
    name: 'EastWall',
    type: 'object',
    position: {
        x: engineWidth - wallWidth,
        y: 0
    },
    dimension: {
        x: wallWidth,
        y: engineHeight
    }
};

const SouthWall = {
    name: 'SouthWall',
    type: 'object',
    position: {
        x: 0,
        y: engineHeight,
    },
    dimension: {
        x: engineWidth,
        y: wallWidth
    }
};

export const wallArray = [WestWall, NorthWall, EastWall, SouthWall];
