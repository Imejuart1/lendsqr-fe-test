import { createStore } from 'redux';
import userReducer from './userReducer.tsx';

const store = createStore(userReducer);

export default store;
