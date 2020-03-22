import { DELETEORDER } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  ticket: false,
  user: null,
  error: null,
  isloading: false
};

const deleteorder = (state = initialState, action) => {
  switch (action.type) {
    case `${DELETEORDER}_PENDING`:
      return {
        ...state,
        ticket: false,
        isloading: true,
        error: null
      };
    case `${DELETEORDER}_FULFILLED`:
      return {
        ...state,
        ticket: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${DELETEORDER}_REJECTED`:
      return {
        ...state,
        ticket: false,
        error: null
      };

    default:
      return state;
  }
};

export default deleteorder;
