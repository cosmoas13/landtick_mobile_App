import { ADD } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  order: false,

  user: null,
  error: null,
  isloading: false
};

const add = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD}_PENDING`:
      return {
        ...state,
        order: false,
        isloading: true,
        error: null
      };
    case `${ADD}_FULFILLED`:
      return {
        ...state,
        order: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${ADD}_REJECTED`:
      return {
        ...state,
        order: false,
        error: null
      };

    default:
      return state;
  }
};

export default add;
