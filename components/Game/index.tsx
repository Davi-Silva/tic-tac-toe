import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { gameSelector } from "@store/selectors";
import { setWinner, incrementPlayerScoreboard } from "@store/actions/game";

import Buttons from "@components/Buttons";
import Board from "@components/Board";
import Display from "@components/Display";

import { Container } from "@styles/components/Game";

const Game: FC = () => {
  const { squares, winner } = useSelector(gameSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const calculateWinner = (): any => {
      const possibleLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < possibleLines.length; i++) {
        const [a, b, c] = possibleLines[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a];
        }
      }
      return null;
    };

    dispatch(setWinner(calculateWinner()));
  }, [squares]);

  useEffect(() => {
    if (winner) {
      dispatch(incrementPlayerScoreboard());
    }
  }, [winner]);

  return (
    <Container>
      <Buttons />
      <Board />
      <Display />
    </Container>
  );
};

export default Game;
