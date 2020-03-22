import { ATTACH } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  order: false,

  user: null,
  error: null,
  isloading: false,
  att: false
};

const attach = (state = initialState, action) => {
  switch (action.type) {
    case `${ATTACH}_PENDING`:
      return {
        ...state,
        order: false,
        isloading: true,
        att: false,
        error: null
      };
    case `${ATTACH}_FULFILLED`:
      return {
        ...state,
        order: true,
        data: action.payload,
        isloading: false,
        att: true,
        error: null
      };
    case `${ATTACH}_REJECTED`:
      return {
        ...state,
        order: false,
        error: null,
        att: false
      };

    default:
      return state;
  }
};

export default attach;
