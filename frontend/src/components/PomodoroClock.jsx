import Timer from "./ui/Timer";

function PomodoroClock () {
    return ( 
        <div className="flex flex-col h-full">
            <Timer></Timer>
            <div className="flex justify-center m-2">
                <button className="m-2">Play</button>
                <button className="m-2">Pause</button>
                <button className="m-2">Restart</button>
            </div>
        </div>
     );
}

export default PomodoroClock;