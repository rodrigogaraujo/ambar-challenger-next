import sagaHelper from "redux-saga-testing";
import { call, put } from "redux-saga/effects";
import { get } from "axios";
import { loadTemperature } from "./sagas";
import { temperatureFailure, temperatureSuccess } from "./actions";

const MOCK_RESPONSE = {
  city: "Teresina",
  description: "céu pouco nublado",
  icon: "02n",
  temp: 302.15,
  temp_max: 302.15,
  temp_min: 302.15,
};

const RESPONSE_API = {
  data: {
    name: "Teresina",
    main: { temp: 302.15, temp_min: 302.15, temp_max: 302.15 },
    weather: [{ icon: "02n", description: "céu pouco nublado" }],
  },
};

describe("test loadTemperature", () => {
  const it = sagaHelper(loadTemperature({ payload: { city: "Teresina" } }));
  it("should have called API to get the weather", (result) => {
    expect(result).toEqual(
      call(
        get,
        `${process.env.NEXT_PUBLIC_API_URL}?q=Teresina&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
      )
    );
    return {
      ...RESPONSE_API,
    };
  });
  it("should be able to put the action to update reducer after save in firebase", (result) => {
    expect(result).toEqual(
      put(
        temperatureSuccess({
          ...MOCK_RESPONSE,
        })
      )
    );
  });

  it("all tests are ok", (result) => {
    expect(result).toBeUndefined();
  });
});

describe("test loadTemperature with error", () => {
  const it = sagaHelper(loadTemperature({ payload: { city: "Teresina" } }));
  it("should have called API to get the weather", (result) => {
    expect(result).toEqual(
      call(
        get,
        `${process.env.NEXT_PUBLIC_API_URL}?q=Teresina&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_KEY}&lang=pt`
      )
    );
    return new Error("Something went wrong");
  });

  it("should be able to put the action to update reducer if throw a error", (result) => {
    expect(result).toEqual(put(temperatureFailure()));
  });

  it("all tests are ok", (result) => {
    expect(result).toBeUndefined();
  });
});
