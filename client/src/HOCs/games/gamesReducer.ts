import { GameContextActions, GameContextType } from '../../types/game';

export default function gameReducer(
  state: GameContextType,
  action: GameContextActions,
): GameContextType {
  const { type } = action;
  switch (type) {
    case 'SET_GAMES':
      return { ...state, games: action.payload };
    case 'ADD_GAME':
      return { ...state, games: [action.payload, ...state.games] };
    case 'DELETE_GAME':
      return { ...state, games: state.games.filter((game) => game.id !== action.payload) };
    // case 'ADD_FAVORITES':
    //     return { ...state, favorites: [action.payload, ...state.favorites]}
    case 'CLEAR_ALL_GAMES':
      return { games: [], favorites: [] };
    case 'EDIT_GAME':
      return {
        ...state,
        games: state.games.map((game) => (game.id === action.payload.id ? action.payload : game)),
      };
    default:
      return state;
  }
}
