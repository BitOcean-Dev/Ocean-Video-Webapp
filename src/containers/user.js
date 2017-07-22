import React, { Component } from "react";
import { connect } from "react-redux";

type
Props = {
  dispatch: () => void,
  signedIn: boolean,
  uid: any,
  name: any
};

class User extends React.Component {

  props:Props;

  render() {
    if (this.props.signedIn) {
      return <div>{this.props.name}</div>
    } else {
      return <div>Sign In</div>
    }
  }
}

function mapStateToProperties(state) {
  return {
    signedIn: state.user.signedIn,
    uid: state.user.uid,
    name: state.user.name
  };
}

export default connect(
  mapStateToProperties
)(User);