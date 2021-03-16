import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import axios from "axios";

import { firestore } from "../../../config/FirebaseUtils";

import { temperatureFailure, temperatureSuccess } from "./actions";
export function* loadTemperature({ payload }) {
  try {
    const { city } = payload;
    const resp = yield call(
      axios.get,
      `${process.env.NEXT_PUBLIC_API_URL}?q=${city}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
    );
    const obj = {
      city: resp.data.name,
      temp: resp.data.main.temp,
      temp_min: resp.data.main.temp_min,
      temp_max: resp.data.main.temp_max,
      icon: resp.data.weather[0].icon,
      description: resp.data.weather[0].description,
    };
    firestore
      .collection("City")
      .doc(city)
      .set(obj)
      .then(function () {
        toast.success(`Temperatura da cidade ${city} atualizada com sucesso.`);
        firestore.collection("Log").add({
          ...obj,
          city: city,
          date: new Date(),
        });
      });
    const tempMax = localStorage.getItem("@challengerAmbar:tempMax");
    const tempMin = localStorage.getItem("@challengerAmbar:tempMin");

    const objMax = {
      city: obj.city,
      value: obj.temp_max,
    };
    const objMin = {
      city: obj.city,
      value: obj.temp_min,
    };
    let cityMax = {};
    let cityMin = {};
    if (tempMax && tempMin) {
      if (obj.temp_max > parseFloat(JSON.parse(tempMax).value)) {
        localStorage.setItem(
          "@challengerAmbar:tempMax",
          JSON.stringify(objMax)
        );
        cityMax = objMax;
      } else {
        cityMax = JSON.parse(tempMax);
      }
      if (obj.temp_min < parseFloat(JSON.parse(tempMin).value)) {
        localStorage.setItem(
          "@challengerAmbar:tempMin",
          JSON.stringify(objMin)
        );
        cityMin = objMin;
      } else {
        cityMin = JSON.parse(tempMin);
      }
    } else {
      localStorage.setItem("@challengerAmbar:tempMax", JSON.stringify(objMax));
      cityMax = JSON.parse(tempMax);

      localStorage.setItem("@challengerAmbar:tempMin", JSON.stringify(objMin));
      cityMin = JSON.parse(tempMin);
    }
    yield put(temperatureSuccess({ cityMin, cityMax, ...obj }));
  } catch (error) {
    yield put(temperatureFailure());
    toast.error("Erro ao carregar os dados!");
  }
}

export default all([
  takeLatest("@temperature/LOAD_TEMPERATURE_REQUEST", loadTemperature),
]);
