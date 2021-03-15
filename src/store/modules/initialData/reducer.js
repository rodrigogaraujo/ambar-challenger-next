import produce from 'immer';

const INITIAL_STATE = {
  data: {
    cityOne: 0,
    cityTwo: 0,
    cityThree: 0,
  },
  loading: true,
  error: false,
};

export default function initial(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@initial/INITIAL_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        break;
      }

      case '@initial/INITIAL_FAILURE': {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
