import {Box, Typography} from "@mui/material";

const Buildings = () =>
{
    return (
        <Box>
            <Box component="img" src={process.env.PUBLIC_URL + '/images/fish.png'} alt="fishNew"/>
            <Typography>
                Buildings
            </Typography>
        </Box>
    );
}

export default Buildings;