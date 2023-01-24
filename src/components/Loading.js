import styled from "styled-components";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Inner = styled.div`
  padding: 20px;
  border-radius: 6px;
  background-color: white;
  min-width: 160px;
  text-align: center;
`;

export default function Loading({ message = "Loading..." }) {
  return (
    <CenteredDiv>
      <Inner>
        {message}
      </Inner>
    </CenteredDiv>
  );
};