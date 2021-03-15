import { useRouter } from "next/router";
import { useCallback } from "react";
import {
  WiCelsius,
  WiCloudy,
  WiCloud,
  WiDayRainWind,
  WiNightAltRainMix,
  WiDaySnowThunderstorm,
  WiNightAltLightning,
  WiSnow,
  WiNightAltThunderstorm,
  WiDayThunderstorm,
} from "react-icons/wi";

import { Container, Row, Icon, Button } from "../styles/containerDetails";

export default function containerDetails({ data }) {
  const router = useRouter();

  const handleIcon = useCallback((icon) => {
    switch (icon) {
      case "01d":
        return <WiCloud size={35} />;
      case "03d":
        return <WiCloudy size={35} />;
      case "09d":
        return <WiDayRainWind size={35} />;
      case "09n":
        return <WiNightAltRainMix size={35} />;
      case "10d":
        return <WiDayRainWind size={35} />;
      case "10n":
        return <WiNightAltRainMix size={35} />;
      case "11d":
        return <WiDaySnowThunderstorm size={35} />;
      case "11n":
        return <WiNightAltLightning size={35} />;
      case "13d":
        return <WiSnow size={35} />;
      case "13n":
        return <WiSnow size={35} />;
      case "50d":
        return <WiDayThunderstorm size={35} />;
      case "50n":
        return <WiNightAltThunderstorm size={35} />;
      default:
        return <WiCloudy size={35} />;
    }
  }, []);

  return (
    <Container>
      <h1>Informações da cidade: {data.city}</h1>
      <Row>
        <h3>
          {(data.temp - 273.15).toFixed(2)}
          <WiCelsius size={25} />
        </h3>
        <Icon>{handleIcon(data.icon)}</Icon>
        <h3>{data.description}</h3>
      </Row>
      <h2>
        Temp. máxima: {(data.temp_max - 273.15).toFixed(2)}
        <WiCelsius />
      </h2>
      <h2>
        Temp. mínima: {(data.temp_min - 273.15).toFixed(2)}
        <WiCelsius />
      </h2>
      <Button type="button" onClick={() => router.push(`/compare`)}>
        Comparar temp. máx/mín
      </Button>
    </Container>
  );
}
