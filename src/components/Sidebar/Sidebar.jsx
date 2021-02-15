import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import "./sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="recentItem">
      <span className="hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <aside className="sidebar-container">
      <div className="top-container">
        <div className="profile-container">
          <img
            src="https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="top-image"
          />
          {user.email ? (
            <img
              src={user.photoURL}
              alt="profile-img"
              className="profile-img"
            />
          ) : (
            <img
              src={user.email[0]}
              alt="profile-img"
              className="profile-img"
            />
          )}

          <p className="name">{user.displayName}</p>
          <p className="company">company</p>
        </div>
        <div className="stats">
          <div className="stat">
            <p className="text">Who viewed your profile</p>
            <p className="number">45</p>
          </div>
          <div className="stat">
            <p className="text">Views of your post</p>
            <p className="number">217</p>
          </div>
        </div>
        <div className="insights"></div>
        <div className="my-items"></div>
      </div>
      <div className="bottom-container">
        <div className="recent-container">
          <p>Recent</p>
          {recentItem("technology")}
          {recentItem("software")}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
