import CountdownTimer from "./ui/CountdownTimer";
import {Play, Pause, RotateCcw} from "lucide-react";
import { useState, useCallback, useEffect } from "react";

function Pomodoro () {

    const initialTime = 25 * 60;
    const [secondsLeft, setSecondsLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (secondsLeft === 0 && isRunning) {
            alert("Make a 5 min pause!");
            setIsRunning(false);
        }
    }, [secondsLeft, isRunning]);

    const handleTick = useCallback(() => {
        setSecondsLeft(prev => (prev > 0 ? prev -1 : 0));
    }, []);

    const handlePlay = () => setIsRunning(true)
    const handlePause = () => setIsRunning(false)
    const handleReset = () => {
        setIsRunning(false);
        setSecondsLeft(initialTime);
    };

    return (
        <div className="flex flex-col border-1 border-gray-400 rounded-2xl m-3 w-md h-1/2 border-solid justify-center">
            <div className="h-full">
                <div className="flex flex-col h-full">
                    <CountdownTimer
                        secondsLeft={secondsLeft}
                        isRunning={isRunning}
                        onTick={handleTick}
                        />
                </div>
            </div>
            <div className="flex justify-center m-2">
                <button onClick={handlePlay} className="m-2 w-10 h-10 flex items-center justify-center p-0" aria-label="Play">
                    <Play />
                </button>
                <button onClick={handlePause} className="m-2 w-10 h-10 flex items-center justify-center p-0" aria-label="Pause">
                    <Pause />
                </button>
                <button onClick={handleReset} className="m-2 w-10 h-10 flex items-center justify-center p-0" aria-label="RotateCcw">
                    <RotateCcw />
                </button>
            </div>
        </div>
     );
}

export default Pomodoro;