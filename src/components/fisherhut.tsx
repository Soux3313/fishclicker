import {Box, Typography} from "@mui/material";

const Fisherhut = () =>
{
    return (
        <Box>
            <Box component="img" src={process.env.PUBLIC_URL + '/images/fish/fish.png'} alt="fishNew"/>
            <Typography>
               Fisherhut
            </Typography>
        </Box>
    );
}

export default Fisherhut;