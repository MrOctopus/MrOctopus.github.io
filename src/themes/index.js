
import { createContext } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { getSetting, useStatePersistent } from 'src/settings';
import { isServer } from 'src/utils';

import defaultTheme from './default'
import darkTheme from './dark';

// Ensures no funky string conversions
export const getThemeFromString = (str) => {
    return (str in Themes) ? Themes[str] : Themes.default;
};

export const getThemePreference = () => {
    if (isServer()) return 'default';
    return (window.matchMedia("(prefers-color-scheme: dark)").matches) ? 'dark' : 'default';
};

export const Themes = {
    default: defaultTheme,
    dark: darkTheme,
};

export const ThemeContext = createContext({
    selectedThemeString: 'default',
    setSelectedThemeString: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [selectedThemeString, setSelectedThemeString] = useStatePersistent('theme', 'default');
    const theme = createTheme(getThemeFromString(selectedThemeString).mui);

    return (
        <ThemeContext.Provider 
            value={{
                selectedThemeString: selectedThemeString,
                setSelectedThemeString: setSelectedThemeString,
            }}
        >
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};