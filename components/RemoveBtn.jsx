import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn() {
    return (
        <button className="text-red-400 hover:text-red-600 transition duration-300">
            <HiOutlineTrash size={24} />
        </button>
    );
}