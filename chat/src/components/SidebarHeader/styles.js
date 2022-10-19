import styled from "styled-components";

export const Container = styled.div`
  height: 120px;
  background-color: #2c2c2c;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #3a3a3a;
  box-shadow: 0 1px 2px #0003;
`;

export const Avatar = styled.img`
  width: 65px;
  height: 65px;
  cursor: pointer;
  border-radius: 50%;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #f72585;
    cursor: pointer;
  }
`;

export const Status = styled.select`
outline: none;
border-radius: 6px;
padding: 2px

`;

