import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

import "./headerOption.css";

const HeaderOption = ({ title, Icon, onClick, loggedOut, loggedIn }) => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="header-option" onClick={onClick}>
      {Icon && <Icon className="option-icon" />}
      <span className="option-title">{title}</span>
      {user ? (
        <>
          <span className="option-title">{loggedOut}</span>
        </>
      ) : (
        <span className="option-title">{loggedIn}</span>
      )}
    </div>
  );
};

export default HeaderOption;
