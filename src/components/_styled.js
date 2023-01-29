import styled from "styled-components";

export const Header = styled.h1`
  margin-top: 0;
`

export const Button = styled.button`
  border: solid 1px #aaa;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #ccc;
    transform: translateY(1px);
  }
`