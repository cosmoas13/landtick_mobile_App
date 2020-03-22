import { MYTICKET } from "../config/constants";

import { API, setAuthToken } from "../config/api";

export const myticket = () => {
  const token = localStorage.getItem("token");
  return {
    type: MYTICKET,
    payload: async () => {
      setAuthToken(token);
      const res = await API.get("/myticket");
      //   const data = res.data.data;
      //   console.log(res.data, "ini orders");
      const { data } = res.data;
      return data;
    }
  };
};
