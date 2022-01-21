import axios from "axios";

const url = 'http://localhost:5000';

const actions = {
  getCoaches: async (filter) => {
    let req;
    if (filter) req = await axios.get(`${url}/coaches?speciality=${filter}`);
    else req = await axios.get(`${url}/coaches`);
    const res = await req.data;
    return res;
  },
  makeAppointment: async (body) => {
    const req = await axios.post(`${url}/appointments`, body);
    const res = await req.data;
    return res;
  },
  getUserBookings: async (id) => {
    const req = await axios.get(`${url}/appointments?userId=${id}`);
    const res = await req.data;
    return res;
  },
  rescheduleBooking: async (id, body) => {
    const req = axios.patch(`${url}/appointments/${id}`, body);
    const res = (await req).data;
    return res;
  },
  cancelBooking: async (id) => {
    const req = await axios.delete(`${url}/appointments/${id}`);
    const res = await req.data;
    console.log(res);
    return res;
  }
};

export default actions;
