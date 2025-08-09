import CountdownTimer from "./ui/CountdownTimer";

function PomodoroClock () {
    return ( 
        <div className="flex flex-col h-full">
            <CountdownTimer
                initialSeconds={25 * 60}
                onComplete={() => alert('Make a 5 min pause!')}
                />
        </div>
     );
}

export default PomodoroClock;