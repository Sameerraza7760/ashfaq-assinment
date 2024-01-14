import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {};

  return (
    <div>
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
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
          Already have an account? <a href="#">Login here</a>
        </p>
        <p style={{cursor:'pointer'}} onClick={() => navigate("/product")}>
          Already have an account?product
        </p>
      </div>
    </div>
  );
}

export default Signin;
