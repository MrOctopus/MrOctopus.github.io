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