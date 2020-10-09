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
    const config ={
        headers:{'X-Access-Token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAwNTUwMCwiZW1haWwiOiJtYXJrQHdpeGVscy5jb20iLCJuYW1lIjoiTWFyayBTaXZld3JpZ2h0IiwiZW1wbG95ZWVfbnVtYmVyIjoiZWR1Y29fMDEiLCJhcHBfcm9sZSI6NCwib3JnYW5pc2F0aW9uIjoyOCwiY291bnRyeSI6eyJpZCI6MTAsInR5cGUiOiJjb3VudHJ5Iiwib3B0aW9uIjpudWxsLCJkZXNjcmlwdGlvbiI6IlNvdXRoIEFmcmljYSIsIm9yZ2FuaXNhdGlvbl9pZCI6MCwiY3JlYXRlZF9hdCI6IjIwMTgtMDctMTNUMDg6NDM6NDYuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDE4LTA3LTEzVDA4OjQzOjQ2LjAwMFoifSwibGFuZ3VhZ2UiOiIiLCJncm91cHMiOltdLCJpYXQiOjE2MDIxNTIzNDYsImV4cCI6MTYwMjIzODc0Nn0.y_zK6rzSPsqpcJw-PgFCgHaM6u6hUnkxp44M_zWOe1Q'}
    }
    return dispatch => {
        
        
    }
    
}