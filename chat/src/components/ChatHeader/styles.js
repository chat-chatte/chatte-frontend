import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  border-bottom: 1px solid #181818;
  background-color: #2c2c2c;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px #0003;
  z-index: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
    
  }
`;

export const NameContent = styled.div`
  display: grid;
`;

// Nome da pessoa
export const Name = styled.span`
  font-size: 18px;
  color: white;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Foto de perfil da conversa
export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 20px;

`;

// Icones de pesquisa e configs
export const Options = styled.div`
  display: flex;
  gap: 10px;
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #F72585;
  }
`;
