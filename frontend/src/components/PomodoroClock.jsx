import Timer from "./ui/Timer";
import {Play, Pause, RotateCcw} from "lucide-react"

function PomodoroClock () {
    return ( 
        <div className="flex flex-col h-full">
            <Timer></Timer>
            <div className="flex justify-center m-2">
                <button className="m-2 " size="icon" aria-label="Play">
                    <Play></Play>
                </button>
                <button className="m-2" size="icon" aria-label="Pause">
                    <Pause></Pause>
                </button>
                <button className="m-2" size="icon" aria-label="RotateCcw">
                    <RotateCcw></RotateCcw>
                </button>
            </div>
        </div>
     );
}

export default PomodoroClock;