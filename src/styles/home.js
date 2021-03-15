import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  max-width: 1180px;
  margin: 30px auto 0;
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  @media only screen and (max-width: 1045px) {
    justify-content: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 30px;
`;
