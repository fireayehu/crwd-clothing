import { UserActionTypes } from "./user.types";
const INITITAL_STATE = {
  currentUser: null,
  errorMessage: null
};

const userReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null
      };
    case UserActionTypes.SIGN_OUT_SUCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
