import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./features/mailSlice";
import userSlice from "./features/userSlice";

//import mailReducer from '../features/mailSlice';

export default configureStore({
    reducer:{
        mail:mailSlice,
        user: userSlice,
    }
})