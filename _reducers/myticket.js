import { MYTICKET } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  ticket: false,
  user: null,
  error: null,
  isloading: false
};

const myticket = (state = initialState, action) => {
  switch (action.type) {
    case `${MYTICKET}_PENDING`:
      console.log(action.payload, "ciiii");
      return {
        ...state,
        ticket: false,
        isloading: true,
        error: null
      };
    case `${MYTICKET}_FULFILLED`:
      console.log(action.payload, "ciiii");
      return {
        ...state,
        ticket: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${MYTICKET}_REJECTED`:
      console.log(action.payload, "ciiii");
      return {
        ...state,
        ticket: false,
        error: null
      };

    default:
      return state;
  }
};

export default myticket;
