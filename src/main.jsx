import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppIndex from './AppBook';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppIndex />
  </StrictMode>
);
