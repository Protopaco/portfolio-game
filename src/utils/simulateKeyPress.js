
let interval;
export function simulateKeyPress(direction) {

    interval = setInterval(() => {
        const keyEvent = new KeyboardEvent('keydown', { key: direction });

        window.dispatchEvent(keyEvent);
    }, 50);
}

export function simulateKeyUp() {
    clearInterval(interval);
}

export function simulateSingleKeyPress(key) {
    const keyEvent = new KeyboardEvent('keydown', { key });

    window.dispatchEvent(keyEvent);
}

