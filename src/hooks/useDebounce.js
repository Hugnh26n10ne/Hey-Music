import { useState, useEffect } from 'react';

function useDebounce(value, delay = 0) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;
