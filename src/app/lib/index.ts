// slices/index.ts
import { combineReducers } from 'redux';
import exampleReducer from '../lib/slices/exampleSlice';
import userReducer from './slices/userDataSlice';
const rootReducer = combineReducers({
    example: exampleReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
