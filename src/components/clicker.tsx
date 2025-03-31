import { Box, Button, Typography } from "@mui/material";
import { useGlobalState } from "./global-state";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NumberFlow from '@number-flow/react'

// Component for the jumping fish animation
interface JumpingFishProps {
    id: number;
    position: [number, number];
    onComplete: (id: number) => void;
}

const JumpingFish: React.FC<JumpingFishProps> = ({ id,position, onComplete }) => {
    return (
        <motion.img
            src={process.env.PUBLIC_URL + "/images/fish/fish.png"}
            alt="jumping fish"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -150, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
                position: "absolute",
                bottom: position[0],
                left:  position[1],
                width: "100px",
                pointerEvents: "none", // so it doesn't interfere with clicks
            }}
            onAnimationComplete={() => onComplete(id)}
        />
    );
};

const Clicker = () => {
    const { fish, clickPotency, addFish } = useGlobalState();
    const [jumpingFishes, setJumpingFishes] = useState<{ id: number; position: [number, number] }[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget.querySelector("img");
        if (!button) return;


        const parent = e.currentTarget.closest("div");
        if (!parent) return;

        const parentRect = parent.getBoundingClientRect();

        const newPosition: [number, number] = [
            parentRect.bottom - e.clientY - 10,
            e.clientX - parentRect.left - 50,
        ];


        // Pond Animation
        button.style.animation = "shake 0.2s ease-in-out";
        setTimeout(() => (button.style.animation = ""), 200);

        // Add Fish to Count
        addFish(clickPotency);

        // Add a new jumping fish with a unique id
        setJumpingFishes((prev) => [
            ...prev,
            { id: Date.now(), position: newPosition },
        ]);
    };

    // Remove the jumping fish once its animation is complete
    const handleAnimationComplete = (id: number) => {
        setJumpingFishes((prev) => prev.filter((fish) => fish.id !== id));
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "100vh",
                position: "relative", // Required for absolutely positioned children
            }}
        >
            <Typography
                sx={{
                    fontWeight: "medium",
                    fontSize: "h4.fontSize",
                    fontFamily: "Monospace",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row"
                }}>
                    Fish Amount:
                    <NumberFlow
                        value={fish}
                        transformTiming={{ duration: 500, easing: 'ease-out' }}
                    />
                </Box>
            </Typography>

            <Box
                component={Button}
                onClick={handleClick}
                disableRipple
                sx={{
                    '&:hover': {
                        backgroundColor: 'transparent',
                        transform: 'scale(1.03)',
                    },

                    transition: 'transform 0.1s',
                    '&:active': {
                        transform: 'scale(0.98)',
                    },
                }}
            >
                <Box
                    component="img"
                    src={process.env.PUBLIC_URL + "/images/assets/pond3.png"}
                    alt="fishButton"
                    sx={{
                        width: "700px",
                        imageRendering: "pixelated",
                        userSelect: "none", // Prevents image selection
                        pointerEvents: "auto", // Allows interactions with the button, but not dragging
                        WebkitUserDrag: "none", // Prevents drag in WebKit browsers like Safari
                    }}
                />
            </Box>

            {/* Render each jumping fish */}
            {jumpingFishes.map((fishItem) => (
                <JumpingFish
                    key={fishItem.id}
                    id={fishItem.id}
                    position={fishItem.position}
                    onComplete={handleAnimationComplete}
                />
            ))}
        </Box>
    );
};

export default Clicker;
