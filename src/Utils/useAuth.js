import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(localStorage.getItem('currentUser')));
  const [coach] = useState(JSON.parse(localStorage.getItem('currentCoach')));
  
  useEffect(() => {
    if (user) dispatch({ type: 'LOGIN_USER', data: {...user} })
    if (coach) dispatch({ type: 'LOGIN_COACH', data: {...coach} });
  }, [user, coach, dispatch]);

  const checkAuth = () => user || coach ? true : false;

  return { checkAuth };
};

export default useAuth;
