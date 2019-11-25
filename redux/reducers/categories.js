import {
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED,
} from '../constant/ActionTypes';

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isFinish: false,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    //FETCH CATEGORIES
    case FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_CATEGORIES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isFinish: true,
        data: action.payload.data.result,
      };
    case FETCH_CATEGORIES_REJECTED:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default categories;
