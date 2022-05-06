import React from 'react';
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

console.log(Applications, 'sjflsdjlfljskdf');
function NotFound() {
  return (
    <div>404</div>
  );
}

const config = [{
  path: '/applications',
  element: <Applications />
}, {
  path: '/starred',
  element: <Starred />
}, {
  path: '/items',
  element: <Items />
}];


export default config;
