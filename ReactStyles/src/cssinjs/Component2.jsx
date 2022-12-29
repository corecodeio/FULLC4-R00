import React from "react";
import styled from "styled-components";

const Component2 = () => {
  const ButtonProps = styled.button`
    background-color: ${(props) => props.backColor};
    color: ${(props) => props.color};
  `;

  return (
    <ButtonProps backColor="black" color="white">
      Comp 2
    </ButtonProps>
  );
};

export default Component2;
