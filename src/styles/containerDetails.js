import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;

  h1 {
    font-size: 28px;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
  }

  h2 {
    width: 100%;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div``;

export const Button = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  max-width: 300px;
  align-self: center;
  background: black;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);

  &&:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    font-size: 17px;
  }
`;
