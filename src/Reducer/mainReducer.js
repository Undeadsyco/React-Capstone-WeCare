const initialState = {
  isLoggedIn: false,
  loginType: '',
  coach: undefined,
  user: undefined
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_COACH':
      return {
        ...state,
        isLoggedIn: true,
        loginType: 'coach',
        coach: action.data
      }
    case 'LOGIN_USER':
      return {
        ...state,
        isLoggedIn: true,
        loginType: 'user',
        user: action.data
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        loginType: '',
        coach: undefined,
        user: undefined
      }
    default:
      return {
        ...state,
      }
  }
};

export default reducer;
