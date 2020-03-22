import { LOGIN, REGISTER } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  authenticated: false,
  user: [],
  error: null,
  data: [],
  isloading: true,
  login_gak_cuk: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AUTH_PENDING":
      return {
        ...state
      };
    case "GET_AUTH_FULFILLED":
      console.log("payload", action.payload);
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        error: null
      };
    case "GET_AUTH_REJECTED":
      console.log("payload", action.payload);
      return {
        ...state,
        login_gak_cuk: true,
        error: true
      };
    case `${LOGIN}_PENDING`:
      return {
        ...state,
        authenticated: false,
        isloading: true,
        error: null
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${LOGIN}_REJECTED`:
      return {
        ...state,
        authenticated: false,
        login_gak_cuk: true,
        error: null
      };
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        isloading: true,
        error: null
      };
    case `${REGISTER}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        isloading: false,
        error: null
      };
    case `${REGISTER}_REJECTED`:
      return {
        ...state,
        login_gak_cuk: true,
        error: action.payload.response.data.message
      };
    case "LOGOUT":
      console.log("logout");
      return {
        ...state,
        authenticated: false,
        user: null,
        error: null
      };
    case "THIS_USER_PENDING":
      console.log("pending cukks");
      return {
        ...state,
        isloading: true
      };
    case "THIS_USER_FULFILLED":
      // console.log("payload", action.payload);
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        data: action.payload,
        isloading: false,
        error: null
      };
    case "THIS_USER_REJECTED":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default login;
