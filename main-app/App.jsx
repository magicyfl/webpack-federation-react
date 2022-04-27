import React from 'react';
import BaseLayout from './Layout';
// import SdpPage1 from 'sdp-client/Page1';
// import SdpPage2 from 'sdp-client/Page2';
// import SdpPage3 from 'sdp-client/Page3';
// import PwmPage1 from 'pwm-client/Page1';
// import PwmPage2 from 'pwm-client/Page2';
// import PwmPage3 from 'pwm-client/Page3';

const SdpPage1 = React.lazy(() => import('sdp-client/Page1'));
const SdpPage2 = React.lazy(() => import('sdp-client/Page2'));
const SdpPage3 = React.lazy(() => import('sdp-client/Page3'));
const PwmPage1 = React.lazy(() => import('pwm-client/Page1'));
const PwmPage2 = React.lazy(() => import('pwm-client/Page2'));
const PwmPage3 = React.lazy(() => import('pwm-client/Page3'));

function LoadCompoent(props) {
  const { activeKey, menuActiveKey } = props;



  if (activeKey === "1") {
    if (menuActiveKey === "1") {
      return (
        <React.Suspense fallback="loading">
          <SdpPage1 />
        </React.Suspense>
      );
    } else if (menuActiveKey === "2") {
      return (
        <React.Suspense fallback="loading">
          <SdpPage2 />
        </React.Suspense>
      );
    } else if (menuActiveKey === "3") {
      return (
        <React.Suspense fallback="loading">
          <SdpPage3 />
        </React.Suspense>
      );
    }
  } else if (activeKey === "2") {
    if (menuActiveKey === "1") {
      return (
        <React.Suspense fallback="loading">
          <PwmPage1 />
        </React.Suspense>
      );
    } else if (menuActiveKey === "2") {
      return (
        <React.Suspense fallback="loading">
          <PwmPage2 />
        </React.Suspense>
      );
    } else if (menuActiveKey === "3") {
      return (
        <React.Suspense fallback="loading">
          <PwmPage3 />
        </React.Suspense>
      );
    }
  }

  return <div>404</div>;
}

export default class App extends React.Component {
  render() {
    return (
      <BaseLayout>
        <LoadCompoent />
      </BaseLayout>
    );
  }
}
