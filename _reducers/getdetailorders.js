import { GETDETAILORDERS } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  order: false,

  user: null,
  error: null,
  isloading: false
};

const getdetailorders = (state = initialState, action) => {
  switch (action.type) {
    case `${GETDETAILORDERS}_PENDING`:
      console.log(action.payload, "ciiii");
      return {
        ...state,
        order: false,
        isloading: true,
        error: null
      };
    case `${GETDETAILORDERS}_FULFILLED`:
      console.log(action.payload, "ciiii");
      return {
        ...state,
        order: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${GETDETAILORDERS}_REJECTED`:
      console.log(action.payload, "ciiii");
      return {
        ...state,
        order: false,
        error: null
      };

    default:
      return state;
  }
};

export default getdetailorders;
