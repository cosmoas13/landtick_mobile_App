import {LOGIN, REGISTER} from '../config/constants';
import {API, setAuthToken} from '../config/api';
import AsyncStorage from '@react-native-community/async-storage';

// export const getAuth = () => {
//   //AUTOAUTH
//   // CHECK AUTH TOKEN
//   console.log("getusers");
//   const token = localStorage.getItem("token");
//   if (token) {
//     return {
//       type: "GET_AUTH",
//       payload: async () => {
//         setAuthToken(token);
//         const res = await API.get("/autoauth");
//         console.log("wowowo", res.data);
//         return res.data;
//       }
//     };
//   } else {
//     return {
//       type: "LOGOUT",
//       payload: {}
//     };
//   }
// };

export const checkLogin = data => {
  console.log(data, 'boy');

  return {
    type: LOGIN,
    payload: async () => {
      const res = await API.post('/login', data);
      AsyncStorage.setItem('token', res.data.token);
      return res.data;
    },
  };
};

export const checkregister = data => {
  return {
    type: REGISTER,
    payload: async () => {
      // console.log(`input data wkwkwkwk`, kirim);
      const res = await API.post('/register', data);
      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("email", res.data.email);
      return res.data;
    },
  };
};

export const thisUser = () => {
  const token = localStorage.getItem('token');
  return {
    type: 'THIS_USER',
    payload: async () => {
      setAuthToken(token);
      const res = await API.get('/thisuser');
      const {data} = res.data;

      return data;
    },
  };
};
