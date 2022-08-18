import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';

const Content = ({ children }) => {
    return (
        <Box 
            sx={{ 
                width: '100%',
                p: 2
            }}
        > 
            <Sheet
                sx={{
                    height: "100%",
                    maxWidth: 1440,
                    borderRadius: 'sm',
                    margin: 'auto',
                    bgcolor: 'background.componentBg',
                }}
            >
                {children}
            </Sheet>
        </Box>
    );
};

export default Content