import * as TYPES from "../actions";
import { combineReducers } from "redux";

function count(state = {}, action) {
  switch (action.type) {
    case TYPES.INCREASE:
      return { count: state.count + 1 };
    case TYPES.DECREASE:
      return { count: state.count - 1 };
  }
  return state;
}

function fetchMovies(state = {}, action) {
  switch (action.type) {
    case TYPES.FETCHMOVIES:
      return { ...state, movies: action.payload };
  }
  return state;
}

const rootReducer = combineReducers({
  count,
  movies: fetchMovies
});
export default rootReducer;
