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
            <Box
                component={Button}
                onClick={(e) => {
                    const button = e.currentTarget;
                    button.style.animation = "shake 0.2s ease-in-out";
                    setTimeout(() => (button.style.animation = ""), 200);
                    addFish(clickPotency);
                }}
                sx={{
                    "@keyframes shake": {
                        "0%": { transform: "translateX(0)" },
                        "25%": { transform: "translateX(-5px)" },
                        "50%": { transform: "translateX(5px)" },
                        "75%": { transform: "translateX(-5px)" },
                        "100%": { transform: "translateX(0)" },
                    },
                }}
            >
                <Box
                    component="img"
                    src={process.env.PUBLIC_URL + "/images/pond2.png"}
                    alt="fishButton"
                    sx={{
                        width: "800px",
                        imageRendering: "pixelated",
                    }}
                />
            </Box>
        </Box>
    );
}

export default Clicker;