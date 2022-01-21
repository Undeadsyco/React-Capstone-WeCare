import { useFormik } from "formik";
import * as yup from 'yup';

import LoginContainer from './styles';

import User from '../../assets/userImg.jpg';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const validation = yup.object({
  id: yup.number().required(),
  password: yup.string().required().min(5).max(10)
})

const UserForm = ({ submit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      id: '',
      password: ''
    },
    onSubmit: (values) => {
      const { id, password } = values;
      console.log(values);
      submit(id).then(res => {
        if (res.password === password) {
          dispatch({ type: 'LOGIN_USER', date: {...res} });
          localStorage.setItem('currentUser', JSON.stringify(res));
          alert('login was successful');
          navigate('/home/user');
        } else {
          alert('something went wrong');
        }
      })
    }
  })
  return (
    <LoginContainer width="25%" height="60%">
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="img-container">
          <img src={User} alt="" />
          <h2>Login As User</h2>
        </div>

        <label htmlFor="id">
          <input
            id="id"
            name="id"
            type="number"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="User Id..."
          />
        </label>

        <label htmlFor="password">
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password..."
          />
        </label>

        <div className="btn-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </LoginContainer>
  );
};

export default UserForm;
