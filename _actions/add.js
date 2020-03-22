import { ADD } from "../config/constants";
import { API, setAuthToken } from "../config/api";

export const add = data => {
  return {
    type: ADD,
    payload: async () => {
      // console.log(`input data wkwkwkwk`, kirim);
      const res = await API.post("addticket", data);
      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("email", res.data.email);
      return res.data;
    }
  };
};
