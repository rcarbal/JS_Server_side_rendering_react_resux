import { combineReducers } from 'redux';
import userReducer from './usersReducer';
import adminsReducer from './adminReducer'
import authReducer from './authReducer';

export default combineReducers({
    users: userReducer,
    auth: authReducer,
    admins: adminsReducer

});