import { useContext } from 'react';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';

import { ThemeContext, getThemeFromString } from 'src/themes';

const NavBar = () => {
    const {selectedThemeString, setSelectedThemeString} = useContext(ThemeContext);
    const selectedTheme = getThemeFromString(selectedThemeString);

    const toggleTheme = (event) => {
        setSelectedThemeString(selectedTheme.nextUp);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton onClick={toggleTheme}>
                        {selectedTheme.icon}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;