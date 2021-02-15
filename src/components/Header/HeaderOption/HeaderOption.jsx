import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

import "./headerOption.css";

const HeaderOption = ({ title, Icon, avatar, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div className="header-option" onClick={onClick}>
      {Icon && <Icon className="option-icon" />}
      {user.email ? (
        <img src={user.photoURL} alt="profile-img" className="profile-img" />
      ) : (
        <img src={user.email[0]} alt="profile-img" className="profile-img" />
      )}
      <span className="option-title">{title}</span>
    </div>
  );
};

export default HeaderOption;
