import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";
import counterReducer, { CounterState } from "../features/counter/counterSlice";

export interface IState {
  counter: CounterState;
}

const rootReducer = (state: IState, action: AnyAction): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        counter: counterReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
