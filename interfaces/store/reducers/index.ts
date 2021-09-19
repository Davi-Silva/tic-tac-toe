export interface IState {
  game: {
    squares: string[] | null[];
    isXNext: boolean;
    nextSymbol: "X" | "O";
    winner: null | "playerOne" | "playerTwo";
    playersName: {
      X: string;
      O: string;
    };
    scoreboard: {
      X: number;
      O: number;
    };
    message: string;
  };
  app: {
    theme: "light" | "dark";
    leaderboard: boolean;
  };
}
