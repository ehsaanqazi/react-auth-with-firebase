import { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const emailRef = useRef();

  const [error, setError] = useState();
  const { forgotPassword } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await forgotPassword(emailRef.current.value);
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }
  return (
    <>
      <div className="login">
        <div className="login-content">
          <form onSubmit={handleSubmit} >
            <h1 className="text-center my-4">Enter your email</h1>
            <div>
              {error ? (
                <div className="col-md-6 alert alert-danger">{error}</div>
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

              <div className="md-3">
                <button disabled={loading} className="btn btn-primary btn-lg d-block w-100 fw-500 mb-3">
                  Reset
                </button>
              </div>
              <div className="mb-3">
                <span className="text-center">Let's Login  </span>
                <Link to="/login" className="text-center text-muted">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;
