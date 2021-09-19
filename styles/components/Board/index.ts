import styled from "styled-components";

export const Container = styled.div`
  height: 20rem;
  width: 20rem;
  min-height: 20rem;
  min-width: 20rem;
  display: grid;
  aspect-ratio: 1 / 1;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.2rem;
`;
