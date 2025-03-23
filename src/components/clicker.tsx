import {Box, Typography} from "@mui/material";

const Clicker = () =>
{
    return (
        <Box>
            <Box component="img" src={process.env.PUBLIC_URL + '/images/fish.png'} alt="fishNew"/>
            <Typography>
                Hi 2
            </Typography>
        </Box>
    );
}

export default Clicker;