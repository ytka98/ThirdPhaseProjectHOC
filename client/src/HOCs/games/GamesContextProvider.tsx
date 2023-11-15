import React, { useReducer } from 'react'; 
// Импорт библиотеки React и хука useReducer из неё
import { GameContext, GameDispatchContext } from './gameContext'; 
// Импорт контекста GameContext и GameDispatchContext из файла gameContext
import gameReducer from './gamesReducer'; 
// Импорт редюсера gameReducer из файла gamesReducer
// import { GameContextType } from '../../types/game'; // Комментарий/закомментированный код, возможно, использовался ранее и мог быть причиной для проведения определенных манипуляций с типами данных

type GamesContextProviderProps = { // Определение типа GamesContextProviderProps
  children: JSX.Element; // Свойство children типа JSX.Element
};

export default function GamesContextProvider({ children }: GamesContextProviderProps): JSX.Element { 
  // Создание компонента GamesContextProvider с аргументом children типа GamesContextProviderProps и возвращаемым значением типа JSX.Element
  const [state, dispatch] = useReducer(gameReducer, { games: [], favorites: [] });
   // Использование хука useReducer для создания состояния state и диспетчера dispatch, инициализация начального состояния с помощью редюсера gameReducer

  return ( // Возвращаем JSX
    <GameContext.Provider value={state}> {/* Оборачиваем children в провайдер GameContext, передавая значение state */}
      <GameDispatchContext.Provider value={dispatch}> {/* Оборачиваем children в провайдер GameDispatchContext, передавая значение dispatch */}
        {children} {/* Рендер children */}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}