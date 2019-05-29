import * as TYPES from "../actions";
import { combineReducers } from "redux";

function count(state = 0, action) {
  console.log(state);

  switch (action.type) {
    case TYPES.INCREASE:
      return state + 1;

    case TYPES.DECREASE:
      return state - 1;

    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case TYPES.FETCHMOVIES:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  count,
  movies
});

export default rootReducer;
