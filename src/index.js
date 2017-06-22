import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import logger from 'redux-logger'; // eslint-disable-line import/no-extraneous-dependencies
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import App from './containers/App';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(logger, middleware),
);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <AppContainer>
            <Component />
          </AppContainer>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept();
}
