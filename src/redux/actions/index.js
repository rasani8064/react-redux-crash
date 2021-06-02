import {
  BUY_MOBILE,
  BUY_LAPTOP,
  FETCH_USERS_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAIL,
} from "./actionTypes";
import axios from "axios";

export const buyMobile = () => {
  return {
    type: BUY_MOBILE,
  };
};

export const buyLaptop = () => {
  return {
    type: BUY_LAPTOP,
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchRequestSuccess = (users) => {
  return {
    type: FETCH_REQUEST_SUCCESS,
    data: users,
  };
};
export const fetchRequestFail = (error) => {
  return {
    type: FETCH_REQUEST_FAIL,
    data: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = response.data.map((user) => user.name);
        dispatch(fetchRequestSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchRequestFail(error));
      });
  };
};
