import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

import LinkedInIconSvg from "../../assets/linkedin.svg";
import ProfileImg from "../../assets/profile.jpeg";
import "./header.css";
import HeaderOption from "./HeaderOption/HeaderOption";

const Header = () => {
  return (
    <div className="header">
      <div className="left-container">
        <img
          src={LinkedInIconSvg}
          alt="linkedin-icon"
          className="linkedin-icon"
        />

        <div className="search-container">
          <SearchIcon />
          <input
            type="search"
            name="search-linkedin"
            id="search-linkedin"
            className="search-input"
          />
        </div>
      </div>
      <div className="right-container">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={WorkIcon} />
        <HeaderOption title="Messaging" Icon={SmsIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption title="Me" avatar={ProfileImg} />
        <HeaderOption title="Work" Icon={ViewModuleIcon} />
        <p>
          Try Premium Free <br /> for 1 Month
        </p>
      </div>
    </div>
  );
};

export default Header;
