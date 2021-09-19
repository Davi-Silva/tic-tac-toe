import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const NextToPlay = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.display.color};
`;
