import './App.css';
import Clicker from "./components/clicker";
import {Box} from "@mui/material";
import Buildings from "./components/buildings";
import Fisherhut from "./components/fisherhut";
import {GlobalStateProvider} from "./components/global-state";
import React from "react";

const Constructor = () =>
{
    return (
        <GlobalStateProvider>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <Fisherhut/>
                <Clicker/>
                <Buildings/>
            </Box>
        </GlobalStateProvider>
    );
}

export default Constructor;
