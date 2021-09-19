import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, NextToPlay } from "@styles/components/Display";

import { gameSelector } from "@store/selectors";
import { setMessage } from "@store/actions/game";

const Display = () => {
  const { squares, winner, nextSymbol, message, playersName } =
    useSelector(gameSelector);

  const dispatch = useDispatch();

  const isBoardFull = useCallback(() => {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return false;
      }
    }
    return true;
  }, [squares]);

  useEffect(() => {
    const getStatus = () => {
      if (winner) {
        return "Winner: " + playersName[winner];
      } else if (isBoardFull()) {
        return "Draw!";
      } else {
        return "Next player: " + playersName[nextSymbol];
      }
    };
    dispatch(setMessage(getStatus()));
  }, [winner, nextSymbol]);

  return (
    <Container>
      <NextToPlay>{message}</NextToPlay>
    </Container>
  );
};

export default Display;
