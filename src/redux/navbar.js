const TRIGGER = "TRIGGER"

const initialState = false;

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRIGGER:
      return !state
    default:
      return state;
  }
}

export default navbarReducer;

export const triggerNav = () => {
  return {
    type: TRIGGER,
  }
}