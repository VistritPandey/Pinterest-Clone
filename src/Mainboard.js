import React from "react";
import styled from "styled-components";

function Mainboard() {
  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
}

export default Mainboard;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  background-color: white;
`;
