import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import Layout from '@/component/Layout';

// main-app
import SecurityMontoring  from '@/pages/SecurityMontoring';
import Settings from '@/pages/Settings';
import ShaingCenter from '@/pages/ShaingCenter';
import Login from '@/pages/Login';
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
  const [hash, setHash] = React.useState(location.hash);

  React.useEffect(() => {
    window.addEventListener('hashchange', () => {
      setHash(location.hash);
    });
  }, []);

  if (hash.endsWith('login')) {
    return (
      <Login />
    )
  }

  return (
    <Provider store={store}>
      <Layout>
        <HashRouter>
          <Routes>
            {/* main-app */}
            <Route path="/shaing" element={<ShaingCenter />} />
            <Route path="/security" element={<SecurityMontoring />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<NotFound />} />
          </Routes>
        </HashRouter>
        {/* pwm */}
        <React.Suspense fallback="loading">
          <PwmClientRouter />
        </React.Suspense>
        {/* sdp */}
        <React.Suspense fallback="loading">
          <SdpClientRouter />
        </React.Suspense>
      </Layout>
    </Provider>
  );
}

export default Router
