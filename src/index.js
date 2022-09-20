import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import theme from "./assets/theme"
import App from './App';
import "normalize.css"
import "@/assets/css/index.less"
import "antd/dist/antd.less"
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback={<div>loading...</div>}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Suspense>
  </Provider>
);

