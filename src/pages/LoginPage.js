import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import styles from "../css/Login.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  function login() {
    var users = JSON.parse(localStorage.getItem("users"));

    var i = 0;
    for (var user of users) {
      if (user.email === email && user.password === password) {
        i++;
      }
    }

    if (i === 1) {
      alert("login successfull");
      localStorage.getItem("loggedin", "loggedin");
      history.push("/dashboard");
      window.location.reload(true);
    } else {
      alert("invalid login");
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button onClick={login} type="submit" className={styles.signInButton}>
            Sign In
          </button>
        </form>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
          mi justo, vel dictum eros placerat ac. In hac habitasse platea
          dictumst. Integer vitae massa finibus, pharetra purus a, iaculis eros
        </p>
        <Link to="/shopping-cart/register" style={{ textDecoration: "none" }}>
          <button className={styles.registerButton}>
            Create your E Commerce Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
