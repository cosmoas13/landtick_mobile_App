import { ALLTICKET } from "../config/constants";

import { API, setAuthToken } from "../config/api";

export const allticket = () => {
  return {
    type: ALLTICKET,
    payload: async () => {
      const res = await API.get("/gettickets");
      //   const data = res.data.data;O
      //   console.log(res.data, "ini orders");
      const { data } = res.data;
      return data;
    }
  };
};
