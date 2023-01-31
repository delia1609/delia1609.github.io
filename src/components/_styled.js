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

const getButtonColor = (variant) => {
  switch (variant) {
    case 'error':
      return '#f8869f';

    default:
      return '#bdf4b7';
  }
}

export const StyledBtn = styled.button`
  padding: 4px 6px;
  background-color: ${props => getButtonColor(props.variant)};
  border: solid 1px #999;
  border-radius: 4px;
  min-width: 30px;
  transition: box-shadow .2s;
  cursor: pointer;

  &:hover:not([disabled]) {
    box-shadow: 0 0 4px 1px rgb(0 0 0 / 20%);
  }

  &:active:not([disabled]) {
    box-shadow: none;
    transition: none;
  }

  &:disabled {
    background-color: #ddd;
    border-color: #aaa;
    cursor: default;
  }
`;