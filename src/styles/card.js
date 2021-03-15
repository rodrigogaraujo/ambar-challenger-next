import styled from "styled-components";

export const Container = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  flex-basis: 25%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;

  @media only screen and (max-width: 1045px) {
    flex-basis: 48%;
    margin-top: 10px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 670px) {
    flex-basis: 100%;
    margin-top: 20px;
  }

  h1 {
    font-size: 28px;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
  }

  span {
    font-weight: bold;
    font-size: 28px;
  }

  &&:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    background: #001529;
    border-radius: 50%;
    padding: 5px 5px 6px 5px;
    margin-right: 12px;
  }
`;
