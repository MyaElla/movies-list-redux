export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const FETCHMOVIES = "FETCHMOVIES";

export function increment() {
  return {
    type: INCREASE
  };
}

export function decrement() {
  return {
    type: DECREASE
  };
}

export function fetchMovies(url) {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCHMOVIES,
          payload: data
        })
      );
  };
}
