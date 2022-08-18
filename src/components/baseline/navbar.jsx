import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';

import Image from 'next/future/image' ;
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
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
            sx={{ borderRadius: 0 }}
        >
            <MenuSharpIcon/>
        </IconButton>
    );
};

const Base = (props) => {
    return (
        <Box
            {...props}
            sx={[
                {
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
                },
                ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
            ]}
    />
  );
};

const NavBar = ({ sidebarState }) => {    
    return (
        <Base>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', 
                    width: "100%",
                    alignItems: 'center',
                    gap: 1.5,
                }}
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
                        src={Logo}
                    />
                </AspectRatio>
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
        </Base>
    );
};

export default NavBar;