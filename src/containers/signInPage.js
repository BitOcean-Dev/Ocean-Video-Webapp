import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Grid, Row, Col } from "react-bootstrap";
import { signInRequest } from "actions/user";
import { Redirect } from 'react-router';
import SignInForm from "./signInForm";


type
Props = {
  signedIn: boolean,
  dispatch: () => any
};



class SignInPage extends React.Component {

  props: Props;

  handleSubmit = (values) => {
    this.props.dispatch(signInRequest({
      account: values.account,
      password: values.password
    }));
  };

  render() {
    if (this.props.signedIn) {
      return <Redirect to="/videos" />
    } else {
      return <SignInForm onSubmit={ this.handleSubmit }/>  
    }
  }
}


function mapStateToProperties(state) {
  return {
    signedIn: state.user.signedIn
  };
}

export default connect(mapStateToProperties)(SignInPage);