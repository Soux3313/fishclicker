import './App.css';
import Clicker from "./components/clicker";
import {Box} from "@mui/material";
import Buildings from "./components/buildings";
import Fisherhut from "./components/fisherhut";
import {GlobalStateProvider} from "./components/global-state";

const Constructor = () =>
{
    return (
        <GlobalStateProvider>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                overflow: 'hidden',

                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/assets/Wallpaper27.jpg'})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                //height: "385px",
            }}>
                <Box sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '5%',
                    alignSelf: 'flex-end'
                }}
                >
                    <Fisherhut />
                </Box>


                <Box sx={{
                    marginRight: 'auto'
                }}
                >
                    <Clicker/>
                </Box>

                <Buildings />

            </Box>
        </GlobalStateProvider>
    );
}

export default Constructor;
