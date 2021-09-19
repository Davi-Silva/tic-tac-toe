import { useSelector } from "react-redux";

import Square from "@components/Square";

import { gameSelector } from "@store/selectors";

import { Container } from "@styles/components/Board";

const Board = () => {
  const { squares } = useSelector(gameSelector);

  return (
    <Container>
      {squares.map((square, index) => (
        <Square key={index} i={index} />
      ))}
    </Container>
  );
};

export default Board;
