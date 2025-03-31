import {Box} from "@mui/material";

const Fisherhut = () =>
{
    return (
        <Box>
            <Box component="img"
                 src={process.env.PUBLIC_URL + '/images/assets/fisherhut.png'}
                 alt="fisherhut"
                 sx={{
                     width: "300px",
                     imageRendering: "pixelated",
                     userSelect: "none", // Prevents image selection
                     pointerEvents: "auto", // Allows interactions with the button, but not dragging
                     WebkitUserDrag: "none", // Prevents drag in WebKit browsers like Safari
                     transition: 'transform 0.1s',

                     '&:hover': {
                         transform: 'scale(1.05)',
                         WebkitFilter:
                            'drop-shadow(4px 2px 0 white) drop-shadow(-2px -2px 0 white)',
                         filter:
                            'drop-shadow(4px 2px 0 white) drop-shadow(-2px -2px 0 white)'
                     },
                 }}
            />
        </Box>
    );
}

export default Fisherhut;