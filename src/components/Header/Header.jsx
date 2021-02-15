import React from "react";
import { useMediaQuery } from "react-responsive";
import SearchIcon from "@material-ui/icons/Search";
import CropFreeIcon from "@material-ui/icons/CropFree";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import LinkedInIconSvg from "../../assets/linkedin.svg";
import ProfileImg from "../../assets/profile.jpeg";
import HeaderOption from "./HeaderOption/HeaderOption";

import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1030px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1029px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutClick = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      {isDesktopOrLaptop && (
        <>
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
                placeholder="Search"
              />
            </div>
          </div>
          <div className="right-container">
            <HeaderOption title="Home" Icon={HomeIcon} />
            <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
            <HeaderOption title="Jobs" Icon={WorkIcon} />
            <HeaderOption title="Messaging" Icon={SmsIcon} />
            <HeaderOption title="Notifications" Icon={NotificationsIcon} />
            <HeaderOption title="Me" onClick={logoutClick} />
            <HeaderOption title="Work" Icon={ViewModuleIcon} />
            <p>
              Try Premium Free <br /> for 1 Month
            </p>
          </div>
        </>
      )}
      {isTablet && (
        <>
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
                placeholder="Search"
              />
            </div>
          </div>
          <div className="right-container">
            <HeaderOption Icon={HomeIcon} />
            <HeaderOption Icon={SupervisorAccountIcon} />
            <HeaderOption Icon={WorkIcon} />
            <HeaderOption Icon={SmsIcon} />
            <HeaderOption Icon={NotificationsIcon} />
            <HeaderOption avatar={ProfileImg} onClick={logoutClick} />
            <HeaderOption Icon={ViewModuleIcon} />
            <p>
              Try Premium Free <br /> for 1 Month
            </p>
          </div>
        </>
      )}
      {isMobile && (
        <>
          <div className="left-container">
            <HeaderOption avatar={ProfileImg} onClick={logoutClick} />

            <div className="search-container mobile">
              <SearchIcon />
              <input
                type="search"
                name="search-linkedin"
                id="search-linkedin"
                className="search-input"
                placeholder="Search"
              />
              <CropFreeIcon />
            </div>
          </div>
          <div className="right-container">
            <HeaderOption Icon={SmsIcon} />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
