import { useSelector } from "react-redux";

import Game from "@components/Game";
import Selection from "@components/Selection";
import Leaderboard from "@components/Leaderboard";

import { gameSelector, appSelector } from "@store/selectors";

export default function Home() {
  const { playersName } = useSelector(gameSelector);
  const { leaderboard } = useSelector(appSelector);

  return (
    <>
      {playersName.X && playersName.O ? (
        <>
          {leaderboard && <Leaderboard />}
          <Game />
        </>
      ) : (
        <Selection />
      )}
    </>
  );
}
