import Signup from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "./components/Forgot-Password";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/register" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgetPassword} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
