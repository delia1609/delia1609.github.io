import styled from "styled-components";

export const Constainer = styled.div`
  display: flex;
  width: 160px;
  height: 180px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 0px 2px 2px rgba(83, 81, 85, 0.4); 
  cursor: pointer;
  transition: box-shadow .2s;

  &:hover {
    box-shadow: 0px 0px 3px 4px rgba(203, 45, 135, 0.257); 
  }
`;

export const Image = styled.img`
  max-width: 100px;
  max-height: 160px;
  height: auto;
  object-fit: contain;
  background-color: white;
`;

