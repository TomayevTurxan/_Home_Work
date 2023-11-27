import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <ul  className="navbar">
      <li>
        <Link
          to="/admin"
          style={{
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          Admin
        </Link>
        <Link
          to="/"
          style={{
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
          }}
        >
          About
        </Link>
      </li>
    </ul>
  );
};

export default UserNavbar;
