import PomodoroClock from "./PomodoroClock";

function Pomodoro () {
    return ( 
        <div className="border-1 border-gray-400 rounded-2xl m-3 w-md h-1/2 border-solid">
            <div className="h-full">
                <PomodoroClock></PomodoroClock>
            </div>
        </div>
     );
}

export default Pomodoro ;