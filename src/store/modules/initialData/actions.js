export function initialLoad() {
  return {
    type: '@initial/LOAD_INITIAL_REQUEST',
  };
}

export function initialSuccess(data) {
  return {
    type: '@initial/INITIAL_SUCCESS',
    payload: { data },
  };
}

export function initialFailure() {
  return {
    type: '@initial/INITIAL_FAILURE',
  };
}
