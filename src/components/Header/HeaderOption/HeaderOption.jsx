import React from "react";

import "./headerOption.css";

const HeaderOption = ({ title, Icon, avatar }) => {
  return (
    <div className="header-option">
      {Icon && <Icon className="option-icon" />}
      {avatar && <img src={avatar} alt="profile-img" className="profile-img" />}
      <span className="option-title">{title}</span>
    </div>
  );
};

export default HeaderOption;
