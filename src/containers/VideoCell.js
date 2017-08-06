import React from "react";
import { Link } from "react-router-dom";

const VideoCell = ({ vid, name, price, imageUrl }) =>
  <Link to={`/videos/${vid}`}>
    <div className="image-wrapper">
      <img width="240" height="180" src={imageUrl}/>
    </div>
    <div>{`${vid} ${name} ${price}`}</div>
  </Link>;

export default VideoCell;
