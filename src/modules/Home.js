const INCREMENT = "HOME_INCREMENT";
const DECREMENT = "HOME_DECREMENT";

export const increment = payload => ({
  type: INCREMENT,
  payload
});

export const decrement = payload => ({
  type: DECREMENT,
  payload
});

export const initialState = {
  count: 0,
}

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}