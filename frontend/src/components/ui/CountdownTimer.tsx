import {useEffect, useState} from "react";

interface CountdownTimerProps {
    initialSeconds: number;
    onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds, onComplete}) => {
    const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

    useEffect(() => {
        if (secondsLeft <= 0) {
            if (onComplete) onComplete();
            return;
        }
    
        const interval = setInterval(() => {
            setSecondsLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [secondsLeft, onComplete]);

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