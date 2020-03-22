import { ATTACH } from "../config/constants";
import { API, setAuthToken } from "../config/api";

export const attach = (idx, data2) => {
  // console.log(idx, "kakakak");

  return {
    type: ATTACH,
    payload: async () => {
      const res = await API.post(`/attach/${idx}`, data2, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const { data } = res.data;
      console.log(data, "attach   ");

      return data;
    }
  };
};
