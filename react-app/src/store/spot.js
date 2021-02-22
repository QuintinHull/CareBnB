const LOAD = "spot/getAllSpots"

const getAllSpots = (spots) => {
    return {
        type: LOAD,
        payload: spots
    }
}

export const getSpots = () => async dispatch => {
    const response = await fetch('/api/spots/');
    console.log(response)
    const spots = await response.json()
    return dispatch(getAllSpots(spots));
}

const initialState = {}

const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { ...action.payload })
            return newState
        default:
            return state
    }
}

export default spotReducer