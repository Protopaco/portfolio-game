
const WestWall = {
    name: 'Westwall',
    type: 'object',
    position: {
        x: 0,
        y: 0,
    },
    dimension: {
        x: 10,
        y: 800
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
        x: 1250,
        y: 10
    }


};

const EastWall = {
    name: 'EastWall',
    type: 'object',
    position: {
        x: 1240,
        y: 0
    },
    dimension: {
        x: 10,
        y: 800
    }
};

const SouthWall = {
    name: 'SouthWall',
    type: 'object',
    position: {
        x: 0,
        y: 800,
    },
    dimension: {
        x: 1250,
        y: 10
    }
};

export const wallArray = [WestWall, NorthWall, EastWall, SouthWall];
