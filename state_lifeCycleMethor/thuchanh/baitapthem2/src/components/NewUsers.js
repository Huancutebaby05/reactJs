import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const NewUser = () => {
  const { users, setUser } = useContext(UserContext);

  const [newUser, setNewUser] = useState("");

  return (
    <div>
      <input value={newUser} onChange={(e) => setNewUser(e.target.value)} />
      <button
        onClick={() => {
          setUser([newUser, ...users]);
          setNewUser("");
        }}
      >
        submit{" "}
      </button>
    </div>
  );
};

export default NewUser;