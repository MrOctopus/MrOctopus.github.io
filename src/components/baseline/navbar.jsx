import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';

import Image from 'next/future/image' ;
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Breadcrumbs from '@mui/joy/Breadcrumbs';

import Logo from 'public/images/octopus.png';

const MenuButton = ({sidebarState}) => {
    const [showSidebar, setShowSidebar] = sidebarState;

    const handleClick = (event) => {
        setShowSidebar(!showSidebar);
    };

    return (
        <IconButton
            variant="soft"
            onClick={handleClick}
        >
            <MenuSharpIcon/>
        </IconButton>
    );
};

const NavBar = ({ sidebarState }) => {    
    return (
        <Box
            sx={{
                p: 2,
                gap: 2,
                bgcolor: 'background.componentBg',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gridColumn: '1 / -1',
                borderBottom: '1px solid',
                borderColor: 'divider',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', 
                    width: "100%",
                    alignItems: 'center',
                    gap: 1.5,
                }}
            >
                <Box
                    display="flex"
                >
                    <AspectRatio 
                        ratio="1" 
                        sx={{ 
                            minWidth: 50,
                            userSelect: 'none',
                            '& > div': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <Image 
                            alt="Logo"
                            src={Logo}
                        />
                    </AspectRatio>
                    <Breadcrumbs />
                </Box>
                <Box sx={{ margin: 'auto' }} />
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        gap: 1.5 
                    }}
                >
                    <MenuButton sidebarState={sidebarState} />
                </Box>
            </Box>
        </Box>
    );
};

export default NavBar;