import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import './index.css';
import App from './App.jsx';
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')).render(
  <>
    <ColorSchemeScript />
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS defaultColorScheme="light">
        <App />
      </MantineProvider>
    </BrowserRouter>
  </>
);
