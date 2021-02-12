import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <a href="#">
        <span>$30K Tuition Scholarship - </span>Apply to Vanderbilt’s online
        M.S. in computer science program by March 12.
      </a>
      <span class="outside">
        Ad <MoreHorizIcon className="dot" />
      </span>
    </div>
  );
};

export default Banner;
