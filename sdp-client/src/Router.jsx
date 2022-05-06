import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import Applications from '@/pages/Applications';
import Starred from '@/pages/Starred';
import Items from '@/pages/Items';
import Layout from '@/component/Layout';
import store from '@/store';

function NotFound() {
  return (
    <div>404</div>
  );
}

// local 本地使用 remote 远端使用
function HocRouter(type = 'local') {

  const sharedRouter = (
    <>
      <Route path="/applications" element={<Applications />} />
      <Route path="/starred" element={<Starred />} />
      <Route path="/items" element={<Items />} />
      <Route path="/" element={<NotFound />} />
    </>
  );

  return function() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Routes>
            {
              type === 'local'
              ?
              <Route element={<Layout />} >
                {sharedRouter}
              </Route>
              :
              sharedRouter
            }
          </Routes>
        </HashRouter>
      </Provider>
    )
  }
}

export const RemoteRouter = HocRouter('remote');

export const LocalRouter = HocRouter('local')
