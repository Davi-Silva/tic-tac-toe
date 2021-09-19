import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { gameSelector } from "@store/selectors";
import { toggleLeaderboard } from "@store/actions/app";

import {
  Container,
  Background,
  Heading,
  List,
  Item,
} from "@styles/components/Leaderboard";

const Leaderboard = () => {
  const { scoreboard, playersName } = useSelector(gameSelector);

  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(toggleLeaderboard());
  }, [dispatch]);

  return (
    <>
      <Background onClick={handleClose} />
      <Container>
        <Heading>Leaderboard</Heading>
        <List>
          <Item>
            {playersName.X}: <strong>{scoreboard.X}</strong>
          </Item>
          <Item>
            {playersName.O}: <strong>{scoreboard.O}</strong>
          </Item>
        </List>
      </Container>
    </>
  );
};

export default Leaderboard;
