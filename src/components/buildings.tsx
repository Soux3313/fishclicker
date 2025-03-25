import {Box, Button, Typography} from "@mui/material";
import {useGlobalState} from "./global-state";
import {useEffect} from "react";


const Buildings = () =>
{
    const {
        addFish,
        cats, buyCats, sellCats, catPrice,
        traps, buyTraps, sellTraps, trapPrice,
        bears, buyBears, sellBears, bearPrice,
        fishermen, buyFishermen, sellFishermen, fisherPrice,
        magnets, buyMagnets, sellMagnets, magnetPrice
    } = useGlobalState();
    const catGenerator = () => {
        if(cats > 0)
        {
            addFish(cats)
            console.log("Cat Caught Fish")
        }
    }
    const trapGenerator = () => {
        if(traps > 0)
        {
            addFish(Math.round(traps*2.5))
            console.log("Trap Caught Fish")
        }
    }

    const bearGenerator = () => {
        if(bears > 0)
        {
            addFish(Math.round(bears*5))
            console.log("Bear Caught Fish")
        }
    }

    const fishermanGenerator = () => {
        if(fishermen > 0)
        {
            addFish(Math.round(fishermen*8))
            console.log("Fisher Caught Fish")
        }
    }

    const magnetGenerator = () => {
        if(magnets > 0)
        {
            addFish(Math.round(magnets*10))
            console.log("Magnet Caught Fish")
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            catGenerator();
            trapGenerator();
            bearGenerator();
            fishermanGenerator();
            magnetGenerator();
        }, 1000); //every second

    return () => clearInterval(interval); //cleanup
    }, [cats, traps, bears, fishermen, magnets]);

    return (
        //GENERAL WRAPPER
        <Box sx={{
            border: 1,
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 0.2,
            padding: 2,
        }}>

            {/*CATS*/}


            <Box sx={{
                border: 1,
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 2,
            }}>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Typography>
                        Cats: {cats}
                    </Typography>
                    <Typography>
                        Price: {catPrice}
                    </Typography>
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Button variant="outlined" onClick={() => (buyCats(1))}>
                       BUY
                    </Button>
                    <Button variant="outlined" onClick={() => (sellCats(1))}>
                        SELL
                    </Button>
                </Box>
            </Box>


            {/*TRAPS*/}


            <Box sx={{
                border: 1,
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 2,
            }}>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Typography>
                        Traps: {traps}
                    </Typography>
                    <Typography>
                        Price: {trapPrice}
                    </Typography>
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Button variant="outlined" onClick={() => (buyTraps(1))}>
                        BUY
                    </Button>
                    <Button variant="outlined" onClick={() => (sellTraps(1))}>
                        SELL
                    </Button>
                </Box>
            </Box>


            {/*BEAR*/}


            <Box sx={{
                border: 1,
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 2,
            }}>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Typography>
                        Bears: {bears}
                    </Typography>
                    <Typography>
                        Price: {bearPrice}
                    </Typography>
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Button variant="outlined" onClick={() => (buyBears(1))}>
                        BUY
                    </Button>
                    <Button variant="outlined" onClick={() => (sellBears(1))}>
                        SELL
                    </Button>
                </Box>
            </Box>


            {/*FISHERMAN*/}


            <Box sx={{
                border: 1,
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 2,
            }}>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Typography>
                        Fishermen: {fishermen}
                    </Typography>
                    <Typography>
                        Price: {fisherPrice}
                    </Typography>
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Button variant="outlined" onClick={() => (buyFishermen(1))}>
                        BUY
                    </Button>
                    <Button variant="outlined" onClick={() => (sellFishermen(1))}>
                        SELL
                    </Button>
                </Box>
            </Box>


            {/*MAGNETS*/}


            <Box sx={{
                border: 1,
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 2,
            }}>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Typography>
                        Magnets: {magnets}
                    </Typography>
                    <Typography>
                        Price: {magnetPrice}
                    </Typography>
                </Box>
                <Box sx={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <Button variant="outlined" onClick={() => (buyMagnets(1))}>
                        BUY
                    </Button>
                    <Button variant="outlined" onClick={() => (sellMagnets(1))}>
                        SELL
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Buildings;