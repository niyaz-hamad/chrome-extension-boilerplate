import React from 'react';
import { createRoot } from 'react-dom/client';

import Popup from './Popup';

createRoot(document.body.appendChild(document.createElement('div'))).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
