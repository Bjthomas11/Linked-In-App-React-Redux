import React from "react";
import TopFeed from "./TopFeed/TopFeed";

import "./middleFeed.css";

const MiddleFeed = () => {
  return (
    <section className="middle-feed-container">
      <TopFeed />
      <div className="sep-sorter">
        <hr />
        <p>
          Sort by: <span>Top </span>
        </p>
      </div>
      {/* feed */}
    </section>
  );
};

export default MiddleFeed;
