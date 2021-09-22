import { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password's don't match...");
    }

    const promise = [];
    if (emailRef.current.value !== currentUser.email) {
      promise.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promise.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promise)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to updated account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Header />
      <div className="login">
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center my-4">Change Details</h1>
            <div>
              {error ? (
                <div className="mb-3 alert alert-danger">{error}</div>
              ) : (
                ""
              )}

              <div className="mb-3">
                <input
                  className="form-control form-control-lg fs-15px"
                  type="text"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>

              <div className="mb-3">
                <input
                  className="form-control form-control-lg fs-15px"
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>

              <div className="mb-3">
                <input
                  className="form-control form-control-lg fs-15px"
                  type="password"
                  placeholder="Confirm password"
                  ref={passwordConfirmRef}
                />
              </div>

              <div className="mb-3">
                <button
                  disabled={loading}
                  className="btn btn-primary btn-lg d-block w-100 fw-500 mb-3"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
