import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import Layout from '@/component/Layout';

// main-app
import SecurityMontoring  from '@/pages/SecurityMontoring';
import Settings from '@/pages/Settings';
import ShaingCenter from '@/pages/ShaingCenter';
import store from '@/Store';

// pwm-client
const Recent = React.lazy(() => import('pwm-client/Recent'));
const Devices = React.lazy(() => import('pwm-client/Devices'));
const Valut = React.lazy(() => import('pwm-client/Valut'));


// sdp-client
const Applications = React.lazy(() => import('sdp-client/Applications'));
const Starred = React.lazy(() => import('sdp-client/Starred'));
const Items = React.lazy(() => import('sdp-client/Items'));


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
            {/* main-app */}
            <Route path="/shaing" element={LoadCompoent(ShaingCenter)} />
            <Route path="/security" element={LoadCompoent(SecurityMontoring)} />
            <Route path="/settings" element={LoadCompoent(Settings)} />
            {/* pwm-client */}
            <Route path="/recent" element={LoadCompoent(Recent)} />
            <Route path="/devices" element={LoadCompoent(Devices)} />
            <Route path="/valut" element={LoadCompoent(Valut)} />
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
