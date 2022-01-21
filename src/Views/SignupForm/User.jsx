import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

import FormContainer from './styles';

import User from '../../assets/userImg.jpg';

const calculateDiff = (date1, date2) => {
  let diff = (date1.getTime() - date2.getTime()) / 1000;
  diff /= (60 * 60);
  diff /= 24;
  diff /= 365;
  return diff;
}

const validation = yup.object({
  name: yup.string().required().min(3).max(50),
  password: yup.string().required().min(5).max(10),
  phNum: yup.number().required('phone number is a required field').test(
    'length', 'phone number must be 10 digests long', val => val && val.toString().length === 10
  ),
  email: yup.string().required(),
  dob: yup.date().required().test('age', 'age must be 18 or older', val => {
    const age = calculateDiff(new Date(), new Date(val));
    console.log(Math.floor(age))
    return Math.floor(age) >= 18;
  }),
  gender: yup.string(),
  zipcode: yup.number().test(
    'length', 'zipcode must be 5 digits long', val => val && val.toString().length === 5
  ),
  city: yup.string().required().min(6).max(20),
  state: yup.string().required().min(6).max(20),
  country: yup.string().required().min(6).max(20)
})

const UserForm = ({ submit }) => {
  const [userId, setId] = useState(undefined);
  const [popup, setPopup] = useState(false);

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: '',
      password: '',
      phNum: '',
      email: '',
      dob: new Date(),
      zipcode: '',
      city: '',
      state: '',
      country: ''
    },
    onSubmit: (values) => {
      console.log(values)
      submit(values).then(res => {
        if(res.password === values.password) {
          setPopup(true);
          setId(res.id);
        } else {
          alert('something went wrong with registration')
        }
      })
    }
  })
  return (
    <FormContainer width="45%" height="90%">
      <form className="user" onSubmit={formik.handleSubmit}>
        <div className="img-container">
          <img src={User} alt="" />
          <h2>User Profile</h2>
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
          {formik.errors.name && formik.touched.name && <div className="err">{formik.errors.name}</div>}
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
          {formik.errors.password && formik.touched.password && <div className="err">{formik.errors.password}</div>}
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
          {formik.errors.phNum && formik.touched.phNum && <div className="err">{formik.errors.phNum}</div>}
        </label>

        <label htmlFor="email">
          <div>Email:</div>
          <input
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && <div className="err">{formik.errors.email}</div>}
        </label>

        <label htmlFor="dob">
          <div>Date of Birth:</div>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formik.values.dob}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.dob && formik.touched.dob && <div className="err">{formik.errors.dob}</div>}
        </label>

        <label htmlFor="gender" className="radio">
          <div>Gender:</div>
          <input
            id="Male"
            name="gender"
            type="radio"
            value="Male"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />Male
          <input
            id="Female"
            name="gender"
            type="radio"
            value="Female"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />Female
          {formik.errors.gender && formik.touched.gender && <div className="err">{formik.errors.gender}</div>}
        </label>

        <label htmlFor="zipcode">
          <div>Zipcode:</div>
          <input
            id="zipcode"
            name="zipcode"
            type="number"
            value={formik.values.zipcode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.zipcode && formik.touched.zipcode && <div className="err">{formik.errors.zipcode}</div>}
        </label>

        <label htmlFor="city">
          <div>City:</div>
          <input
            id="city"
            name="city"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.city && formik.touched.city && <div className="err">{formik.errors.city}</div>}
        </label>

        <label htmlFor="state">
          <div>State:</div>
          <input
            id="state"
            name="state"
            type="text"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.state && formik.touched.state && <div className="err">{formik.errors.state}</div>}
        </label>

        <label htmlFor="country">
          <div>Country:</div>
          <input
            id="country"
            name="country"
            type="text"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.country && formik.touched.country && <div className="err">{formik.errors.country}</div>}
        </label>

        <div className="btn-container">
          <button type="submit">Register</button>
        </div>
      </form>

      <div style={popup ? { display: 'flex'} : { display: 'none'}} className="popup">
        <div className="popup-img">
          <img src={User} alt="" />
        </div>
        <div className="popup-btn">
          <h2>Account Created Successfully</h2>
          <h4>Your User Id is {userId}</h4>
          <button><Link to="/login/user">Login Now</Link></button>
        </div>
      </div>
    </FormContainer>
  );
};

export default UserForm;
