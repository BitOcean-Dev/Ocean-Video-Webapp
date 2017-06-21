import React, { Component } from 'react';
import ReactJWPlayer from 'react-jw-player';


const Player = ({authToken}) => (
  <div>
    <div>This is Player</div>
    <ReactJWPlayer
  playerId='playerid'
  playerScript='https://content.jwplatform.com/libraries/YKZx5RfW.js'
  playlist={playListUrl(authToken)}
    />
  </div>
);

var playListUrl = (authToken) => `http://153.126.148.104:8081/demo/9784198810344-2.mp4/playlist.m3u8?wmsAuthSign=${authToken}`

export default Player;
