import {
  FETCH_COMPANIES_PENDING,
  FETCH_COMPANIES_FULFILLED,
  FETCH_COMPANIES_REJECTED,
} from '../constant/ActionTypes';

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isFinish: false,
};

const companies = (state = initialState, action) => {
  switch (action.type) {
    //FETCH COMPANIES
    case FETCH_COMPANIES_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_COMPANIES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isFinish: true,
        data: action.payload.data.result,
      };
    case FETCH_COMPANIES_REJECTED:
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_COMPANIES_PENDING':
      return {
        isLoading: true,
      };
    case 'GET_COMPANIES_REJECTED':
      return {
        isLoading: false,
        isError: true,
      };
    case 'GET_COMPANIES_FULFILLED':
      return {
        isLoading: false,
        isError: false,
        data: action.payload.data.result,
      };
    default:
      return state;
  }
};
export default companies;
