import {Box, Button, styled, Typography} from "@mui/material";
import {useGlobalState} from "./global-state";
import {useEffect, useState} from "react";

const Buildings = () =>
{
    const [amount, setAmount] = useState(1)

    const {
        fish, addFish, priceScale,
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
            setCatPur(Math.round(catPrice * (Math.pow(priceScale, amount) - 1) / 0.15) <= fish)
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
    }, [fish, amount]);

    const BuildingBox = styled(Box)({
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        aspectRatio: 38/15,
        height: '150px',
        width: '500px',

        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/assets/plank.png'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        imageRendering: 'pixelated'
    })

    const ButtonBox = styled(Box)({
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '110%',

        '& .MuiButton-root': {
            color: 'white',
            background: 'linear-gradient(90deg, rgba(13,19,50,1) 0%, rgba(27,80,134,1) 22%, rgba(51,130,161,1) 51%, rgba(0,212,255,1) 100%)',
            borderRadius: 16,
            fontSize: 25,
            marginTop: 'auto',
            marginBottom: 'auto',

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
        padding: 2,
        justifyContent: 'space-between', // Push items to the top & bottom
        flexGrow: 0, // Ensures it takes up the full height inside BuildingBox
        height: '100%',
        flexShrink: 0,


        "& .MuiTypography-root": {
            fontSize: 28,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            WebkitTextStroke: '0.6px black',
        },
    })


    return (


        //GENERAL WRAPPER
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
            flexGrow: 0.2,
            padding: 2
        }}>
            {/*AMOUNT SELECTOR*/}
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'center'
            }}>
                <Typography sx={{
                    fontSize: 'h5.fontSize',
                }}>
                    Amount:
                </Typography>

                <ButtonBox sx={{
                    flexDirection: 'row',
                    flexGrow: 0.5,
                    justifyContent: 'space-between',
                    margin: 'auto'
                }}>
                    <Button  onClick={() => (setAmount(1))} >
                        1
                    </Button>

                    <Button  onClick={() => (setAmount(10))} >
                        10
                    </Button>

                    <Button  onClick={() => (setAmount(100))} >
                        100
                    </Button>

                </ButtonBox>

            </Box>
            {/*CATS*/}
            <BuildingBox>
                <TextBox>
                    <Typography
                    >
                        Cats: {cats}
                    </Typography>
                    <Typography sx={{
                        marginTop: 'auto',

                    }}>
                        Price: {Math.round(catPrice * (Math.pow(priceScale, amount) - 1) / 0.15)}
                    </Typography>
                </TextBox>

                <Box
                    component="img"
                    src={process.env.PUBLIC_URL + "/images/icons/cat.png"}
                    alt="cat-icon"
                    sx={{
                        width: "75px",
                        imageRendering: "pixelated",
                        marginLeft: 'auto',
                        marginRight: '5%'
                    }}
                />

                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyCats(amount))} sx={getButtonStyle(catPur)}>
                       BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellCats(amount))} sx={getButtonStyle(catSell)}>
                        SELL
                    </Button>
                </ButtonBox>
            </BuildingBox>


            {/*TRAPS*/}


            <BuildingBox>
                <TextBox>
                    <Typography>
                        Traps: {traps}
                    </Typography>
                    <Typography>
                        Price: {trapPrice}
                    </Typography>
                </TextBox>
                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyTraps(amount))} sx={getButtonStyle(trapsPur)}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellTraps(amount))} sx={getButtonStyle(trapsSell)}>
                        SELL
                    </Button>
                </ButtonBox>
            </BuildingBox>


            {/*BEAR*/}


            <BuildingBox>
                <TextBox >
                    <Typography>
                        Bears: {bears}
                    </Typography>
                    <Typography>
                        Price: {bearPrice}
                    </Typography>
                </TextBox>
                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyBears(amount))} sx={getButtonStyle(bearPur)}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellBears(amount))} sx={getButtonStyle(bearSell)}>
                        SELL
                    </Button>
                </ButtonBox>
            </BuildingBox>


            {/*FISHERMAN*/}


            <BuildingBox>
                <TextBox>
                    <Typography>
                        Fishermen: {fishermen}
                    </Typography>
                    <Typography>
                        Price: {fisherPrice}
                    </Typography>
                </TextBox>
                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyFishermen(amount))} sx={getButtonStyle(fisherPur)}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellFishermen(amount))} sx={getButtonStyle(fisherSell)}>
                        SELL
                    </Button>
                </ButtonBox>
            </BuildingBox>


            {/*MAGNETS*/}


            <BuildingBox>
                <TextBox>
                    <Typography>
                        Magnets: {magnets}
                    </Typography>
                    <Typography>
                        Price: {magnetPrice}
                    </Typography>
                </TextBox>
                <ButtonBox>
                    <Button variant="contained" onClick={() => (buyMagnets(amount))} sx={getButtonStyle(magnetPur)}>
                        BUY
                    </Button>
                    <Button variant="contained" onClick={() => (sellMagnets(amount))} sx={getButtonStyle(magnetSell)}>
                        SELL
                    </Button>
                </ButtonBox>
            </BuildingBox>
        </Box>
    );
}

export default Buildings;