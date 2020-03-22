import {
  LOGIN,
  REGISTER,
  GETORDERS,
  GETDETAILORDERS,
  APPROVE
} from "../config/constants";
import { API, setAuthToken } from "../config/api";

export const getorders = () => {
  return {
    type: GETORDERS,
    payload: async () => {
      const res = await API.get("/orders");
      //   const data = res.data.data;
      //   console.log(res.data, "ini orders");
      return res.data.data;
    }
  };
};

export const getdetailorders = id => {
  console.log(id, "wooooorororaoro");
  if (id == undefined) {
    return {
      type: GETDETAILORDERS,
      payload: async () => {
        const res = await API.get(`/detailorder/1`);
        const { data } = res.data;
        //   console.log(data, "ini orders  id");
        return data;
      }
    };
  } else {
    return {
      type: GETDETAILORDERS,
      payload: async () => {
        const res = await API.get(`/detailorder/${id}`);
        const { data } = res.data;
        // console.log(data, "ini orders  id");

        return data;
      }
    };
  }
};

export const approve1 = (id, data1) => {
  if (id == undefined) {
    return {
      type: APPROVE,
      payload: async () => {
        const res = await API.get(`/detailorder/1`);
        const { data } = res.data;

        return data;
      }
    };
  } else {
    return {
      type: APPROVE,
      payload: async () => {
        const res = await API.patch(`/approve/${id}`, data1);
        const { data } = res.data;

        return data;
      }
    };
  }
};
