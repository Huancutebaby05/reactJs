import { useContext } from "react";
import { UserContext } from "./UserContext";

const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;