import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PostOption from "../TopFeed/PostOption/PostOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

import "./post.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

const Post = ({ name, title, message, photoURL, avatar }) => {
  const user = useSelector(selectUser);
  return (
    <section className="post-container">
      <div className="post-header">
        {avatar && (
          <img src={avatar} alt="profile-img" className="profile-img" />
        )}
        <div className="post-info">
          <p className="post-name">{user.displayName}</p>
          <p className="post-title">{title} </p>
        </div>
        <MoreHorizIcon className="dot" />
      </div>
      <div className="post-body">
        <p className="message">{message}</p>
      </div>
      <div className="post-buttons">
        <PostOption name="Like" icon={<ThumbUpAltIcon className="thumb" />} />
        <PostOption name="Comment" icon={<ChatIcon className="chat" />} />
        <PostOption name="Share" icon={<ShareIcon className="share" />} />
        <PostOption name="Send" icon={<SendIcon className="send" />} />
      </div>
    </section>
  );
};

export default Post;
