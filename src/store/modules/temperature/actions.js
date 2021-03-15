export function temperatureLoad(city) {
  return {
    type: '@temperature/LOAD_TEMPERATURE_REQUEST',
    payload: { city },
  };
}

export function temperatureSuccess(data) {
  return {
    type: '@temperature/TEMPERATURE_SUCCESS',
    payload: { data },
  };
}

export function temperatureFailure() {
  return {
    type: '@temperature/TEMPERATURE_FAILURE',
  };
}
