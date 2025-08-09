import {useEffect, useState} from "react";

interface CountdownTimerProps {
    secondsLeft: number;
    isRunning: boolean;
    onTick: () => void;
    // onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ secondsLeft, isRunning, onTick}) => {

    useEffect(() => {
        if (!isRunning) return; // pause timer when not running
        if (secondsLeft <= 0) return;

        const interval = setInterval(() => {
            onTick();
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, secondsLeft, onTick]);

    const formatTime = (totalSeconds: number): string => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="flex m-2 flex-grow justify-center items-center text-9xl font-extralight">
            {formatTime(secondsLeft)}
        </div>
     );
}

export default CountdownTimer;