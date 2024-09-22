import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(
      (registration) => {
        console.log('Service Worker registered with scope: ', registration.scope);
      },
      (err) => {
        console.log('Service Worker registration failed: ', err);
      }
    );
  });
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
