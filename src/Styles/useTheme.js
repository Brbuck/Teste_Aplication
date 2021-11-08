import { useState, useEffect } from 'react';

function useTheme(key, startValue) {
    const [theme, setTheme] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue) {
            return JSON.parse(storageValue);
        } else {
            return startValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(theme));
    }, [theme, key]);

    return [theme, setTheme];
}

export default useTheme;