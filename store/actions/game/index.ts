export function setWinner(winner: "X" | "O"): {
  type: "SET_WINNER";
  payload: {
    winner: "X" | "O";
  };
} {
  return {
    type: "SET_WINNER",
    payload: {
      winner,
    },
  };
}

export function incrementPlayerScoreboard(): {
  type: "INCREMENT_PLAYER_SCOREBOARD";
} {
  return {
    type: "INCREMENT_PLAYER_SCOREBOARD",
  };
}

export function setIsXNext(isXNext: boolean): {
  type: "SET_IS_X_NEXT";
  payload: {
    isXNext: boolean;
  };
} {
  return {
    type: "SET_IS_X_NEXT",
    payload: {
      isXNext,
    },
  };
}

export function setNextSymbol(): {
  type: "SET_NEXT_SYMBOL";
} {
  return {
    type: "SET_NEXT_SYMBOL",
  };
}

export function setSquares(squares: string[]): {
  type: "SET_SQUARES";
  payload: {
    squares: string[];
  };
} {
  return {
    type: "SET_SQUARES",
    payload: {
      squares,
    },
  };
}

export function setMessage(message: string): {
  type: "SET_MESSAGE";
  payload: {
    message: string;
  };
} {
  return {
    type: "SET_MESSAGE",
    payload: {
      message,
    },
  };
}

export function resetGame(): {
  type: "RESET_GAME";
} {
  return {
    type: "RESET_GAME",
  };
}

export function setPlayersName(playersName: { X: string; O: string }): {
  type: "SET_PLAYERS_NAME";
  payload: {
    playersName: { X: string; O: string };
  };
} {
  return {
    type: "SET_PLAYERS_NAME",
    payload: { playersName },
  };
}
