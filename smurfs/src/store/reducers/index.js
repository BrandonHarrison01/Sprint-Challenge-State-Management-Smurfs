import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions'

const initialState = {
    error: '',
    fetching: false,
    smurfs: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                error: '',
                fetching: true,
                smurfs: []
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                error: '',
                fetching: false,
                smurfs: action.payload
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false,
                smurfs: []
            }
        default:
            return state;
    }
}