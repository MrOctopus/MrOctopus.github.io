import { useState, useEffect } from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { styled } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';

import { Themes } from 'src/themes';

const Popup = styled(PopperUnstyled)({
    zIndex: 1000,
});

const SelectTheme = () => {
    const {mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted)
        return null;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleChange = (event) => {
        setAnchorEl(null);

        const option = event.currentTarget.textContent.toLowerCase();

        if (option in Themes) 
            setMode(option);
        else
            setMode('light');
    };

    return (
        <div>
            <Button
                onClick={handleClick}
                sx={{ borderRadius: 0 }}
            >
                Theme
            </Button>
            <Popup
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                disablePortal
                modifiers={[
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 4],
                        },
                    },
                ]}
            >
                <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                    <MenuList
                        variant="outlined"
                        sx={{ boxShadow: 'md', bgcolor: 'background.body' }}
                    >
                        {Object.keys(Themes).map((themeName, index) => 
                            <MenuItem key={`themeoption-${index}`} onClick={handleChange}>
                                {themeName}
                            </MenuItem>
                        )}
                    </MenuList>
                </ClickAwayListener>
            </Popup>
        </div>
    );
};

const NavBar = () => {
    return (
        <Box>
            <SelectTheme />
        </Box>
    );
};

export default NavBar;