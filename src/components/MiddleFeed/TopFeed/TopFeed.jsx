import React from "react";
import ProfileImg from "../../../assets/profile.jpeg";
import PostOption from "./PostOption/PostOption";
import PhotoIcon from "@material-ui/icons/Photo";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";

import "./topFeed.css";

const TopFeed = ({ sendPost }) => {
  return (
    <>
      <div className="categories">
        <PostOption name="Photo" icon={<PhotoIcon className="photo" />} />
        <PostOption name="Video" icon={<VideoCallIcon className="video" />} />
        <PostOption name="Event" icon={<EventIcon className="event" />} />
        <PostOption
          name="Write article"
          icon={<DescriptionIcon className="article" />}
        />
      </div>

      <div className="bottom-text">
        <p>
          Start a conversation: <a href="#">#BlackHistoryMonth</a>
          <a href="#">#ConversationsForChange</a>{" "}
        </p>
      </div>
    </>
  );
};

export default TopFeed;
