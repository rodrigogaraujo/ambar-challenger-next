import produce from 'immer';

const INITIAL_STATE = {
  data: {
    city: '',
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    icon: '',
    description: '',
  },
  tempMax: { city: '', value: 0 },
  tempMin: { city: '', value: 0 },
  loading: true,
  error: false,
};

export default function temperature(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@temperature/TEMPERATURE_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        const tempMax = localStorage.getItem('@challengerAmbar:tempMax');
        const tempMin = localStorage.getItem('@challengerAmbar:tempMin');
        const objMax = {
          city: action.payload.data.city,
          value: action.payload.data.temp_max,
        };
        const objMin = {
          city: action.payload.data.city,
          value: action.payload.data.temp_min,
        };
        if (tempMax && tempMin) {
          if (
            action.payload.data.temp_max > parseFloat(JSON.parse(tempMax).value)
          ) {
            localStorage.setItem(
              '@challengerAmbar:tempMax',
              JSON.stringify(objMax)
            );
            draft.tempMax = objMax;
          } else {
            draft.tempMax = JSON.parse(tempMax);
          }
          if (
            action.payload.data.temp_min < parseFloat(JSON.parse(tempMin).value)
          ) {
            localStorage.setItem(
              '@challengerAmbar:tempMin',
              JSON.stringify(objMin)
            );
            draft.tempMin = objMin;
          } else {
            draft.tempMin = JSON.parse(tempMin);
          }
        } else {
          localStorage.setItem(
            '@challengerAmbar:tempMax',
            JSON.stringify(objMax)
          );
          draft.tempMax = JSON.parse(tempMax);

          localStorage.setItem(
            '@challengerAmbar:tempMin',
            JSON.stringify(objMin)
          );
          draft.tempMin = JSON.parse(tempMin);
        }
        break;
      }

      case '@temperature/TEMPERATURE_FAILURE': {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
