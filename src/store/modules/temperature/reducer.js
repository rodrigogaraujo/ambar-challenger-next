import produce from "immer";

const INITIAL_STATE = {
  data: {
    city: "",
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    icon: "",
    description: "",
  },
  tempMax: { city: "", value: 0 },
  tempMin: { city: "", value: 0 },
  loading: true,
  error: false,
};

export default function temperature(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@temperature/TEMPERATURE_SUCCESS": {
        draft.data = action.payload.data;
        draft.tempMax = draft.data.cityMax;
        draft.tempMin = draft.data.cityMin;
        draft.loading = false;
        draft.error = false;

        break;
      }

      case "@temperature/TEMPERATURE_FAILURE": {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
