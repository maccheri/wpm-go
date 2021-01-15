import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 3rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  .finished {
    color: red;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Button = styled.button`
  font-size: 2.5rem;
`;

export const TextBox = styled.input`
  width: 100px;
  height: 50px;
`;

const wordModifiers = {
  neutral: () => css`
    color: black;
  `,
  right: () => css`
    color: green;
  `,
  wrong: () => css`
    color: red;
  `,
};

export const Word = styled.span<{ $correct: "neutral" | "right" | "wrong" }>`
  ${({ $correct }) => css`
    ${!!$correct && wordModifiers[$correct]()}
  `}
`;
