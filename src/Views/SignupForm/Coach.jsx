import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

import Coach from '../../assets/coachImg.png'

import FormContainer from "./styles";

const calculateDif = (time1, time2) => {
  let diff = (time1.getTime() - time2.getTime()) / 1000;
  diff /= (60 * 60);
  diff /= 24;
  diff /= 365
  return Math.floor(diff);
};

const validation = yup.object({
  name: yup.string().required().min(3).max(50),
  password: yup.string().required().min(5).max(10),
  dob: yup.date().required().test('age', 'age must be greater then 18', val => {
    const age = calculateDif(new Date(), new Date(val));
    return age >= 18;
  }),
  gender: yup.string().required(),
  phNum: yup.number().required().test('length', 'phone number must be 10 digests long', val => val && val.toString().length === 10),
  speciality: yup.string().required().min(10).max(50)
});

const CoachForm = ({ submit }) => {
  const [popup, setPopup] = useState(false);
  const [coachId, setId] = useState(undefined);

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: '',
      password: '',
      dob: new Date(),
      gender: '',
      phNum: '',
      speciality: ''
    },
    onSubmit: (values) => {
      console.log(values)
      submit(values).then(res => {
        if(res.password === values.password) {
          setPopup(true);
          setId(res.id);
          console.log(true);
        }
      })
    }
  })

  return (
    <FormContainer width="50%">
      <form onSubmit={formik.handleSubmit} className="coach">
        <div className="heading-container">
          <img src={Coach} alt="" />
          <h2>Life Coach Profile</h2>
        </div>

        <label htmlFor="name">
          <div>Name:</div>
          <input
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && <div className="errors">{formik.errors.name}</div>}
        </label>

        <label htmlFor="password">
          <div>Password:</div>
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && <div className="errors">{formik.errors.password}</div>}
        </label>
        
        <label htmlFor="dob">
          <div>Date Of Birth:</div>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.dob && <div className="errors">{formik.errors.dob}</div>}
        </label>
        
        <label htmlFor="gender">
          <div>Gender:</div>
          <input
            id="Male"
            name="gender"
            className="radio" 
            type="radio"
            value="Male"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Male
          <input
            id="Female"
            name="gender"
            className="radio" 
            type="radio"
            value="Female"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Female
          {formik.errors.gender && <div className="errors">{formik.errors.gender}</div>}
        </label>
        
        <label htmlFor="phNum">
          <div>Phone Number:</div>
          <input
            id="phNum"
            name="phNum"
            type="number"
            value={formik.values.phNum}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phNum && <div className="errors">{formik.errors.phNum}</div>}
        </label>
        
        <label htmlFor="speciality">
          <div>Speciality:</div>
          <input
            id="speciality"
            name="speciality"
            type="text"
            value={formik.values.speciality}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.speciality && <div className="errors">{formik.errors.speciality}</div>}
        </label>

        <div className="btn-container">
          <button type="submit">Register</button>
        </div>
      </form>
      
      <div style={popup ? { display: 'flex'} : { display: 'none'}} className="popup">
        <div className="popup-img">
          <img src={Coach} alt=""/>
        </div>
        <div className="popup-btn">
          <h2>You are a Coach now!</h2>
          <h4>Your Coach Id is {coachId}</h4>
          <button type="button"><Link to="/login/coach">Login Now</Link></button>
        </div>
      </div>
    </FormContainer>
  );
};

export default CoachForm;
