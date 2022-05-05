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
const PwmClientRouter = React.lazy(() => import('pwm-client/Router'));

// sdp-client
const SdpClientRouter = React.lazy(() => import('sdp-client/Router'));


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
        <Layout>
          {/* pwm */}
          <React.Suspense fallback="loading">
            <PwmClientRouter />
          </React.Suspense>
          {/* sdp */}
          <React.Suspense fallback="loading">
            <SdpClientRouter />
          </React.Suspense>
          <Routes>
            <Route path="/" element={<NotFound />} />
            {/* main-app */}
            <Route path="/shaing" element={LoadCompoent(ShaingCenter)} />
            <Route path="/security" element={LoadCompoent(SecurityMontoring)} />
            <Route path="/settings" element={LoadCompoent(Settings)} />
          </Routes>
        </Layout>
      </HashRouter>
    </Provider>
  );
}

export default Router
