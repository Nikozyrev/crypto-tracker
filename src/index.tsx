import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { App } from './components/App';
import './styles/index.scss';
import { ThemeProvider } from '@mui/material';
import { theme } from './materialUI/theme';




const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <Provider store={store}>
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </ThemeProvider>
   </Provider>
);
