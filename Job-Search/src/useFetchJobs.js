import {useReducer, useEffect} from 'react';
import axios from 'axios';

//github jobs request will fail because of cors, using a proxy server to get around that
const PROXY = process.env.REACT_APP_PROXY;
//there are two options that have worked for me, if one fails, the program can switch to the other by just changing the enviorment variable
const GITHUBJOBS_EP = 
    PROXY === 'allorigins' 
    ? `${process.env.REACT_APP_APE}${encodeURIComponent('https://jobs.github.com/positions.json')}`
    : `${process.env.REACT_APP_CPE}https://jobs.github.com/positions.json`;


const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    HAS_NEXT_PG: 'has-next-pg'
}

function reducer(state, action) {
    switch( action.type ) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, jobs: []}
        case ACTIONS.HAS_NEXT_PG:
            return { ...state, hasNextPage: action.payload.hasNextPage}
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, jobs: action.payload.jobs}
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: []}
    }
}

export default (qParams, pageNum ) => {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true})

    useEffect( () => {

        const cancelCurPage = axios.CancelToken.source();
        const cancelNxtPage = axios.CancelToken.source();

        dispatch( {type: ACTIONS.MAKE_REQUEST} )
        axios.get(GITHUBJOBS_EP, {
            params: { ...qParams, page: pageNum, markdown: 0 }
        })
        .then( res => {
            dispatch({ 
                type: ACTIONS.GET_DATA, 
                payload: { 
                    //depending on the proxy server used, the response data uses will be slightly diffrent
                    jobs: PROXY === 'allorigins' 
                            ? JSON.parse(res.data.contents)
                            : res.data  
                } 
            })
        })
        .catch ( err => {
            if (axios.isCancel(err)) return 
            dispatch( { type: ACTIONS.ERROR, payload: { error: err } } )
        })


        axios.get(GITHUBJOBS_EP, {
            params: { ...qParams, page: pageNum+1, markdown: 0 }
        })
        .then( res => {
            dispatch({ 
                type: ACTIONS.HAS_NEXT_PG, 
                payload: { 
                    hasNextPage: res.data.length !== 0
                } 
            })
        })
        .catch ( err => {
            if (axios.isCancel(err)) return 
            dispatch( { type: ACTIONS.ERROR, payload: { error: err } } )
        })


        return () => {
            cancelCurPage.cancel()
            cancelNxtPage.cancel()
            
        }
    },
    [qParams, pageNum]
    )

    return state
}