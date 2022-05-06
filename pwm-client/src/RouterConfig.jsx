import React from 'react';
import Recent from '@/pages/Recent';
import Devices from '@/pages/Devices';
import Valut from '@/pages/Valut';

const config = [{
  path: '/recent',
  element: <Recent />
}, {
  path: '/devices',
  element: <Devices />
}, {
  path: '/valut',
  element: <Valut />
}];


export default config;
