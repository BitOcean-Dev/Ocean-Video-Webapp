import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "store";
import routes from "routes";

import '../css/jkit.css';
import '../css/bootstrap.css';
import '../css/app.css';
import '../css/font-awesome.css';
import '../css/bootstrap-responsive.css';

render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('react')
);
