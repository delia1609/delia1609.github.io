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

export const StyledBtn = styled.button`
  padding: 4px 6px;
  background-color: ${props => props.primary ? '#b2efc2' : '#bbb'};
  border: solid 1px #97caa4;
  border-radius: 4px;
  min-width: 30px;
  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: #9bd2a9;
    border: solid 1px #7ca787;
  }

  &:active {
    background-color: yellow;
    border: solid 1px #dfde08;
    transition: none;
  }

  &:disabled {
    background-color: #cfcfcf;
    border: solid 1px #AAA;
  }
`;