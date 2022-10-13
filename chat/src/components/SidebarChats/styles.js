import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 70px);
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

export const Content = styled.div``;

