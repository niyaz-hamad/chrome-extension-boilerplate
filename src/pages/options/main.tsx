import React from 'react';
import { createRoot } from 'react-dom/client';

import Options from './Options';

createRoot(document.body.appendChild(document.createElement('div'))).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
