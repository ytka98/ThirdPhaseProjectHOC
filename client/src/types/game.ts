export type GameType = {
  id: number;
  title: string;
  description: string;
  image: string;
  player_count: number;
  passed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type AddGameFormType = {
  title: string;
};

export type GameContextType = {
  games: GameType[];
  favorites: GameType[];
};

export type GameContextActions =
  | {
      type: 'CLEAR_ALL_GAMES';
    }
  | { type: 'ADD_GAME'; payload: GameType }
  | {
      type: 'DELETE_GAME';
      payload: GameType['id'];
    }
  | {
      type: 'EDIT_GAME';
      payload: GameType;
    }
  | {
      type: 'SET_GAMES';
      payload: GameType[];
    }
  | {
      type: 'ADD_FAVORITES';
      payload: GameType[];
    };
