import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.square.background};
  border: 1px solid ${({ theme }) => theme.square.borderColor};
  border-radius: 0.3rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const Symbol = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.square.color};
`;
