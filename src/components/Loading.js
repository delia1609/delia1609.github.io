import styled from "styled-components";
import { Loader } from "@mantine/core";
import { Paper } from "@mantine/core";

const Centered = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Inner = styled.div`
  padding: 20px;
  border-radius: 6px;
  min-width: 160px;
  text-align: center;
`

export default function Loading({ message = 'Loading...' }) {
  return (
    <Centered>
      <Inner>
        <Loader />
        <div>{message}</div>
      </Inner>
    </Centered>
  )
}