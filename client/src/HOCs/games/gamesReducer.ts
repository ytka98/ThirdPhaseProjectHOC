import { GameContextActions, GameContextType } from '../../types/game';

// Этот редуктор обрабатывает действия, связанные с изменением состояния игры
export default function gameReducer(
  state: GameContextType,
  action: GameContextActions,
): GameContextType {
  const { type } = action;
  switch (type) {
    // Обработка действия установки игр
    case 'SET_GAMES':
      return { ...state, games: action.payload };
    // Обработка действия добавления игры
    case 'ADD_GAME':
      return { ...state, games: [action.payload, ...state.games] };
    // Обработка действия удаления игры
    case 'DELETE_GAME':
      return { ...state, games: state.games.filter((game) => game.id !== action.payload) };
    // Обработка действия очистки всех игр
    case 'CLEAR_ALL_GAMES':
      return { games: [], favorites: [] };
    // Обработка действия изменения информации об игре
    case 'EDIT_GAME':
      return {
        ...state,
        games: state.games.map((game) => (game.id === action.payload.id ? action.payload : game)),
      };
    // Обработка действий по умолчанию
    default:
      return state;
  }
}