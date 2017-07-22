import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Grid, Row, Col } from "react-bootstrap";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


function showResults(values) {
  console.log(values);
}

let SignInForm = props => {

  const { handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <div>
          <label htmlFor="account">Account</label>
          <Field name="account" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password"/>
        </div>
        <button type="submit" >Submit</button>
      </div>
    </form>);
};


SignInForm = reduxForm({
  // a unique name for the form
  form: 'signin'
})(SignInForm);

export default SignInForm;


