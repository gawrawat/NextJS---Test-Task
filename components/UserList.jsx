import Link from "next/link";
import RemoveBtn from "./RemoveBtn.jsx";
import EditUser from "@/app/editUser/[id]/page.jsx";
import { HiPencilAlt } from "react-icons/hi";

export default function UsersList() {
    return (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div>
                <h2 className="font-bold text-2xl text-slate-800">User</h2>
                <p className="text-slate-600">user@example.com</p> 
            </div>

            <div className="flex gap-2">
                <RemoveBtn />
                <Link href={'/editUser/123'}>
                    <HiPencilAlt size={24} className="text-blue-500 hover:text-blue-700 transition duration-300" />
                </Link>
            </div>
        </div>
    );
}