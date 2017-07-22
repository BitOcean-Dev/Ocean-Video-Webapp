import React from "react";
import { Switch, Route } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "store/index";
import Layout from "containers/layout";
import App from "containers/app";
import VideoPage from "containers/videoPage";
import VideoList from "containers/videoList";
import SignIn from "containers/signInPage";

const routes = (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/videos" component={VideoList}/>
        <Route exact path="/videos/:vid" component={VideoPage}/>
        <Route exact path="/signin" component={SignIn}/>
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default routes;
