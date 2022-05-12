import { configureStore, Reducer } from "@reduxjs/toolkit";
import rootReducer, { IState } from "./reducer";
import { AnyAction, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer as Reducer<IState, AnyAction>,
  });
  return store;
};
const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const wrapper = createWrapper<Store<IState>>(createStore);
export default wrapper;
