import axios from 'axios';
import { AddGameFormType, GameType } from '../types/game';

const serviceInstance = axios.create({
  baseURL: 'http://localhost:3000/api/games',
});

class GameService {
  static async getGames(): Promise<GameType[]> {
    const response = await serviceInstance.get<GameType[]>('/');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  }

  static async sendNewGame(
    formData: AddGameFormType,
  ): Promise<GameType> {
    const response = await serviceInstance.post<GameType>(
      '/',
      formData,
    );
    if (response.status === 201) return response.data;
    return Promise.reject(new Error('adding product server error'));
  }
  static async deleteProductById(id: GameType['id'],
  ): Promise<void> {
    const response = await serviceInstance.delete(`/${id}`);
    if (response.status !== 200)
      return Promise.reject(new Error('delete server error'));
  }

  static async editGame(formData: AddGameFormType,id:GameType['id']): Promise<GameType> {
    const respons = await serviceInstance.put<GameType>(`/${id}`, formData)
    if (respons.status === 200) return respons.data
  }
}
export default GameService;