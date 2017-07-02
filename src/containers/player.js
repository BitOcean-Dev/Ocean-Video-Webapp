import React, { Component } from 'react';
import ReactJWPlayer from 'react-jw-player';
import { connect } from 'react-redux';

class OceanPlayer extends Component {

  props: {
    loaded: false,
    url: ''
  };

  render() {
    let status = this.props.status;
    if (status == 'loaded') {
      return <div>
        <div>This is Player</div>
        <ReactJWPlayer
      playerId='playerid'
      playerScript='https://content.jwplatform.com/libraries/YKZx5RfW.js'
      playlist={this.props.streamUrl} />
        </div>;
    } else if (status == 'initial') {
      return <div>Loading Player</div>;
    } else {
      return <div>Error</div>;
    }
  }
}

function mapStateToProperties(state) {
  return {
    status: state.player.status,
    streamUrl: state.player.url
  };
}

export default connect(mapStateToProperties)(OceanPlayer);
