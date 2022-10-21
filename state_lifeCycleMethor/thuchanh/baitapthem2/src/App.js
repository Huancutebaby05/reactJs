import Users from "./components/Users";
import NewUser from "./components/NewUsers";

import UserProvider from "./components/UserContext";

export default function App() {
  // const [users, setUser] = useState([]);

  return (
    <div className="App">
      <UserProvider>
        <NewUser />
        <Users />
      </UserProvider>
    </div>
  );
}