import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom' ;
import { Provider } from "react-redux";
import store from '@/store';
import Layout from '@/component/Layout';
import Applications from '@/pages/Applications';
import Starred from '@/pages/Starred';
import Items from '@/pages/Items';

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
     <Provider store={store} >
        <HashRouter>
            <Routes>
              <Route element={<Layout />} >
                <Route path="/" element={<NotFound />} />
                {/* spd-client */}
                <Route path="/applications" element={LoadCompoent(Applications)} />
                <Route path="/starred" element={LoadCompoent(Starred)} />
                <Route path="/items" element={LoadCompoent(Items)} />
              </Route>
            </Routes>
        </HashRouter>
     </Provider>
  );
}

export default Router
