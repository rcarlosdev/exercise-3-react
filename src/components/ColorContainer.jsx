import React, { useEffect, useState } from "react";

function ColorContainer() {
    const [color, setColor] = useState("rgb(0, 0, 0)");
    const [action, setAction] = useState(false);

    function randomRgbColor() {
        let r = Math.floor(Math.random() * (255 + 1));
        let g = Math.floor(Math.random() * (255 + 1));
        let b = Math.floor(Math.random() * (255 + 1));
        return `rgb(${r}, ${g}, ${b})`;
    }

    // const changeColor = () => {
    //     intervalColor = setInterval(() => {
    //         setColor(randomRgbColor());
    //     }, 1000);
    // };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!!action) {
                setColor(randomRgbColor());
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [action]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h3>Color Change {action ? "Running" : "Stopped"}</h3>
            <div
                style={{ width: "255px", height: "255px", background: color, boxShadow: `2px 3px 9px ${color}` }}
                onMouseEnter={() => setAction(true)}
                onMouseOut={() => setAction(false)}
                onDoubleClickCapture={() => setAction(false)}
            ></div>
        </div>
    );
}

export default ColorContainer;
