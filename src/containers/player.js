import React, { Component } from 'react';
import ReactJWPlayer from 'react-jw-player';
import { connect } from 'react-redux';
import { fetchStreamUrl } from 'actions/player';
import { Grid, Row, Col } from 'react-bootstrap';


class OceanPlayer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchStreamUrl({
      'params': 'TODO'
    }));
  }

  props: {
    vid: '',
    loaded: false,
    url: ''
  };

  getPlayerDom() {
    let status = this.props.status;
    if (status == 'loaded') {
      return <div>
        <div>Ocean Player</div>
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

  render() {
      return <di>{this.getPlayerDom()}</di>;
  }
}

function mapStateToProperties(state) {
  return {
    status: state.player.status,
    streamUrl: state.player.url
  };
}

export default connect(mapStateToProperties)(OceanPlayer);
