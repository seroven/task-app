import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PrimeReactProvider } from 'primereact/api';
import { PrimeVueConfig } from './config/primevue/primevue.config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider value={PrimeVueConfig}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
