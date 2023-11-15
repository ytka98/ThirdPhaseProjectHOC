import axios from 'axios';
import { AddGameFormType, GameType } from '../types/game';

// Создаем экземпляр axios с базовым URL, установленным на 'http://localhost:3000/api/games'
const serviceInstance = axios.create({
  baseURL: 'http://localhost:3000/api/games',
});

class GameService {
  // Получает все игры с сервера
  static async getGames(): Promise<GameType[]> {
    const response = await serviceInstance.get<GameType[]>('/');
    if (response.status === 200) {
      return response.data;
    }
    return [];
  }

  // Отправляет новую игру на сервер
  static async sendNewGame(formData: AddGameFormType): Promise<GameType> {
    const response = await serviceInstance.post<GameType>('/', formData);
    if (response.status === 201) {
      return response.data;
    }
    return Promise.reject(new Error('Ошибка добавления продукта на сервер'));
  }

  // Удаляет игру с сервера по ее ID
  static async deleteProductById(id: GameType['id']): Promise<void> {
    const response = await serviceInstance.delete(`/${id}`);
    if (response.status !== 200) {
      return Promise.reject(new Error('Ошибка удаления с сервера'));
    }
  }

  // Редактирует игру на сервере по ее ID
  static async editGame(formData: AddGameFormType, id: GameType['id']): Promise<GameType> {
    const response = await serviceInstance.put<GameType>(`/${id}`, formData);
    if (response.status === 200) {
      return response.data;
    }
  }
}

export default GameService;
