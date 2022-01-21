const initialState = {
  appoinments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COACH_APPOINTMENTS':
      return {
        ...state,
        appoinments: action.data
      }
    default:
      return {
        ...state,
      }
  }
};

export default reducer;
