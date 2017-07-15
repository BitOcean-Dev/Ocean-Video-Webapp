import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp, fetchApi } from 'actions/app';
import styles from './app.css';

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
