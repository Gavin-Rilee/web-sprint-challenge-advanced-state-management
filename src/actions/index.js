import axios from "axios";

//async action creator
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const UPDATE_ERROR = "UPDATE_ERROR";

export const fetchSmurfs = () => {
  // telling the dispatch we are going into a loading state
  return (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });

  // going to get the data
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      //send the reducer the data
      console.log(res);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    //send the reducer the error message
    .catch((err) => {
      dispatch({ type: FETCH_SMURF_FAILURE, payload: err.message });
    });
}
};

export const addSmurf = (name,position,nickname,description) => {

    const newSmurf = {
        id: new Date(),
        name: name,
        position: position,
        nickname: nickname,
        description: description

    }

    return ({ type: ADD_NEW_SMURF, payload:newSmurf })
};

export const updatedError = (newError) => {
  return { type: UPDATE_ERROR, payload: newError };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
