import { GETORDERS, GETDETAILORDERS } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  order: false,

  user: null,
  error: null,
  isloading: false
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case `${GETORDERS}_PENDING`:
      return {
        ...state,
        order: false,
        isloading: true,
        error: null
      };
    case `${GETORDERS}_FULFILLED`:
      return {
        ...state,
        order: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${GETORDERS}_REJECTED`:
      return {
        ...state,
        order: false,
        error: null
      };

    default:
      return state;
  }
};

export default orders;
