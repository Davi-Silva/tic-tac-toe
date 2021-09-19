export function toggleTheme(theme?: "light" | "dark"): {
  type: "TOGGLE_THEME";
  payload: {
    theme: "light" | "dark";
  };
} {
  return {
    type: "TOGGLE_THEME",
    payload: {
      theme,
    },
  };
}

export function toggleLeaderboard(): {
  type: "TOGGLE_LEADERBOARD";
} {
  return {
    type: "TOGGLE_LEADERBOARD",
  };
}
