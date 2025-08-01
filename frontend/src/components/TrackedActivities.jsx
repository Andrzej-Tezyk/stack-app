import ActivityCard from "./ActivityCard";
import {CirclePlus} from "lucide-react"

const TrackedActivities = () => {
    return ( 
        <div className="flex flex-col m-3 w-md border-1 border-gray-400 rounded-2xl border-solid">
            <h2 className="flex justify-between m-2">
                Activities
                <button size="icon" aria-label="CirclePlus">
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