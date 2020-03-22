import { ALLTICKET } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  ticket: false,
  user: null,
  error: null,
  isloading: false
};

const allticket = (state = initialState, action) => {
  switch (action.type) {
    case `${ALLTICKET}_PENDING`:
      return {
        ...state,
        ticket: false,
        isloading: true,
        error: null
      };
    case `${ALLTICKET}_FULFILLED`:
      return {
        ...state,
        ticket: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${ALLTICKET}_REJECTED`:
      return {
        ...state,
        ticket: false,
        error: null
      };

    default:
      return state;
  }
};

export default allticket;
