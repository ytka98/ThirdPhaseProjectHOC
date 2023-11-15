import { useCallback, useEffect, useState } from 'react';
import { AddGameFormType, GameContextActions, GameType } from '../types/game';
import { DeleteHandlerType, AddGameHandlerType, AsyncHandlerType } from '../types/handlers';
import GameService from '../services/gameService';

type UseGamesReturnType = {
  games: GameType[];
  addGameHandler: AddGameHandlerType;
  deleteGameHandler: DeleteHandlerType;
  initialLoadGames: AsyncHandlerType;
  editGameHandler: (FormData: AddGameFormType, id: GameType['id']) => Promise<void>;
};

export default function useGames(dispatch: React.Dispatch<GameContextActions>): UseGamesReturnType {
  const [games, setGames] = useState<GameType[]>([]);

  // useEffect(() => {
  //   GameService.getGames()
  //     .then((res) => setGames(res))
  //     .catch((error) => console.log(error));
  //   return () => {
  //     setGames([]);
  //   };
  // }, []);

  // const addGameHandler: AddGameHandlerType = useCallback(async (event) => {
  //   event.preventDefault();
  //   const formData = Object.fromEntries(new FormData(event.currentTarget)) as AddGameFormType;
  //   try {
  //     GameService.sendNewGame(formData).then((res) => {
  //       setGames((prevGames) => [res, ...prevGames]);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  // const deleteGameHandler: DeleteHandlerType = useCallback((id: GameType['id']): void => {
  //   GameService.deleteProductById(id).then(() =>
  //     setGames((prev) => prev.filter((game) => game.id !== id)),
  //   );
  // }, []);

  const editGameHandler = async (formData: AddGameFormType, id: GameType['id']): Promise<void> => {
    const newEditedGame = await GameService.editGame(formData, id);
    dispatch({ type: 'EDIT_GAME', payload: newEditedGame });
  };

  const addGameHandler: AddGameHandlerType = async (formData) => {
    const newGameFromBackend = await GameService.sendNewGame(formData);
    dispatch({ type: 'ADD_GAME', payload: newGameFromBackend });
  };

  const initialLoadGames = async (): Promise<void> => {
    const allGames = await GameService.getGames();
    dispatch({ type: 'SET_GAMES', payload: allGames });
  };

  const deleteGameHandler = async (id: GameType['id']): Promise<void> => {
    try {
      await GameService.deleteProductById(id);
      dispatch({ type: 'DELETE_GAME', payload: id });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    games,
    addGameHandler,
    initialLoadGames,
    deleteGameHandler,
    editGameHandler,
  };
}
