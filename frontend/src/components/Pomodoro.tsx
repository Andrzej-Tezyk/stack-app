import PomodoroClock from "./PomodoroClock";
import {Play, Pause, RotateCcw} from "lucide-react";

function Pomodoro () {
    return ( 
        <div className="flex flex-col border-1 border-gray-400 rounded-2xl m-3 w-md h-1/2 border-solid justify-center">
            <div className="h-full">
                <PomodoroClock></PomodoroClock>
            </div>
            <div className="flex justify-center m-2">
                <button className="m-2 w-10 h-10 flex items-center justify-center p-0" aria-label="Play">
                    <Play></Play>
                </button>
                <button className="m-2 w-10 h-10 flex items-center justify-center p-0" aria-label="Pause">
                    <Pause></Pause>
                </button>
                <button className="m-2 w-10 h-10 flex items-center justify-center p-0" aria-label="RotateCcw">
                    <RotateCcw></RotateCcw>
                </button>
            </div>
        </div>
     );
}

export default Pomodoro ;