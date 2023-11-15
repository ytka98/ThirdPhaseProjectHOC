import React, { useReducer } from 'react';
import { GameContext, GameDispatchContext } from './gameContext';
import gameReducer from './gamesReducer';
// import { GameContextType } from '../../types/game';

type GamesContextProviderProps = {
  children: JSX.Element;
};

export default function GamesContextProvider({ children }: GamesContextProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(gameReducer, { games: [], favorites: [] });
  return (
    <GameContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}
