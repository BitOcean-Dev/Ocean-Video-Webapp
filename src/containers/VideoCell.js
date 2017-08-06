import React from "react";
import { Link } from "react-router-dom";

const VideoCell = ({ vid, name, price, imageUrl, describe }) =>(
    <li className="span3">
      <div className="thumbnail">
        <img data-src="holder.js/300x200" alt="300x200" src={imageUrl} />
          <div className="caption">
            <h6><Link to={`/videos/${vid}`}>{name}</Link> <br />Price: {price} BTC</h6>
            <p>{`Describe: ${describe}`}</p>
          </div>
      </div>
    </li>
);

export default VideoCell;
