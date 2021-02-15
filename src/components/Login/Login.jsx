import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LinkedInIconSvg from "../../assets/linkedin.svg";
import { auth } from "../../firebase";
import { login } from "../../features/userSlice";

import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = (e) => {
    if (!name) {
      return alert("Please enter your full name!");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        })
        .catch((error) => {
          alert(error);
        });
    });
  };

  const loginClick = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login-container">
      <img
        src={LinkedInIconSvg}
        alt="linkedin-icon"
        className="linkedin-icon"
      />
      <form>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          name="upload"
          id="upload"
          placeholder="Profile Picture URL "
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        {/* <input type="file" name="image" id="image" /> */}
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="sign-in-btn" type="submit" onClick={loginClick}>
          Sign in
        </button>
      </form>
      <span className="register-text">
        Not a member?{" "}
        <a href="#" onClick={register}>
          Register Now!
        </a>
      </span>
    </div>
  );
};

export default Login;
