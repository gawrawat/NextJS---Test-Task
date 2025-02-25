import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-4 shadow-lg">
      <Link className="text-white text-2xl font-bold hover:text-slate-300 transition duration-300" href="/">
        Practice
      </Link>
      <Link
        className="bg-white text-slate-800 px-4 py-2 rounded-md font-semibold hover:bg-slate-200 transition duration-300"
        href="/addUser"
      >
        Add User
      </Link>
    </nav>
  );
}
