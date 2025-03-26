import {createContext, ReactNode, use, useContext, useState} from "react";

interface GlobalState {
    fish: number;
    clickPotency: number;
    addFish: (addedFish: number) => void;
    setClickPotency: (newValue: number) => void;

    cats: number;
    buyCats: (added: number) => void;
    sellCats: (removed: number) => void;
    catPrice: number;

    traps: number;
    buyTraps: (added: number) => void;
    sellTraps: (removed: number) => void;
    trapPrice: number;

    bears: number;
    buyBears: (added: number) => void;
    sellBears: (removed: number) => void;
    bearPrice: number;

    fishermen: number;
    buyFishermen: (added: number) => void;
    sellFishermen: (removed: number) => void;
    fisherPrice: number;

    magnets: number;
    buyMagnets: (added: number) => void;
    sellMagnets: (removed: number) => void;
    magnetPrice: number;


}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
    const[clickPotency, setClickPotency] = useState(1);
    const[fish, setFish] = useState(0);
    const[cats, setCats] = useState(0);
    const[catPrice, setCatPrice] = useState(5);
    const[traps, setTraps] = useState(0);
    const[trapPrice, setTrapPrice] = useState(20);
    const[bears, setBears] = useState(0);
    const[bearPrice, setBearPrice] = useState(50);
    const[fishermen, setFishermen] = useState(0);
    const[fisherPrice, setFisherPrice] = useState(100);
    const[magnets, setMagnets] = useState(0);
    const[magnetPrice, setMagnetPrice] = useState(300);

    const priceScale = 1.15;
    const catBase = 5;
    const trapBase = 20;
    const bearBase = 50;
    const fisherBase = 100;
    const magnetBase = 300;

    const addFish = (addedFish: number) => {
        setFish(fish => fish + addedFish);
    }

    const removeFish = (removed: number) => {
         setFish(fish=> fish - removed)
    }

    const buyCats = (added: number) => {
        for(let i = 0; i < added; i++)
        {
            if(fish >= Math.round(catPrice))
            {
                setCats(cats+added)
                removeFish(catPrice)
                setCatPrice(Math.round(catBase*Math.pow((priceScale), cats)))
            }
            else break;
        }
    }

    const sellCats = (removed: number) => {
         if(cats >= removed)
         {
             setCats(cats-removed)
             for(let i = 0; i < removed; i++)
             {
                 addFish(Math.round(catPrice/2));
                 setCatPrice(Math.round(catBase*Math.pow((priceScale), cats)))
             }
         }
    }

    const buyTraps = (added: number) => {
        if(fish >= Math.round(trapPrice*added))
        {
            setTraps(traps+added)
            removeFish(trapPrice)
            setTrapPrice(Math.round(trapBase*Math.pow((priceScale), traps)))
        }
    }

    const sellTraps = (removed: number) => {
        if(traps >= removed)
        {
            setTraps(traps-removed)
            for(let i = 0; i < removed; i++)
            {
                addFish(Math.round(trapPrice/2));
                setTrapPrice(Math.round(trapBase*Math.pow((priceScale), traps)))
            }
        }
    }
    const buyBears = (added: number) => {
        for(let i = 0; i < added; i++)
        {
            if(fish >= Math.round(bearPrice))
            {
                setBears(bears+added)
                removeFish(bearPrice)
                setBearPrice(Math.round(bearBase*Math.pow((priceScale), bears)))
            }
            else break;
        }
    }

    const sellBears = (removed: number) => {
        if(bears >= removed)
        {
            setBears(bears-removed)
            for(let i = 0; i < removed; i++)
            {
                addFish(Math.round(bearPrice/2));
                setBearPrice(Math.round(bearBase*Math.pow((priceScale), bears)))
            }
        }
    }

    const buyFishermen = (added: number) => {
        for(let i = 0; i < added; i++)
        {
            if(fish >= Math.round(fisherPrice))
            {
                setFishermen(fishermen+added)
                removeFish(fisherPrice)
                setFisherPrice(Math.round(fisherBase*Math.pow((priceScale), fishermen)))
            }
            else break;
        }
    }

    const sellFishermen = (removed: number) => {
        if(fishermen >= removed)
        {
            setFishermen(fishermen-removed)
            for(let i = 0; i < removed; i++)
            {
                addFish(Math.round(fisherPrice/2));
                setFisherPrice(Math.round(fisherBase*Math.pow((priceScale), fishermen)))
            }
        }
    }

    const buyMagnets = (added: number) => {
        for(let i = 0; i < added; i++)
        {
            if(fish >= Math.round(magnetPrice))
            {
                setMagnets(magnets+added)
                removeFish(magnetPrice)
                setMagnetPrice(Math.round(magnetBase*Math.pow((priceScale), magnets)))
            }
            else break;
        }
    }

    const sellMagnets = (removed: number) => {
        if(magnets >= removed)
        {
            setMagnets(magnets-removed)
            for(let i = 0; i < removed; i++)
            {
                addFish(Math.round(magnetPrice/2));
                setMagnetPrice(Math.round(magnetBase*Math.pow((priceScale), magnets)))
            }
        }
    }



    return (
        <GlobalStateContext.Provider value={{ fish, clickPotency, addFish, setClickPotency,
            cats, buyCats, sellCats, catPrice,
            traps, buyTraps, sellTraps, trapPrice,
            bears, buyBears, sellBears, bearPrice,
            fishermen, buyFishermen, sellFishermen, fisherPrice,
            magnets, buyMagnets, sellMagnets, magnetPrice
        }}>
            {children}
        </GlobalStateContext.Provider>
    );
}

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateProvider");
    }
    return context;
};