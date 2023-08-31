import { FaBirthdayCake, FaUser } from "react-icons/fa";
export function Rightbar() {
    return (
        <div className="text-white flex-grow-0 w-1/4 fixed right-0 pl-5 flex flex-col gap-4">
            <div className="border-b pb-3 flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Birthdays</h3>
                <span className="flex gap-2">
                    <FaBirthdayCake />
                    Maya
                </span>
                <span className="flex gap-2">
                    <FaBirthdayCake />
                    Duygu
                </span>
                <span className="flex gap-2">
                    <FaBirthdayCake />
                    Mia
                </span>
            </div>
            <div className="border-b pb-3 flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">Contacts</h3>
                <span className="flex gap-2">
                    <FaUser />
                    Alice
                </span>
                <span className="flex gap-2">
                    <FaUser />
                    Kenny
                </span>
                <span className="flex gap-2">
                    <FaUser />
                    Mao
                </span>
                <span className="flex gap-2">
                    <FaUser />
                    Sachika
                </span>
                <span className="flex gap-2">
                    <FaUser />
                    Chinatzu
                </span>
                <span className="flex gap-2">
                    <FaUser />
                    Saki
                </span>
                <span className="flex gap-2">
                    <FaUser />
                    Saki
                </span>
            </div>
        </div>
    );
}
