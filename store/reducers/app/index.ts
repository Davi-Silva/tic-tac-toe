import update from "immutability-helper";

const initialState = {
  theme: "light",
  leaderboard: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      if (action.theme) {
        return update(state, {
          theme: { $set: action.theme },
        });
      } else {
        if (state.theme === "light") {
          return update(state, {
            theme: { $set: "dark" },
          });
        } else {
          return update(state, {
            theme: { $set: "light" },
          });
        }
      }
    case "TOGGLE_LEADERBOARD":
      return update(state, {
        leaderboard: { $set: !state.leaderboard },
      });
    default:
      return state;
  }
}
