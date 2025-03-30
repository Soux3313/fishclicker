import { Box, Button, Typography } from "@mui/material";
import { useGlobalState } from "./global-state";
import { motion } from "framer-motion";
import React, { useState } from "react";

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

        const rect = button.getBoundingClientRect();

        const newPosition: [number, number] = [
            rect.bottom - e.clientY - 80,
            e.clientX - rect.left -50, // -50: center adjustment
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
                Fish Amount: {fish}
            </Typography>
            <Box
                component={Button}
                onClick={handleClick}
                disableRipple
                sx={{
                    "@keyframes shake": {
                        "0%": { transform: "translateX(0)" },
                        "25%": { transform: "translateX(-2px)" },
                        "50%": { transform: "translateX(2px)" },
                        "75%": { transform: "translateX(-2px)" },
                        "100%": { transform: "translateX(2px)" },
                    },
                }}
            >
                <Box
                    component="img"
                    src={process.env.PUBLIC_URL + "/images/assets/pond2.png"}
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
