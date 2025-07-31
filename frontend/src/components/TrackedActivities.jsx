import ActivityCard from "./ActivityCard";

const TrackedActivities = () => {
    return ( 
        <div className="flex flex-col m-3 w-md border-2 border-solid">
            <h2 className="flex justify-between m-2">
                Activities
                <button>
                    Add
                </button>
            </h2>
            <div className="flex flex-col">
                <ActivityCard></ActivityCard>
            </div>
        </div>
     );
}
 
export default TrackedActivities;