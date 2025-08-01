function ActivityCard() {
    return ( 
        <div className="flex justify-between border-2 m-2">
            <div className="m-1">Name</div>
            <div className="m-1">Timer</div>
            <button className="m-1">
                delete activity
            </button>
        </div>
     );
}

export default ActivityCard;