import { DELETEORDER } from "../config/constants";

import { API, setAuthToken } from "../config/api";

export const deleteorder = id => {
  console.log(id, "heyheyhey");

  return {
    type: DELETEORDER,
    payload: async () => {
      const res = await API.delete(`/destroyorder/${id}`);
      const { data } = res.data;
      // console.log(data, "ini orders  id");

      return data;
    }
  };
};
