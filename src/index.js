import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/configureStore';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTHO_DOMAIN}
        clientId={process.env.REACT_APP_AUTHO_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
