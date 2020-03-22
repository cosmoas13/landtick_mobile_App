import { SEARCH } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  order: false,
  user: null,
  error: null,
  isloading: false
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case `${SEARCH}_PENDING`:
      return {
        ...state,
        order: false,
        isloading: true,
        error: null
      };
    case `${SEARCH}_FULFILLED`:
      return {
        ...state,
        order: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${SEARCH}_REJECTED`:
      return {
        ...state,
        order: false,
        error: null
      };

    default:
      return state;
  }
};

export default search;
