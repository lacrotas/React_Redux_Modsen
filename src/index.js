import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <div className="App">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);
