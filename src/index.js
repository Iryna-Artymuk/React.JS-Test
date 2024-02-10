import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import './i18n';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <PersistGate persistor={persistor}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
      
          <App />
     
      </StyleSheetManager>
    </PersistGate>
    {/* </React.StrictMode> */}
  </Provider>
);
