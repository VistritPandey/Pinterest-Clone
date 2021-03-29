import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

function Mainboard(props) {
  let { pins } = props;

  return (
    <Wrapper>
      <Container>
        {pins.map((pin) => {
          let { urls } = pin;
          <Pin urls={urls} />;
        })}
      </Container>
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
