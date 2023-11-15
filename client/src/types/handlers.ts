import { AddGameFormType, GameType } from "./game";

export type AddGameHandlerType = (formData: AddGameFormType) => Promise<void>

export type DeleteHandlerType = (id: GameType['id']) => void;

export type AsyncHandlerType = () => Promise<void> 