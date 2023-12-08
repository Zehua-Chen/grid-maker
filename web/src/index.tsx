import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './index.scss';

const root = createRoot(document.getElementById('app-main'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
