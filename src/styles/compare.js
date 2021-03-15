import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  max-width: 1180px;
  margin: 30px auto 0;
  border-radius: 8px;
  padding: 30px 0 60px;

  h1 {
    font-size: 28px;
    display: flex;
    align-items: center;
    margin-bottom: 0;

    svg {
      margin-right: 8px;
    }
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
  justify-content: space-around;

  @media only screen and (max-width: 670px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 45%;
  justify-content: center;
  align-items: center;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 670px) {
    flex-basis: 100%;
    margin-top: 20px;
  }
`;

export const Icon = styled.div``;

export const Button = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  max-width: 200px;
  align-self: center;
  background: black;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  margin: 30px 0;

  &&:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    font-size: 17px;
  }
`;
