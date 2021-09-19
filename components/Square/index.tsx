import { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Symbol } from "@styles/components/Square";

import { ISquare } from "@interfaces/components/Square";

import { gameSelector } from "@store/selectors";
import { setIsXNext, setSquares, setNextSymbol } from "@store/actions/game";

const Square: FC<ISquare> = ({ i }) => {
  const { squares, winner, nextSymbol, isXNext } = useSelector(gameSelector);

  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    if (squares[i] !== null || winner !== null) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = nextSymbol;

    dispatch(setSquares(nextSquares));
    dispatch(setIsXNext(!isXNext));
    dispatch(setNextSymbol());
  }, [squares, winner, nextSymbol, isXNext, dispatch]);

  return (
    <Container type="button" onClick={handleClick}>
      <Symbol>{squares[i]}</Symbol>
    </Container>
  );
};

export default Square;
