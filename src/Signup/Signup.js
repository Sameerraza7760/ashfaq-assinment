import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import "./style.css";
import Footer from "../components/Footer/Footer";
import { SignupFirebase } from "../Config/firebase/DB";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userinfo = { email, password };
      await SignupFirebase(userinfo);
      alert("Regestered");
      navigate("/login");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <>
      {/* <Header /> */}
      <div>
        <div className="signup-container">
          <h2>Create an Account</h2>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Sign Up</button>
          </form>

          <p>
            Already have an account?{" "}
            <a href="#" onClick={() => navigate("/login")}>
              Login here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
