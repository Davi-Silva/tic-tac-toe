import "styled-components";

import {
  IStyledButtons,
  IStyledGame,
  IStyledGlobal,
  IStyledSquare,
  IStyledDisplay,
  IStyledLeaderboard,
} from "../interfaces/themes";

declare module "styled-components" {
  export interface DefaultTheme {
    game: IStyledGame;
    buttons: IStyledButtons;
    leaderboard: IStyledLeaderboard;
    square: IStyledSquare;
    display: IStyledDisplay;
    global: IStyledGlobal;
  }
}
