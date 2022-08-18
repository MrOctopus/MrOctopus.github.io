import { GlobalStyles } from '@mui/system';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

import defaultTheme from './default'
import darkTheme from './dark';

export const Themes = {
    light: defaultTheme,
    dark: darkTheme,
};

export const ThemeProvider = ({ children }) => {
    return (
        <CssVarsProvider disableTransitionOnChange theme={extendTheme({
            colorSchemes: Themes
        })}>
            <GlobalStyles
                styles={(theme) => ({
                    body: {
                        margin: 0,
                        fontFamily: theme.vars.fontFamily.body,
                    },
                })}
            />
            {children}
        </CssVarsProvider>
    );
};