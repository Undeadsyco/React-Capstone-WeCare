import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

import Coach from '../../assets/coachImg.png'

import LoginContainer from './styles';

const validation = yup.object({
  id: yup.number().required(),
  password: yup.string().required().min(5).max(10)
});

const CoachForm = ({ submit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        if(res.password === password){
          dispatch({ type: 'LOGIN_COACH', data: {...res} });
          localStorage.setItem('currentCoach', JSON.stringify(res));
          alert('Login as successful');
          navigate('/home/coach');
        }
      })
    }
  });

  return (
    <LoginContainer width="25%" height="60%">
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="img-container">
          <img src={Coach} alt="" />
          <h2>Login As Life Coach</h2>
        </div>

        <label htmlFor="id">
          <input
            id="id"
            name="id"
            type="number"
            value={formik.values.id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Coach Id..."
          />
          {formik.errors.id && formik.touched.id && <div className="err">{formik.errors.id}</div>}
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
          {formik.errors.password && formik.touched.password && <div className="err">{formik.errors.password}</div>}
        </label>

        <div className="btn-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </LoginContainer>
  );
};

export default CoachForm;
