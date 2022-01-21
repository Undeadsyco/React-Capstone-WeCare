import axios from 'axios';

const url = 'http://localhost:5000';

const actions = {
  getAppointments: async (id) => {
    const req = await axios.get(`${url}/appointments?coachId=${id}`);
    const res = await req.data;
    console.log(res);
    return res;
  } 
};

export default actions;
