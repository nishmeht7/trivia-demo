// modules
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// components
import App from './components/App';

// actions
import * as questionActions from './actions/questionsActions';

// Store
import initialState from './reducers/initialState';
import configureStore from './store/configureStore'; //eslint-disable-line import/default

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/bootswatch/cosmo/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/styles.css'; //Webpack can import CSS files too!

// store initialization
const store = configureStore(initialState);
store.dispatch(questionActions.loadQuestions());

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root');

// Initialize Firebase Auth and then start the app

      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <App history={history} store={store}/>
          </Provider>
        </AppContainer>,
        rootEl
      );

      if (module.hot) {
        module.hot.accept('./components/App', () => {
          // If you use Webpack 2 in ES modules mode, you can
          // use <App /> here rather than require() a <NextApp />.
          const NextApp = require('./components/App').default;
          ReactDOM.render(
            <AppContainer>
              <Provider store={store}>
                <NextApp history={history} store={store}/>
              </Provider>
            </AppContainer>,
            rootEl
          );
        });
      }

