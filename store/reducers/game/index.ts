import update from "immutability-helper";

const initialState = {
  squares: Array(9).fill(null),
  isXNext: true,
  nextSymbol: "X",
  winner: null,
  playersName: {
    X: null,
    O: null,
  },
  scoreboard: {
    X: 0,
    O: 0,
  },
  message: null,
};

export default function game(state = initialState, action) {
  switch (action.type) {
    case "SET_WINNER":
      return update(state, {
        winner: { $set: action.payload.winner },
      });
    case "INCREMENT_PLAYER_SCOREBOARD":
      if (state.winner) {
        return update(state, {
          scoreboard: {
            [state.winner]: { $set: ++state.scoreboard[state.winner] },
          },
        });
      }
    case "SET_IS_X_NEXT":
      return update(state, {
        isXNext: { $set: action.payload.isXNext },
      });
    case "SET_NEXT_SYMBOL":
      return update(state, {
        nextSymbol: { $set: state.isXNext ? "X" : "O" },
      });
    case "SET_SQUARES":
      return update(state, {
        squares: { $set: action.payload.squares },
      });
    case "SET_MESSAGE":
      return update(state, {
        message: { $set: action.payload.message },
      });
    case "RESET_GAME":
      return update(state, {
        squares: { $set: Array(9).fill(null) },
        isXNext: { $set: true },
        nextSymbol: { $set: "X" },
        winner: { $set: null },
        player: { $set: 0 },
        turn: { $set: 0 },
        message: { $set: null },
      });
    case "SET_PLAYERS_NAME":
      return update(state, {
        playersName: { $set: action.payload.playersName },
      });
    default:
      return state;
  }
}
