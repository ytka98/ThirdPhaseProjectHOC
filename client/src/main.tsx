// Импорт необходимых зависимостей из React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт стилей Bootstrap
import GamesContextProvider from './HOCs/games/GamesContextProvider'; // Импорт HOC (Higher Order Component) GamesContextProvider

// Создание корневого элемента ReactDOM и рендеринг приложения
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GamesContextProvider>
    {/* Обертка приложения в GamesContextProvider */}
    <App /> {/* Рендеринг компонента App */}
  </GamesContextProvider>,
);
