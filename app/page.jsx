import UsersList from "../components/UserList.jsx";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <UsersList />
      <UsersList />
      <UsersList />
      <UsersList />
    </div>
  );
}