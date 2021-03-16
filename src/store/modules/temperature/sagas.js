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
      `${process.env.REACT_APP_API_URL}?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&lang=pt`
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
    yield put(temperatureSuccess(obj));
  } catch (error) {
    yield put(temperatureFailure());
    toast.error("Erro ao carregar os dados!");
  }
}

export default all([
  takeLatest("@temperature/LOAD_TEMPERATURE_REQUEST", loadTemperature),
]);
