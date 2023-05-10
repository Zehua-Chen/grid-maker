import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/index.scss';

const root = createRoot(document.getElementById('app-main'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
