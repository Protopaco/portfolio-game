import { useEffect } from 'react';
import handleKeyPress from './handleKeyPress';

export default function useEvent(event) {

    useEffect(() => {
        window.addEventListener(event, handleKeyPress);

        return function cleanup() {
            window.removeEventListener(event, handleKeyPress);
        };
    });
}
