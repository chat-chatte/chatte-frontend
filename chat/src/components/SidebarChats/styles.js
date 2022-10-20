import styled from "styled-components";

export const Container = styled.div`
  height: 73vh;
  overflow-y: auto;
  background-color: white;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export const ContainerOptions = styled.div`
padding: 1%;
display: flex;
align-items: center;
justify-content: space-around;
`
export const Chat = styled.div`
width: 120px;
cursor: pointer;
color: white;
height: 25px;
background-color: #2c2c2c;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;

`;

export const Content = styled.div``;



