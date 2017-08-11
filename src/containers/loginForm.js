import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

let LoginForm = props => {

  const { handleSubmit } = props;

  return (
    <form className="form-signin" onSubmit={ handleSubmit }>
      <fieldset> 
        <label className="label-main">Username</label>
        <Field name="miniusername" className="span10" id="miniusername" type="text" component="input"/>
        <label className="label-main">Password</label>
        <Field name="minipassword" className="span10" id="minipassword"  type="password" component="input" />
        <p><label className="checkbox"><input type="checkbox" />remember me</label></p>
        <button name="send" type="submit" value="Submit"  className="btn btn-small">Login</button>
      </fieldset>
    </form>);
};


LoginForm = reduxForm({
  // a unique name for the form
  form: 'signin'
})(LoginForm);

export default LoginForm;

