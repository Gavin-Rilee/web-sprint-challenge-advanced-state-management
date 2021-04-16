import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  UPDATE_ERROR,
  ADD_NEW_SMURF,
} from "../actions/index";

export const initialState = {
  smurfData: [],
  isLoading: false,
  error: "",
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfData: action.payload,
        isLoading: false,
        
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_NEW_SMURF:
      return {
        ...state,
        isLoading: false,
        smurfData: [...state.smurfData, action.payload]
      };
    case UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default smurfReducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
