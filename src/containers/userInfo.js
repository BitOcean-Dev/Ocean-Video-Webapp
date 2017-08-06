import React from 'react';

const userInfo = () => (
  <div>
    <div className="module-top"><i className="icon-lock"></i> Quick Login</div>
    <div className="module" id="quickLogin"></div>
    <form className="form-signin" action="" method="post">
      <fieldset>
        <label className="label-main">Username</label>
        <input name="miniusername" className="span10" id="miniusername" type="text" />
        <label className="label-main">Password</label>
        <input name="minipassword" className="span10" id="minipassword"  type="password" />
        <p><label className="checkbox"><input type="checkbox" />remember me</label></p>
        <button name="send" type="submit" value="Submit"  className="btn btn-small">Login</button>
      </fieldset>
    </form>
  </div>
);

export default userInfo;
