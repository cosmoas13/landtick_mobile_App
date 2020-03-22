import { APPROVE } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  order: false,

  user: null,
  error: null,
  isloading: false
};

const approve = (state = initialState, action) => {
  switch (action.type) {
    case `${APPROVE}_PENDING`:
      return {
        ...state,
        order: false,
        isloading: true,
        error: null
      };
    case `${APPROVE}_FULFILLED`:
      //   console.log(action.payload, "ciiii");
      return {
        ...state,
        order: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${APPROVE}_REJECTED`:
      return {
        ...state,
        order: false,
        error: null
      };

    default:
      return state;
  }
};

export default approve;
