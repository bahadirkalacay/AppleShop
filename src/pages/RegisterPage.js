import React from 'react'
import { useState } from 'react';
import styles from "../css/Register.module.css"


const RegisterPage = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
  
    function registeruser(event) {
      event.preventDefault();
  
      var users = JSON.parse(localStorage.getItem("users") || "[]");
      var newuser = {
        name: name,
        email: email,
        password: password,
      };
  
      users.push(newuser);
  
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("Registration is succesfull");
    }
    return (
      <div className={styles.login}>
  
        <div className={styles.loginContainer}>
          <h1>Create Your Account</h1>
  
          <form onSubmit={registeruser}>
            <h5>Name</h5>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
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
   
            <button type="submit" className={styles.signInButton}>
              Create Account
            </button>
          </form>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit
            mi justo, vel dictum eros placerat ac. In hac habitasse platea
            dictumst. Integer vitae massa finibus, pharetra purus a, iaculis eros
          </p>
        </div>
      </div>
    );
  }

export default RegisterPage
