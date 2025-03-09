import { Link } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>
      <p>Sign in or Sign up to continue</p>
      <div className="buttons">
        <Link to="/login"><button className="btn">Sign In</button></Link>
        <Link to="/register"><button className="btn">Sign Up</button></Link>
      </div>
    </div>
  );
};

export default Home;
