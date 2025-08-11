import {Plus, Trash2} from "lucide-react"
import { useState } from "react";

interface Activity {
    id: number;
    name: string;
    totalTimeMinutes: number;
    createdAt: string;
}

interface ActivityCardProps {
    activity: Activity;
    onDelete: (id:number) => void;
    onUpdateTime: (id: number, additionalMinutes: number) => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onDelete, onUpdateTime }) => {
    const [isAddingTime, setIsAddingTime] = useState(false);
    const [timeToAdd, setTimeToAdd] = useState("");

    const formatTime = (minutes: number): string => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;

        if (hours === 0) {
            return `${mins}m`;
        }
        return `${hours}h ${mins}m`;
    };

    const handleAddTime = () => {
        const minutes = parseInt(timeToAdd);
            if (minutes && minutes > 0) {
                onUpdateTime(activity.id, minutes);
                setTimeToAdd("");
                setIsAddingTime(false);
        }
    };

    const handleCancel = () => {
    setTimeToAdd("");
    setIsAddingTime(false);
    };

    return (
    <div className="p-4 m-2 border border-gray-300 rounded-lg bg-white shadow-sm">
        <div className="flex justify-between items-start">
        <div className="flex-1">
            <div className="flex justify-between">
                <h3 className="flex font-medium text-lg mb-2">
                    <div>{activity.name}</div>
                </h3>
                
                {/* Timer Display */}
                <div className="flex justify-center items-center gap-2 mb-2 mr-15">
                        <span className="text-2xl font-bold text-blue-600">
                            {formatTime(activity.totalTimeMinutes)}
                        </span>
                        <button
                            onClick={() => setIsAddingTime(true)}
                            className="w-6 h-6 flex items-center justify-center bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
                            aria-label="Add time"
                        >
                            <Plus size={16} className="text-blue-600" />
                        </button>
                </div>
            </div>

            {/* Add Time Form */}
            {isAddingTime && (
            <div className="bg-blue-50 border border-blue-200 rounded p-1 mb-2 flex">
                <div className="flex items-center gap-2 m-2">
                    <input
                        type="number"
                        placeholder="Minutes"
                        value={timeToAdd}
                        onChange={(e) => setTimeToAdd(e.target.value)}
                        className="w-20 p-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                        min="1"
                        autoFocus
                    />
                </div>
                <div className="flex flex-1 gap-4 justify-end items-center ml-2 mr-2">
                    <button
                        onClick={handleAddTime}
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                    <button
                        onClick={handleCancel}
                        className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
            )}

        </div>

        {/* Delete Button */}
        <button 
            onClick={() => onDelete(activity.id)}
            className="w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
            aria-label="Delete activity"
        >
            <Trash2 size={16} />
        </button>
        </div>
    </div>
    );
    };

export default ActivityCard;