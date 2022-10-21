import { createContext, useState } from "react";

export const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
  const [users, setUser] = useState([]);

  const themeContextData = {
    users,
    setUser
  };

  return (
    <UserContext.Provider value={themeContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;