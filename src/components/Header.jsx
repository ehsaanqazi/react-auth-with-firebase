import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router";
import { useState } from "react";

function Header() {
  const [error, setError] = useState();
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout(e) {
    e.preventDefault();

    try {
      setError("");
      await logout();
      history.push("/login");
    } catch {
      setError("Failed");
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {error ? <div className="col-md-6 alert alert-danger">{error}</div> : ""}
    </>
  );
}

export default Header;
