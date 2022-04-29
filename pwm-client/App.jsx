import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import Layout from './src/Layout';
import Recent from './src/Recent';
import Devices from './src/Devices';
import Valut from './src/Valut';
import store from './src/store';

function LoadCompoent(Component) {
  return (
    <React.Suspense fallback="loading">
      <Component />
    </React.Suspense>
  )
}

function NotFound() {
  return (
    <div>404</div>
  );
}

function Router() {
  return (
      <Provider store={store}>
        <HashRouter>
            <Routes>
              <Route element={<Layout />} >
                <Route path="/" element={<NotFound />} />
                {/* pwm-client */}
                <Route path="/recent" element={LoadCompoent(Recent)} />
                <Route path="/devices" element={LoadCompoent(Devices)} />
                <Route path="/valut" element={LoadCompoent(Valut)} />
              </Route>
            </Routes>
        </HashRouter>
      </Provider>
  );
}

export default Router
