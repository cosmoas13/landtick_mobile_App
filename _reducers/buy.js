import { BUY } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  order: false,

  user: null,
  error: null,
  isloading: false
};

const buy = (state = initialState, action) => {
  switch (action.type) {
    case `${BUY}_PENDING`:
      return {
        ...state,
        order: false,
        isloading: true,
        error: null
      };
    case `${BUY}_FULFILLED`:
      return {
        ...state,
        order: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${BUY}_REJECTED`:
      return {
        ...state,
        order: false,
        error: null
      };

    default:
      return state;
  }
};

export default buy;
