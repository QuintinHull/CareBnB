
const LOAD = "spot/getAllSpots"
const LOAD_ONE = "spot/getOneSpot"
const LOAD_AVAILABLE = "spot/getAvailableSpots"
const LOAD_SEARCH = "spot/getAllSearchedSpots"
const CREATE_SPOT = "spot/createNewSpot"
const DELETE_SPOT = "spot/deleteASpot"

const getAllSearchedSpots = (spots) => {
  return {
    type: LOAD_SEARCH,
    payload: spots,
  }
}


const getAllSpots = (spots) => {
  return {
    type: LOAD,
    payload: spots,
  };
};

const getAvailableSpots = (spots) => {
  return {
    type: LOAD_AVAILABLE,
    payload: spots
  }
}

const createNewSpot = (spot) => {
  return {
    type: CREATE_SPOT,
    payload: spot,
  };
};

const deleteASpot = (spot) => {
  return {
    type: DELETE_SPOT,
    payload: spot,
  };
};

const getOneSpot = (spot) => {
  return {
    type: LOAD_ONE,
    payload: spot,
  };
};


export const getSpots = () => async (dispatch) => {
  const response = await fetch("/api/spots/");
  const spots = await response.json();
  return dispatch(getAllSpots(spots));
};

export const searchSpots = (guest_size, city) => async (dispatch) => {
  const response = await fetch(`/api/spots/search/${guest_size}&${city}`)
  const spots = await response.json();
  return dispatch(getAllSearchedSpots(spots))
}

export const getSpot = (id) => async (dispatch) => {
  const response = await fetch(`/api/spots/${id}`);
  const spot = await response.json();
  dispatch(getOneSpot(spot));
  return spot;
};

export const createSpot = ({
  image_url,
  title,
  address,
  city,
  state,
  zipcode,
  description,
  capacity,
  availability,
}) => async (dispatch) => {
  const response = await fetch("/api/spots/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image_url,
      title,
      address,
      city,
      state,
      zipcode,
      description,
      capacity,
      availability,
    }),
  });
  const spot = await response.json();
  dispatch(createNewSpot(spot));
  return spot;
};

export const deleteSpot = ({ spotId }) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const spot = await response.json();
  return dispatch(deleteASpot(spot));
};


export const getTopAvailableSpots = () => async dispatch => {
  const response = await fetch('/api/spots/top-available');
  const spots = await response.json()
  return dispatch(getAvailableSpots(spots))
}

const initialState = {}

const spotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD:
      newState = Object.assign({}, state, { ...action.payload })
      return newState
    case LOAD_ONE:
      newState = Object.assign({}, state, { ...action.payload })
      return newState
    case LOAD_AVAILABLE:
      newState = Object.assign({}, state, { ...action.payload })
      return newState
    case LOAD_SEARCH:
      newState = Object.assign({}, state, { ...action.payload })
      return newState
    case CREATE_SPOT:
      const new_spot = action.payload.spot
      const all_spots = state.all_spots
      newState = { all_spots: { ...all_spots, ...new_spot } }
      return newState
    case DELETE_SPOT:
      const deleted_spot = action.payload.spot
      newState = Object.assign({}, state)
      delete newState.all_spots[deleted_spot.id]
      return newState
    default:
      return state
  }
}


export default spotReducer;
