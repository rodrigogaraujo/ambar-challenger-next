import { useRouter } from "next/router";
import { WiCelsius } from "react-icons/wi";
import { FaCity } from "react-icons/fa";
import { useSelector } from "react-redux";

import { Container, Row, Button, Col } from "../styles/compare";
export default function Compare() {
  const router = useRouter();
  const { tempMax, tempMin } = useSelector((state) => state.temperature);

  return (
    <Container>
      <Button type="button" onClick={() => router.push("/")}>
        Voltar
      </Button>
      <Row>
        <Col>
          <h1>
            <FaCity size={30} />
            {tempMax.city}
          </h1>
          <h2>
            Temp. máxima: {(tempMax.value - 273.15).toFixed(2)}
            <WiCelsius size={25} />
          </h2>
        </Col>
        <Col>
          <h1>
            <FaCity size={30} />
            {tempMin.city}
          </h1>
          <h2>
            Temp. mínima: {(tempMin.value - 273.15).toFixed(2)}
            <WiCelsius size={25} />
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
