import { all } from 'redux-saga/effects';

import temperature from './temperature/sagas';
import initial from './initialData/sagas';

export default function* rootSaga() {
  yield all([temperature, initial]);
}
