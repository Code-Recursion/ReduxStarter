const initalState = {
  age: 21,
  history: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "AGE_UP":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({ id: Math.random(), age: state.age }),
      };
    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({ id: Math.random(), age: state.age }),
      };
    case "DELETE_ITEM":
      // const item = state.history.find((x) => x.id === action.key);
      // console.log(item);
      return {
        ...state,
        history: state.history.filter((element) => element.id !== action.key),
      };
    case "AGE_RESET":
      return {
        age: initalState.age,
        history: [],
      };
    default:
      return state;
  }
};

export default reducer;
