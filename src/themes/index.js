import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

import defaultTheme from './default'
import darkTheme from './dark';

export const Themes = {
    light: defaultTheme,
    dark: darkTheme,
};

export const ThemeProvider = ({ children }) => {
    return (
        <CssVarsProvider theme={extendTheme({
            colorSchemes: Themes
        })}>
            {children}
        </CssVarsProvider>
    );
};