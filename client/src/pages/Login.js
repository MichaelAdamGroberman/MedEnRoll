
import LoginForm from "../components/loginForm/LoginForm";
import './style.css';
function Signup() {
  return (
    <div className="container">
    <div className="login">
      <h4 className="text-center">
        Please use your credentials to login to the system!
      </h4>
      <LoginForm  />
    </div>
    </div>
  );
}

export default Signup;
