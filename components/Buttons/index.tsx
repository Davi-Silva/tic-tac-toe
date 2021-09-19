import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRedo, FaTrophy } from "react-icons/fa";

import {
  Container,
  DefaultButton,
  ThemeSwitch,
  ThemeSwitchButton,
} from "@styles/components/Buttons";

import { resetGame } from "@store/actions/game";
import { toggleTheme, toggleLeaderboard } from "@store/actions/app";
import { appSelector } from "@store/selectors";

const Buttons = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(appSelector);

  const handleResetGame = useCallback(() => {
    dispatch(resetGame());
  }, [dispatch]);

  const handleThemeSwitch = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const handleOpenLeaderboard = useCallback(() => {
    dispatch(toggleLeaderboard());
  }, [dispatch]);

  return (
    <Container>
      <DefaultButton type="button" onClick={handleResetGame}>
        <FaRedo />
      </DefaultButton>
      <ThemeSwitch currentTheme={theme}>
        <ThemeSwitchButton onClick={handleThemeSwitch} />
      </ThemeSwitch>
      <DefaultButton type="button" onClick={handleOpenLeaderboard}>
        <FaTrophy />
      </DefaultButton>
    </Container>
  );
};

export default Buttons;
