import sagaHelper from "redux-saga-testing";
import { call, put } from "redux-saga/effects";
import { get } from "axios";
import { loadInitial } from "./sagas";
import { initialFailure, initialSuccess } from "./actions";

const MOCK_RESPONSE = {
  cityOne: 302.15,
  cityTwo: 302.15,
  cityThree: 302.15,
};

const RESPONSE_API = {
  data: {
    name: "Teresina",
    main: { temp: 302.15, temp_min: 302.15, temp_max: 302.15 },
    weather: [{ icon: "02n", description: "céu pouco nublado" }],
  },
};

describe("test loadInitial", () => {
  const it = sagaHelper(loadInitial({ payload: { city: "Teresina" } }));
  it("should have called API to get the city one weather", (result) => {
    expect(result).toEqual(
      call(
        get,
        `${process.env.NEXT_PUBLIC_API_URL}?q=Teresina&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
      )
    );
    return RESPONSE_API;
  });
  it("should have called API to get the city two weather", (result) => {
    expect(result).toEqual(
      call(
        get,
        `${process.env.NEXT_PUBLIC_API_URL}?q=Rio de Janeiro&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
      )
    );
    return RESPONSE_API;
  });
  it("should have called API to get the city three weather", (result) => {
    expect(result).toEqual(
      call(
        get,
        `${process.env.NEXT_PUBLIC_API_URL}?q=Recife&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
      )
    );
    return RESPONSE_API;
  });
  it("should be able to put the action to update reducer after save in firebase", (result) => {
    expect(result).toEqual(put(initialSuccess(MOCK_RESPONSE)));
  });

  it("all tests are ok", (result) => {
    expect(result).toBeUndefined();
  });
});

describe("test loadInitial", () => {
  const it = sagaHelper(loadInitial({ payload: { city: "Teresina" } }));
  it("should have called API to get the city one weather", (result) => {
    expect(result).toEqual(
      call(
        get,
        `${process.env.NEXT_PUBLIC_API_URL}?q=Teresina&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
      )
    );
    return new Error("Something went wrong");
  });

  it("should be able to put the action to update reducer if throw a error", (result) => {
    expect(result).toEqual(put(initialFailure()));
  });

  it("all tests are ok", (result) => {
    expect(result).toBeUndefined();
  });
});
