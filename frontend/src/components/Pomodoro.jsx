import PomodoroClock from "./PomodoroClock";

function Pomodoro () {
    return ( 
        <div className="border-2 m-3 w-md h-1/2 border-solid">
            <h2>Pomodoro</h2>
            <div>
                <PomodoroClock></PomodoroClock>
            </div>
        </div>
     );
}

export default Pomodoro ;