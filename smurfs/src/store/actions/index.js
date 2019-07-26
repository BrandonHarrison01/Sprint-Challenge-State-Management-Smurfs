import axios from 'axios'

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
            console.log('GET', res.data)
        })
        .catch(err => {
            dispatch({ type: FETCH_SMURF_FAILURE, payload: 'there was an error!' })
            console.log(err)
        })
}

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const addSmurf = state => dispatch => {
    dispatch({ type: ADD_SMURF_START});
    console.log('post state', state)
    axios
        .post('http://localhost:3333/smurfs', state)
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data})
            console.log('POST', res)
        })
        .catch(err => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: 'there was an error!' })
            console.log(err)
        })
}