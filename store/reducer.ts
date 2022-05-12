import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";
import counterReducer, { CounterState } from "../features/counter/counterSlice";

export interface IState {
  // 추가 Reducer를 만든다면 해당되는 타입도 여기다 추가 작성해준다
  counter: CounterState;
}

const rootReducer = (state: IState, action: AnyAction): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        // 추가 Reducer를 만든다면 여기다 추가 작성해준다
        counter: counterReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
