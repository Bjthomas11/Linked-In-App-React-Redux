import React from "react";

import "./postOption.css";

const PostOption = ({ icon, name }) => {
  return (
    <div className="single-cat">
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default PostOption;
