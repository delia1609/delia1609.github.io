import styled from "styled-components";

const FlexWrapper = styled.div`
display: flex;
flex-direction: ${({ column }) => column ? 'column' : 'row'};
${({ center }) => center ? (
  `align-items: center;
  justify-content: center;`
) : `` }
`;

export default function Flex ({ children, style, column = false, center = false }) {
  return (
    <FlexWrapper column={column} center={center} style={style}>
      {children}
    </FlexWrapper>
  );
}