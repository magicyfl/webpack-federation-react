import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom' ;
import { Provider } from "react-redux";
import store from './src/store';
import Layout from './src/Layout';
import Applications from './src/Applications';
import Starred from './src/Starred';
import Items from './src/Items';

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

console.log(store, 'storestorestorestorestore');

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
