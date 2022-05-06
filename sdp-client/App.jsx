import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import RouterConfig from '@/RouterConfig';
import Layout from '@/component/Layout';
import store from '@/store';

function NotFound() {
  return (
    <div>404</div>
  );
}

function App() {
  return (
      <Provider store={store}>
        <HashRouter>
            <Routes>
              <Route element={<Layout />} >
                {RouterConfig.map((item) => {
                  return (
                    <Route key={item.path} path={item.path} element={item.element} />
                  );
                })}
              </Route>
              <Route path="/" element={<NotFound />} />
            </Routes>
        </HashRouter>
      </Provider>
  );
}

export default App
