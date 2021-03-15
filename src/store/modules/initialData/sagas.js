import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";
import axios from "axios";

import { initialFailure, initialSuccess } from "./actions";
export function* loadInitial() {
  try {
    const respThe = yield call(
      axios.get,
      `${process.env.NEXT_PUBLIC_API_URL}?q=Teresina&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
    );
    const respRj = yield call(
      axios.get,
      `${process.env.NEXT_PUBLIC_API_URL}?q=Rio de Janeiro&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
    );
    const respRe = yield call(
      axios.get,
      `${process.env.NEXT_PUBLIC_API_URL}?q=Recife&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
    );
    const obj = {
      cityOne: respThe.data.main.temp,
      cityTwo: respRj.data.main.temp,
      cityThree: respRe.data.main.temp,
    };
    yield put(initialSuccess(obj));
  } catch (error) {
    yield put(initialFailure());
    toast.error("Erro ao carregar os dados!");
  }
}

export default all([takeLatest("@initial/LOAD_INITIAL_REQUEST", loadInitial)]);
