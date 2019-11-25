import {
  GET_USER_PENDING,
  GET_USER_REJECTED,
  GET_USER_FULFILLED,
  ADD_USER_PENDING,
  ADD_USER_REJECTED,
  ADD_USER_FULFILLED,
} from '../constant/ActionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_USER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };

    case ADD_USER_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_USER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
      };
    default:
      return state;

    //[...state.data.results ,action.payload.data.results]
  }
};
export default user;
