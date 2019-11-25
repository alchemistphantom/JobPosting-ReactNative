import {combineReducers} from 'redux';
import job from './job';
import categories from './categories';
import companies from './companies';
import user from './user';

const reducers = combineReducers({
  job: job,
  categories: categories,
  companies: companies,
  user: user,
});

export default reducers;
