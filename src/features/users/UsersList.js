import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";

const UsersList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user) => (
    <li key={user.id} className="hover:opacity-90 hover:underline">
      <Link to={`/user/${user.id}`}>
        {user.firstName + " " + user.lastName}
      </Link>
    </li>
  ));

  return (
    <section>
      <h2 className="text-4xl text-green-700 font-bold">Users</h2>

      <ul className="list-decimal">{renderedUsers}</ul>
    </section>
  );
};

export default UsersList;
