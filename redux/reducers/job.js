import {
  FETCH_JOB_PENDING,
  FETCH_JOB_FULFILLED,
  FETCH_JOB_REJECTED,
} from '../constant/ActionTypes';

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isFinish: false,
};

const job = (state = initialState, action) => {
  switch (action.type) {
    //FETCH JOB
    case FETCH_JOB_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_JOB_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isFinish: true,
        data: action.payload.data.result,
      };
    case FETCH_JOB_REJECTED:
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_JOB_PENDING':
      return {
        isLoading: true,
      };
    case 'GET_JOB_REJECTED':
      return {
        isLoading: false,
        isError: true,
      };
    case 'GET_JOB_FULFILLED':
      return {
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    default:
      return state;
  }
};

export default job;
