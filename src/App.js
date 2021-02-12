import React from "react";
import Header from "./components/Header/Header";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MiddleFeed from "./components/MiddleFeed/MiddleFeed";
import SideWidgets from "./components/SideWidgets/SideWidgets";
import Footer from "./components/Footer/Footer";
import ProfileImg from "./assets/profile.jpeg";
import Banner from "./components/Banner/Banner";

const App = () => {
  return (
    <>
      <Header />

      <main className="main-body">
        <Banner />
        <section className="inner-body-container">
          <Sidebar
            avatar={ProfileImg}
            profile_name="Brian Thomas"
            company="Front End Developer at Imaginuity"
          />
          <MiddleFeed />
          <SideWidgets />
        </section>
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default App;
