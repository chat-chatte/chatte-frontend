import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#F72585" : "#F72585")};
  background-color: ${(props) => (props.border ? "transparent" : "#F72585")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#F72585" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#2c2c2c")};
    border: 1px solid #2c2c2c;
    color: ${(props) => (props.border ? "#2c2c2c" : "#fff")};
  }
`;

