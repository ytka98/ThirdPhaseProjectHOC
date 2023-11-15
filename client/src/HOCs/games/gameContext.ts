import { createContext, useContext } from 'react';
import { GameContextActions, GameContextType } from '../../types/game';

export const GameContext = createContext<GameContextType | null>(null);
export const GameDispatchContext = createContext<React.Dispatch<GameContextActions> | null>(null);


export function useGamesContext(): GameContextType {
    const context = useContext(GameContext)
    if (!context) throw new Error(`Games context error`)
    return context
}

export function useGamesDispatch(): React.Dispatch<GameContextActions>{
    const context = useContext(GameDispatchContext)
    if (!context) throw new Error(`Games dispatch context error`)
    return context
} 