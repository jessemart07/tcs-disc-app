import axios from 'axios';
import thunk from 'redux-thunk';
const submitResults = (results) => {
    return{
        type:'SUBMIT_RESULTS',
        data:results
    }
}

const submitResultsFailed = () => {
    return {
        type:'SUBMIT_RESULTS_FAILED'
    }
}

export const initResults = (results) => {
    return dispatch => {
        // axios.post('', results.result)
        // .then(res => {
        //     dispatch(submitResults(results));
        // }).catch(error => {
        //     dispatch(submitResultsFailed());
        // })
        dispatch(submitResults(results));
    }
    
}