import { combineReducers } from '@reduxjs/toolkit';
import countReducer from '../features/counter/counterSlice';
import totalReducer from '../features/total/totalSlice';

const rootReducer = combineReducers({
  count: countReducer,
  total: totalReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
