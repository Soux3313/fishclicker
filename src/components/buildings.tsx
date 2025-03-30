import {Box, Button, styled, Typography} from "@mui/material";
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

    const ButtonBox = styled(Box)({
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '110%',

        '& .MuiButton-root': {
            color: "black"
        }
    })

    const TextBox = styled(Box)({
        display:'flex',
        flexDirection: 'column',

        "& .MuiTypography-root": {
            fontFamily: 'monospace',
            fontWeight: 'medium'
        },
    })

    return (
        //GENERAL WRAPPER
        <Box sx={{
            border: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            flexGrow: 0.2,
            padding: 2
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
                <TextBox>
                    <Typography>
                        Cats: {cats}
                    </Typography>
                    <Typography>
                        Price: {catPrice}
                    </Typography>
                </TextBox>

                <Box
                    component="img"
                    src={process.env.PUBLIC_URL + "/images/icons/cat.png"}
                    alt="cat-icon"
                    sx={{
                        width: "75px",
                        imageRendering: "pixelated",
                    }}
                />

                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyCats(1))}>
                       BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellCats(1))}>
                        SELL
                    </Button>
                </ButtonBox>
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
                <TextBox>
                    <Typography>
                        Traps: {traps}
                    </Typography>
                    <Typography>
                        Price: {trapPrice}
                    </Typography>
                </TextBox>
                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyTraps(1))}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellTraps(1))}>
                        SELL
                    </Button>
                </ButtonBox>
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
                <TextBox >
                    <Typography>
                        Bears: {bears}
                    </Typography>
                    <Typography>
                        Price: {bearPrice}
                    </Typography>
                </TextBox>
                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyBears(1))}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellBears(1))}>
                        SELL
                    </Button>
                </ButtonBox>
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
                <TextBox>
                    <Typography>
                        Fishermen: {fishermen}
                    </Typography>
                    <Typography>
                        Price: {fisherPrice}
                    </Typography>
                </TextBox>
                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyFishermen(1))}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellFishermen(1))}>
                        SELL
                    </Button>
                </ButtonBox>
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
                <TextBox>
                    <Typography>
                        Magnets: {magnets}
                    </Typography>
                    <Typography>
                        Price: {magnetPrice}
                    </Typography>
                </TextBox>
                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyMagnets(1))}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellMagnets(1))}>
                        SELL
                    </Button>
                </ButtonBox>
            </Box>
        </Box>
    );
}

export default Buildings;