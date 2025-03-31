import {Box, Button, styled, Typography} from "@mui/material";
import {useGlobalState} from "./global-state";
import {useEffect, useState} from "react";


const Buildings = () =>
{
    const [amount, setAmount] = useState(1)

    const {
        fish, addFish,
        cats, buyCats, sellCats, catPrice,
        traps, buyTraps, sellTraps, trapPrice,
        bears, buyBears, sellBears, bearPrice,
        fishermen, buyFishermen, sellFishermen, fisherPrice,
        magnets, buyMagnets, sellMagnets, magnetPrice
    } = useGlobalState();

    const [catPur, setCatPur] = useState(false);
    const [trapsPur, setTrapsPur] = useState(false);
    const [bearPur, setBearPur] = useState(false);
    const [fisherPur, setFisherPur] = useState(false);
    const [magnetPur, setMagnetPur] = useState(false);

    const [catSell, setCatSell] = useState(false);
    const [trapsSell, setTrapsSell] = useState(false);
    const [bearSell, setBearSell] = useState(false);
    const [fisherSell, setFisherSell] = useState(false);
    const [magnetSell, setMagnetSell] = useState(false);


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

    useEffect(() => {
        const interval = setInterval(() => {
            setCatPur(catPrice * amount <= fish)
            setCatSell(cats >= amount)

            setTrapsPur(trapPrice * amount <= fish)
            setTrapsSell(traps >= amount)

            setBearPur(bearPrice * amount <= fish)
            setBearSell(bears >= amount)

            setFisherPur(fisherPrice * amount <= fish)
            setFisherSell(fishermen >= amount)

            setMagnetPur(magnetPrice * amount  <= fish)
            setMagnetSell(magnets >= amount)
        }, 10);

        return () => clearInterval(interval); //cleanup
    }, [fish]);

    const ButtonBox = styled(Box)({
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '110%',

        '& .MuiButton-root': {
            fontFamily: 'monospace',
            color: 'white',
            background: 'linear-gradient(90deg, rgba(13,19,50,1) 0%, rgba(27,80,134,1) 22%, rgba(51,130,161,1) 51%, rgba(0,212,255,1) 100%)',
            borderRadius: 16,

            transition: 'transform 0.1s',
            '&:hover': {
                backgroundColor: 'green',
                transform: 'scale(1.05)'
            },

            '&:active':{
                transform: 'scale(0.97)',
            }
        }
    })

    const getButtonStyle = (condition: boolean) =>
        condition
            ? {}
            : {
                background: "linear-gradient(90deg, rgba(36,35,35,1) 0%, rgba(98,98,98,1) 42%, rgba(164,164,164,1) 83%, rgba(198,198,198,1) 100%) !important",
                color: "black !important",
                pointerEvents: 'none',
            };


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
                    <Button variant="contained" onClick={() => (buyCats(1))} sx={getButtonStyle(catPur)}>
                       BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellCats(1))} sx={getButtonStyle(catSell)}>
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
                    <Button variant="contained" onClick={() => (buyTraps(1))} sx={getButtonStyle(trapsPur)}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellTraps(1))} sx={getButtonStyle(trapsSell)}>
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
                    <Button variant="contained" onClick={() => (buyBears(1))} sx={getButtonStyle(bearPur)}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellBears(1))} sx={getButtonStyle(bearSell)}>
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
                    <Button variant="contained" onClick={() => (buyFishermen(1))} sx={getButtonStyle(fisherPur)}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellFishermen(1))} sx={getButtonStyle(fisherSell)}>
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
                    <Button variant="contained" onClick={() => (buyMagnets(1))} sx={getButtonStyle(magnetPur)}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellMagnets(1))} sx={getButtonStyle(magnetSell)}>
                        SELL
                    </Button>
                </ButtonBox>
            </Box>
        </Box>
    );
}

export default Buildings;