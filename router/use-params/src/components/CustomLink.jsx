import {
  LinkProps,
  Link,
  Outlet,
  useResolvedPath,
  useMatch,
} from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);

  //useMatch trả về true nếu url đang được active
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link to={to} {...props}>
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default CustomLink