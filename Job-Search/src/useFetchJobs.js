import {useReducer, useEffect} from 'react';
import axios from 'axios';

const GITJ_ENDPOINT = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

const  ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'

}

function reducer(state, action) {
    switch( action.type ) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: []}
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs}
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: []}
    }
}

export default (qParams, pageNum ) => {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true})

    useEffect( () => {

        const cancelToken = axios.CancelToken.source();

        dispatch( {type: ACTIONS.MAKE_REQUEST} )
        axios.get(GITJ_ENDPOINT, {
            params: { ...qParams, page: pageNum, markdown: 1 }
        })
        .then( res => {
            dispatch( { type: ACTIONS.GET_DATA, payload: { jobs: res.data } } )
        })
        .catch ( err => {
            if (axios.isCancel(err)) return 
            dispatch( { type: ACTIONS.ERROR, payload: { error: err } } )
        })

        return () => {
            cancelToken.cancel()
        }
    },
    [qParams, pageNum]
    )

    return state
}