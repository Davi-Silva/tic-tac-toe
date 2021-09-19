import styled from "styled-components";

interface Props {
  currentTheme: "light" | "dark";
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.5rem;
  border-radius: 50rem;
  border: 1px solid ${({ theme }) => theme.buttons.reset.borderColor};
  background: ${({ theme }) => theme.buttons.reset.background};
  cursor: pointer;
  svg {
    font-size: 1rem;
    color: ${({ theme }) => theme.buttons.reset.color};
  }
`;

export const ThemeSwitch = styled.div<Pick<Props, "currentTheme">>`
  border-radius: 4rem;
  border: 2px solid ${({ theme }) => theme.buttons.themeSwitcher.borderColor};
  background: ${({ theme }) => theme.buttons.themeSwitcher.background};
  height: 2rem;
  width: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0 3px;
  justify-content: ${({ currentTheme }) =>
    currentTheme === "light" ? "start" : "end"};
`;

export const ThemeSwitchButton = styled.button`
  background: ${({ theme }) => theme.buttons.themeSwitcher.toggler.background};
  height: 1.3rem;
  width: 1.3rem;
  border: none;
  border-radius: 50rem;
  cursor: pointer;
`;
