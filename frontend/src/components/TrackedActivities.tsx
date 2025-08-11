import { useState } from "react";
import { CirclePlus } from "lucide-react";
import ActivityCard from "./ActivityCard";

interface Activity {
  id: number;
  name: string;
  totalTimeMinutes: number;
  createdAt: string;
}

const TrackedActivities: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([
        // Sample initial activity
        {
            id: 1,
            name: "Morning Jog",
            totalTimeMinutes: 45,
            createdAt: new Date().toLocaleDateString()
        }
    ]);
    
    const [isAdding, setIsAdding] = useState(false);
    const [newActivityName, setNewActivityName] = useState("");

    const handleAddActivity = () => {
        if (newActivityName.trim()) {
            const activity: Activity = {
                id: Date.now(),
                name: newActivityName.trim(),
                totalTimeMinutes: 0,
                createdAt: new Date().toLocaleDateString()
            };
            
            setActivities(prev => [...prev, activity]);
            setNewActivityName("");
            setIsAdding(false);
        }
    };

    const handleDeleteActivity = (id: number) => {
        setActivities(prev => prev.filter(activity => activity.id !== id));
    };

    const handleUpdateTime = (id: number, additionalMinutes: number) => {
        setActivities(prev => 
            prev.map(activity => 
                activity.id === id 
                    ? { ...activity, totalTimeMinutes: activity.totalTimeMinutes + additionalMinutes }
                    : activity
            )
        );
    };

    const handleCancel = () => {
        setNewActivityName("");
        setIsAdding(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAddActivity();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return ( 
        <div className="flex flex-col m-3 w-md border border-gray-400 rounded-2xl border-solid bg-gray-50">
            <h2 className="flex justify-between m-2 font-semibold">
                List of tracked activities
                <button 
                    className="w-10 h-10 flex items-center justify-center p-0 hover:bg-gray-200 rounded-full transition-colors" 
                    aria-label="Add new activity"
                    onClick={() => setIsAdding(true)}
                >
                    <CirclePlus />
                </button>
            </h2>
            
            <div className="flex flex-col">
                {/* Add new activity form */}
                {isAdding && (
                    <div className="p-4 m-2 border-2 border-blue-300 rounded-lg bg-blue-50">
                        <h3 className="font-medium mb-2">Add New Activity</h3>
                        <input
                            type="text"
                            placeholder="Activity name"
                            value={newActivityName}
                            onChange={(e) => setNewActivityName(e.target.value)}
                            onKeyDown={handleKeyPress}
                            className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={handleAddActivity}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Add
                            </button>
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
                
                {/* Existing activities */}
                {activities.map(activity => (
                    <ActivityCard 
                        key={activity.id} 
                        activity={activity}
                        onDelete={handleDeleteActivity}
                        onUpdateTime={handleUpdateTime}
                    />
                ))}
                
                {activities.length === 0 && !isAdding && (
                    <div className="p-8 text-center text-gray-500">
                        No activities tracked yet. Click the + button to add one!
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackedActivities;