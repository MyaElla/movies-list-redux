export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

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
