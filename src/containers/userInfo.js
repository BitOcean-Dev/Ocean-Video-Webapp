import React from 'react';
import { connect } from "react-redux";
import LoginForm from './loginForm.js';
import { signInRequest } from "actions/user";

type
Props = {
  signedIn: boolean,
  dispatch: () => any
};

class UserInfo extends React.Component {
  props: Props;

  handleSubmit = (values) => {
    this.props.dispatch(signInRequest({
      account: values.miniusername,
      password: values.minipassword
    }));
  };

  render() {
    return (
      <div>
        <div className="module-top"><i className="icon-lock"></i> Quick Login</div>
        <div className="module" id="quickLogin"></div>
        <LoginForm onSubmit={ this.handleSubmit }/>
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    signedIn: state.user.signedIn
  };
}

export default connect(mapStateToProperties)(UserInfo);
