import {Box, Button, Typography} from "@mui/material";
import {useGlobalState} from "./global-state";


const Clicker = () =>
{
    const { fish, clickPotency, addFish } = useGlobalState();

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: "100vh",
        }}>
            <Typography sx={{
                fontWeight: 'medium',
                fontSize: 'h4.fontSize',
                fontFamily: 'Monospace'
            }}>
                Fish Amount: {fish}
            </Typography>
            <Box component={Button}
                 onClick={() => (addFish(clickPotency))}
                >
                <Box
                    component="img"
                    src={process.env.PUBLIC_URL + '/images/pondv1.png'}
                    alt="fishButton"

                />
            </Box>
        </Box>
    );
}

export default Clicker;