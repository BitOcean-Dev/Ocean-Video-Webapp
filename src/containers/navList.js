import React from 'react';

const navList = () => (
  <ul className="nav nav-list">
    <li className="nav-header">filter by</li>
    <li className="active"><a href="#"><i className="icon-time"></i> Recently added</a></li>
    <li><a href="#"><i className="icon-heart-empty"></i> Most Popular</a></li>
    <li><a href="#"><i className="icon-star-empty"></i> Highest Rating</a></li>
  </ul>
);

export default navList;
