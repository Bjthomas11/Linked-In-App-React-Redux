import React, { useEffect } from "react";
import Header from "./components/Header/Header";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MiddleFeed from "./components/MiddleFeed/MiddleFeed";
import SideWidgets from "./components/SideWidgets/SideWidgets";
import Footer from "./components/Footer/Footer";
import ProfileImg from "./assets/profile.jpeg";
import Banner from "./components/Banner/Banner";

import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      userAuth
        ? dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoURL: userAuth.photoURL,
            })
          )
        : dispatch(logout());
    });
  }, []);
  return (
    <>
      <Header />
      <main className="main-body">
        {!user ? (
          <Login />
        ) : (
          <>
            <Banner />
            <section className="inner-body-container">
              <Sidebar />
              <MiddleFeed />
              <SideWidgets />
            </section>
          </>
        )}

        {/* <Footer /> */}
      </main>
    </>
  );
};

export default App;
