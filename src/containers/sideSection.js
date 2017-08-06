import React, { Component } from 'react';
import NavList from './navList';
import UserInfo from './userInfo';
import FeedSection from './feedSection';

const sideSection = () => (
  <div id="side-section" className="span3">
    <NavList />
    <UserInfo />
    <FeedSection />
  </div>
);

export default sideSection;

