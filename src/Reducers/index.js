import react from "react";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice";
import profileReducer from "../Slices/profileSlice";
import billReducer from "../Slices/BillReminder";
const RootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    billReminder:billReducer,
});
export default RootReducer ;