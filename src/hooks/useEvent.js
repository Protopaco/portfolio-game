import { useEffect } from 'react';

export default function useEvent(event, handleKeyPress) {

    useEffect(() => {
        window.addEventListener(event, handleKeyPress);

        return function cleanup() {
            window.removeEventListener(event, handleKeyPress);
        };
    });
}
