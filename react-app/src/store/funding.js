const LOAD = "funding/getAllFundings";
const LOAD_ONE = "funding/getOneFunding";
const ADD_ONE = "funding/addOneFunding";

const getAllFundings = (fundings) => {
  return {
    type: LOAD,
    payload: fundings,
  };
};

const getOneFunding = (funding) => {
  return {
    type: LOAD_ONE,
    payload: funding,
  };
};

const addOneFunding = (funding) => {
  return {
    type: ADD_ONE,
    payload: funding,
  };
};

export const getFundings = () => async (dispatch) => {
  const response = await fetch("api/fundings/");
  if (!response.ok) throw response;
  const fundings = await response.json();
  return dispatch(getAllFundings(fundings));
};

export const getFunding = (id) => async (dispatch) => {
  const response = await fetch(`api/fundings/${id}`);
  if (!response.ok) throw response;
  const funding = await response.json();
  return dispatch(getOneFunding(funding));
};

export const addFunding = (payload) => async (dispatch) => {
  const response = await fetch(`/api/fundings/${payload.spotId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw response;
  const funding = await response.json();
  dispatch(addOneFunding(funding));
  return funding;
};

const inititalState = {};

const fundingReducer = (state = inititalState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = Object.assign({}, state, { ...action.payload });
      return newState;
    case LOAD_ONE:
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

export default fundingReducer;
