const initialState = {
  coachList: [],
  bookings: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COACHES':
      return {
        ...state,
        coachList: action.data
      }
    case 'GET_USER_BOOKINGS':
      return {
        ...state,
        bookings: action.data,
      }
    default:
      return {
        ...state,
      }
  }
};

export default reducer;
