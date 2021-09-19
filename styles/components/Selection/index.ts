import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  border: 1px solid #000;
  border-radius: 0.3rem;
  overflow: hidden;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input`
  font-size: 1.5rem;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const Submit = styled.button`
  padding: 0 1.2rem;
  border: none;
  background: transparent;
  svg {
    font-size: 1.3rem;
  }
`;
