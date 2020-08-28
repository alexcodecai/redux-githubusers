import axios from "axios";

function requestStart() {
  return {
    type: "REQUEST_USERSDETAIL_START"
  };
}

function requestSuccess(usersDetail) {
  return {
    type: "REQUEST_USERSDETAIL_SUCCESS",
    usersDetail
  };
}

function requestFail(error) {
  return {
    type: "REQUEST_USERSDETAIL_FAIL",
    error
  };
}

export function getUsersDetail(name) {
  return dispatch => {
    dispatch(requestStart());
    axios
      .get(`https://api.github.com/users/${name}`)
      .then(response => {
        dispatch(requestSuccess(response.data));
      })
      .catch(err => {
        dispatch(requestFail(err));
      });
  };
}
