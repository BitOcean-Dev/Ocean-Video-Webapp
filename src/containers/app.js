import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp, fetchApi, fetchStreamUrl } from 'actions/app';
import styles from './app.css';
import Player from './player';

type Props = {
  dispatch: () => void,
  loaded: boolean,
  content: "Initial"
};

export class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(loadApp());
    this.props.dispatch(fetchApi({
      'param': 'hello'
    }));
    this.props.dispatch(fetchStreamUrl({
      'params': 'TODO'
    }));
  }

  props: Props;

  render() {
    if (!this.props.loaded) {
      return null;
    }
    // TODO: talk to server, pass authToken to Player. 
    return (
        <div>
           <div className={styles.container}>Ocean Video Webapp</div>
           <div className={styles.container}>{this.props.content}</div>
        <Player /> 
        </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
    content: state.app.content
  };
}

export default connect(mapStateToProperties)(AppContainer);
