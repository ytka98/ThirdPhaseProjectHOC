import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamesContextProvider from './HOCs/games/GamesContextProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GamesContextProvider>
      <App />
    </GamesContextProvider>
  </>,
);
