import { FaUserFriends, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
export function Leftbar({ upDate }) {
    return (
        <div className="text-white flex-grow-0 w-1/4 fixed left-0 px-5 flex flex-col gap-4">
            <div className="border-b pb-3 flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Apps</h3>
                <span className="flex gap-2">
                    <FaRegCalendarAlt />
                    Events
                </span>
                <span className="flex gap-2">
                    <FaUserFriends />
                    Friends
                </span>
                <span className="flex gap-2">
                    <FaRegClock />
                    Memories
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <button
                    className="text-white border border-white p-1 rounded-md"
                    onClick={upDate}
                >
                    Update
                </button>
            </div>
        </div>
    );
}
