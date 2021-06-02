import {
  FETCH_USERS_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAIL,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  error: "",
  isLoading: false,
};

const fetchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_REQUEST_SUCCESS:
      return { isLoading: false, users: action.data, error: "" };
    case FETCH_REQUEST_FAIL:
      return { isLoading: false, users: [], error: action.data };

    default:
      return state;
  }
};

export default fetchUsersReducer;
