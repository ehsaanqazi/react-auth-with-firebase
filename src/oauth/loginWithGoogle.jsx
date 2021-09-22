import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AuthWithGoogle() {
  const [error, setError] = useState();
  const { loginWithGoogle } = useAuth();
  const history = useHistory();

  async function handleLoginGoogle(e) {
    e.preventDefault();
    try {
      await loginWithGoogle();
      history.push("/");
    } catch {
      setError("Failed");
    }
  }
  return (
    <>
      <form onSubmit={handleLoginGoogle}>
      {error ? <div className="alert alert-danger">{error}</div> : ""}
        <button className="btn btn-primary">Connect with Google</button>
      </form>
    </>
  );
}

export default AuthWithGoogle;
