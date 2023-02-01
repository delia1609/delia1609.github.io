import styled from "styled-components";

const CenteredDiv = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function NotFoundPage() {
  return (
    <CenteredDiv>Not found!</CenteredDiv>
  );
}