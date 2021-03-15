import { Container, Row } from "../styles/card";
export default function Card({ city, value, children, handleClick }) {
  return (
    <Container onClick={handleClick} type="button">
      <h1>{city}</h1>
      <Row>
        {children}
        <span>{value.toFixed(2)}°C</span>
      </Row>
    </Container>
  );
}
