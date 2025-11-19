import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        // Kalau sudah jalan, jangan bikin interval baru
        if (intervalRef.current !== null) return;

        intervalRef.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null; // penting, biar bisa start lagi
        }
    };

    useEffect(() => {
        // Optional: auto start saat mount
        startTimer();

        // cleanup: safety kalau komponen unmount
        return () => {
            console.log("clean up");
            stopTimer();
        };
    }, []);

    return (
        <div>
            <h1>Timer: {count} seconds</h1>
            <button onClick={stopTimer}>Stop Timer</button>
            <button onClick={startTimer}>Start Timer</button>
        </div>
    );
};

export default Timer;