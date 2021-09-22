import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password's don't match...");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="login">
        <div className="login-content">
          <form onSubmit={handleSubmit} >
            <h1 className="text-center my-4">Register</h1>
            <div className="justify-content-center">
              {error ? (
                <div className="alert alert-danger">{error}</div>
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
                <button disabled={loading} className="btn btn-primary btn-lg d-block w-100 fw-500 mb-3">
                  Register
                </button>
              </div>
            </div>
          </form>
          <span>Already have an account? </span>
          <Link to="/login"> Login</Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
