// Импорт функций createContext и useContext из библиотеки React
import { createContext, useContext } from 'react';

// Импорт типов GameContextActions и GameContextType из файла с типами
import { GameContextActions, GameContextType } from '../../types/game';

// Создание контекста игры с типом GameContextType
export const GameContext = createContext<GameContextType | null>(null);

// Создание контекста диспетчера игры с типом React.Dispatch<GameContextActions>
export const GameDispatchContext = createContext<React.Dispatch<GameContextActions> | null>(null);

// Хук useGamesContext для получения значения контекста игры
// Возвращает значение контекста игры
// Если контекст отсутствует, выбрасывается ошибка
export function useGamesContext(): GameContextType {
    const context = useContext(GameContext)
    if (!context) throw new Error(`Games context error`)
    return context
}

// Хук useGamesDispatch для получения функции диспетчера игры
// Возвращает функцию диспетчера игры
// Если контекст отсутствует, выбрасывается ошибка
export function useGamesDispatch(): React.Dispatch<GameContextActions>{
    const context = useContext(GameDispatchContext)
    if (!context) throw new Error(`Games dispatch context error`)
    return context
}