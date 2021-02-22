const LOAD = "spot/getAllSpots"

const getAllSpots = (spots) => {
    return {
        type: LOAD,
        payload: spots
    }
}

export const getSpots = () => async dispatch => {
    const response = await fetch('/api/spots/');
    dispatch(getAllSpots(response.data.spots))
    return await response.json();
}

const initialState = {}

const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, {allSpots: action.payload})
            return newState
        default:
            return state
    }
}

export default spotReducer