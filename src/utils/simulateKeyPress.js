
export default function simulateKeyPress(direction) {

    const keyEvent = new KeyboardEvent('keydown', { key: direction });

    window.dispatchEvent(keyEvent);
}

