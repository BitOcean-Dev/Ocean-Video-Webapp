// Create final store using all reducers and applying middleware
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import * as reducers from "reducers";
import { createLogger } from "redux-logger";
import { reducer as formReducer } from 'redux-form'

// Redux utility functions
// Import all reducers


// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
export const history = createBrowserHistory();
const reducer = combineReducers({
  ...reducers,
  form: formReducer
});

const middleware = [
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = compose(
  // Enables your middleware:
  // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
  applyMiddleware(
    ...middleware
  ),
  // Provides support for DevTools via Chrome extension
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(connectRouter(history)(reducer));

export default store;
