import ClickAwayListener from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';

import { useState, useEffect } from 'react';
import { useColorScheme } from '@mui/joy/styles';

import { Themes } from 'src/themes';
import { capitalize } from 'src/utils';

const SideBar = ({sidebarState}) => {
    const [showSidebar, setShowSidebar] = sidebarState;
    const {mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted)
        return null;
    if (!showSidebar)
        return null;

    const handleChange = (event) => {
        const option = event.currentTarget.textContent.toLowerCase();

        if (option in Themes) 
            setMode(option);
        else
            setMode('light');
    };

    return (
        <ClickAwayListener onClickAway={() => {
            setShowSidebar(false);
        }}>
            <Box
                sx={{
                    minWidth: "11em",
                    p: 2,
                    bgcolor: 'background.componentBg',
                    borderLeft: '1px solid',
                    borderColor: 'divider',
                    transitionProperty: 'width',
                }}
            >
                <List size="sm" sx={{
                    '--List-item-radius': '8px'
                }}>
                    <ListItem nested sx={{ p: 0 }}>
                        <Typography
                            textColor="neutral.500"
                            fontWeight={700}
                            sx={{
                                fontSize: '10px',
                                textTransform: 'uppercase',
                                letterSpacing: '.1rem',
                            }}
                        >
                            Themes
                        </Typography>
                        <List 
                            sx={{
                                '& .JoyListItemButton-root': { 
                                    p: '8px',
                                    margin: '0'
                                },
                            }}
                        >
                            {Object.keys(Themes).map((themeName, index) => 
                                <ListItem key={`themeoption-${index}`}>
                                    <ListItemButton variant="soft" onClick={handleChange}>
                                        {capitalize(themeName)}
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </List>
                    </ListItem>
                    <ListDivider inset="gutter" />
                </List>
            </Box>
        </ClickAwayListener>
    );
};

export default SideBar;