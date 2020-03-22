import { SEARCH } from "../config/constants";
import { API, setAuthToken } from "../config/api";

export const search = (stasiunawal, stasiunakhir) => {
  // console.log(stasiunakhir, "akhiiir");

  return {
    type: SEARCH,
    payload: async () => {
      const res = await API.get(
        `/search?citystart=${stasiunawal}&cityarrival=${stasiunakhir}`
      );
      const { data } = res.data;

      return data;
    }
  };
};
