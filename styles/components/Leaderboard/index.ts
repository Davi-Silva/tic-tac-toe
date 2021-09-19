import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.leaderboard.background};
  padding: 1rem;
  border-radius: 0.2rem;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px, rgba(0, 0, 0, 0.15) 0px 0px 2px;
  width: 22rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.leaderboard.heading.color};
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Item = styled.li`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.leaderboard.heading.color};
  list-style: none;
`;
