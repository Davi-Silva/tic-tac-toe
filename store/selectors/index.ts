import { IState } from "../../interfaces/store/reducers";

export const gameSelector = (state: IState) => state.game;
export const appSelector = (state: IState) => state.app;
