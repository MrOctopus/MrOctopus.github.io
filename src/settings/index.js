
import { useState, useEffect } from 'react';
import { isServer } from 'src/utils'; 

export const getSetting = (key, defaultValue = null) => {
    if (isServer())
        return defaultValue;

    const storedValue = localStorage.getItem(key);

    if (storedValue === null)
        return defaultValue;

    return storedValue;
};

export const setSetting = (key, value) => {
    if (isServer())
        return;

    localStorage.setItem(key, value);
};

export const useStatePersistent = (key, defaultValue) => {
    const [state, setState] = useState(defaultValue);
    const setStateProxy = (newValue) => {
        setState(newValue);
        setSetting(key, newValue);
    };

    useEffect(() => {
        setState(getSetting(key, defaultValue));
    }, []);

    return [state, setStateProxy];
};