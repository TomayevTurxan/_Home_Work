import { Link } from "react-router-dom";
const AdminNavbar = () => {
  return (
    <ul  className="navbar">
      <li>
      <Link
          to="/"
          style={{
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          User
        </Link>
        <Link
          to="/admin"
          style={{
            textDecoration: "none",
            marginRight: "15px",
          }}
        >
          Dashboard
        </Link>
        <Link
          style={{
            textDecoration: "none",
            marginRight: "15px",
          }}
          to="/admin/categories"
        >
          categories
        </Link>
        <Link
          style={{
            textDecoration: "none",
            marginRight: "15px",
          }}
          to="/admin/AddCategory"
        >
          Add Category
        </Link>
      </li>
    </ul>
  );
};

export default AdminNavbar;
