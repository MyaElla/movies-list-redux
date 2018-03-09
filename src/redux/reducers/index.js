import * as TYPES from "../actions";

function count(state = {}, action) {
  switch (action.type) {
    case TYPES.INCREASE:
      return { count: state.count + 1 };
    case TYPES.DECREASE:
      return { count: state.count - 1 };
  }
  return state;
}

export default count;
