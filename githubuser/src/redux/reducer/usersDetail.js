const initState = { isLoading: false, error: "", data: {} };

const usersDetail = (state = initState, action) => {
  switch (action.type) {
    case "REQUEST_USERSDETAIL_START":
      return {
        ...state,
        isLoading: true
      };
    case "REQUEST_USERSDETAIL_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.usersDetail
      };
    case "REQUEST_USERSDETAIL_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default usersDetail;
