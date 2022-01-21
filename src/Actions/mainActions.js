import axios from "axios";

const url = 'http://localhost:5000'

const actions = {
  coachSignup: async (body) => {
    const req = await axios.post(`${url}/coaches`, body);
    const res = await req.data;
    return res;
  },
  coachLogin: async (id) => {
    const req = await axios.get(`${url}/coaches/${id}`);
    const res = await req.data;
    return res;
  },
  userSignup: async (body) => {
    const req = await axios.post(`${url}/users`, body);
    const res = await req.data;
    return res;
  },
  userLogin: async (id) => {
    const req = await axios.get(`${url}/users/${id}`);
    const res = await req.data;
    console.log(res);
    return res;
  }
}

export default actions;
