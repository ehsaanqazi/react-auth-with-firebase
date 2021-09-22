import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthWithGoogle from "../oauth/loginWithGoogle";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to login");
      setLoading(false);
    }
  }
  return (
    <>
      <div className="login">
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center my-4">Login</h1>
            <div className="">
              {error ? <div className="alert alert-danger">{error}</div> : ""}

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
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>

              <div className="mb-3">
                <button
                  disabled={loading}
                  className="btn btn-primary btn-lg d-block w-100 fw-500 mb-3"
                >
                  Login
                </button>
              </div>
              <div className="mb-3">
                <span className="text-center">Not have an account? </span>
                <Link to="/register" className="text-center text-muted">
                  {" "}
                  Register Here
                </Link>
              </div>
              <div className="mb-3">
                <Link to="/forgot-password"> Forget Password</Link>
              </div>
            </div>
          </form>
          <AuthWithGoogle />
        </div>
      </div>
    </>
  );
}

export default Login;
