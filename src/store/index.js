import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import { createWrapper } from "next-redux-wrapper";

const saga = createSagaMiddleware();

const initializeStore = (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(saga));

  saga.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(initializeStore);
