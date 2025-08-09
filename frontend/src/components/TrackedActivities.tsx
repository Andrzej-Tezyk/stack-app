import ActivityCard from "./ActivityCard";
import {CirclePlus} from "lucide-react"

const TrackedActivities = () => {
    return ( 
        <div className="flex flex-col m-3 w-md border-1 border-gray-400 rounded-2xl border-solid">
            <h2 className="flex justify-between m-2 font-semibold">
                List of tracked ativities
                <button className="w-10 h-10 flex items-center justify-center p-0" aria-label="CirclePlus">
                    <CirclePlus></CirclePlus>
                </button>
            </h2>
            <div className="flex flex-col">
                <ActivityCard></ActivityCard>
            </div>
        </div>
     );
}

export default TrackedActivities;