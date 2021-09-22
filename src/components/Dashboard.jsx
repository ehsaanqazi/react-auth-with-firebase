import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import { Link } from "react-router-dom";
function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <>
      <Header />
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://i.imgur.com/wvxPV9S.png"
              height="100"
              width="100"
              alt="user"
            />

            <span className="name mt-3">{currentUser.email}</span>
            <div className=" d-flex mt-2">
              <Link to="/update-profile">Edit Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
