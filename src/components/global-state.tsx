import {createContext, ReactNode, useContext, useState} from "react";

interface GlobalState {
    fish: number;
    clickPotency: number;
    addFish: (addedFish: number) => void;
    setClickPotency: (newValue: number) => void;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
     const[clickPotency, setClickPotency] = useState(1);
     const[fish, setFish] = useState(0);
     const addFish = (addedFish: number) => {
       setFish(fish+addedFish);
    }

    return (
        <GlobalStateContext.Provider value={{ fish, clickPotency, addFish, setClickPotency }}>
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