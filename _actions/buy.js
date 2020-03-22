import { BUY } from "../config/constants";
import { API, setAuthToken } from "../config/api";

export const buy = data => {
  return {
    type: BUY,
    payload: async () => {
      // console.log(`input data wkwkwkwk`, kirim);
      const res = await API.post("/buy", data);
      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("email", res.data.email);
      return res.data;
    }
  };
};
