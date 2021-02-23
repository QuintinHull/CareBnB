const LOAD = "spot/getAllSpots"
const CREATE_SPOT = "spot/createNewSpot"

const getAllSpots = (spots) => {
    return {
        type: LOAD,
        payload: spots
    }
}

const createNewSpot = (spot) => {
    return {
        type: CREATE_SPOT,
        payload: spot
    }
}

export const getSpots = () => async dispatch => {
    const response = await fetch('/api/spots/');
    const spots = await response.json()
    return dispatch(getAllSpots(spots));
}

export const createSpot = ({ image_url, title, address, city,
    state, zipcode, description, capacity, availability }) => async dispatch => {
        const response = await fetch('/api/spots/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
                availability
            })
        });
        const spot = await response.json();
        return dispatch(createNewSpot(spot))
    }

const initialState = {}

const spotReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = Object.assign({}, state, { ...action.payload })
            return newState
        case CREATE_SPOT:
            const new_spot = action.payload.spot
            const all_spots = state.all_spots
            newState = { all_spots: { ...all_spots, ...new_spot } }
            return newState
        default:
            return state
    }
}

export default spotReducer