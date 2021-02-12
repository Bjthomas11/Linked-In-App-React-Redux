import React from "react";
import ProfileImg from "../../../assets/profile.jpeg";
import PhotoIcon from "@material-ui/icons/Photo";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";

import "./topFeed.css";

const TopFeed = () => {
  return (
    <section className="top-feed-container">
      <div className="image-post-container">
        <img src={ProfileImg} alt="profile-img" className="profile-img" />
        <input type="text" name="post" id="post" placeholder="Start a post" />
      </div>
      <div className="categories">
        <div className="single-cat">
          <PhotoIcon className="photo" />
          <span>Photo</span>
        </div>
        <div className="single-cat">
          <VideoCallIcon className="video" />
          <span>Video</span>
        </div>
        <div className="single-cat">
          <EventIcon className="event" />
          <span>Event</span>
        </div>
        <div className="single-cat">
          <DescriptionIcon className="article" />
          <span>Write article</span>
        </div>
      </div>
      <div className="bottom-text">
        <p>
          Start a conversation: <a href="#">#BlackHistoryMonth</a>
          <a href="#">#ConversationsForChange</a>{" "}
        </p>
      </div>
    </section>
  );
};

export default TopFeed;
