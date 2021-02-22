const LOAD = "booking/getAllBookings";
const ADD_ONE = "booking/addOneBooking";

const getAllBookings = (bookings) => {
  return {
    type: LOAD,
    payload: bookings,
  };
};

const addOneBooking = (booking) => {
  return {
    type: ADD_ONE,
    payload: booking,
  };
};

export const getBookings = () => async (dispatch) => {
  const response = await fetch("/api/bookings/");
  const bookings = await response.json();
  return dispatch(getAllBookings(bookings));
};

export const addBooking = (payload) => async (dispatch) => {
  const response = await fetch("/api/bookings/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw response;
  const booking = await response.json();
  dispatch(addOneBooking(booking));
  return booking;
};

const initialState = {};

const bookingReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;

    case ADD_ONE:
      newState = Object.assign({}, state, {
        [action.payload.id]: action.payload,
      });
      return newState;
    default:
      return state;
  }
};

export default bookingReducer;
