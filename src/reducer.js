const initalState = {
  age: 21,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "AGE_UP":
      return {
        ...state,
        age: state.age + 1,
      };
    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - 1,
      };
    case "AGE_RESET":
      return { age: initalState.age };
    default:
      return state;
  }
};

export default reducer;
