import { createSlice } from "@reduxjs/toolkit";
import reducer from "./connectionsSlice";

const requestSlice = createSlice( {
  name : "requests",
  initialState : null ,
  reducers : {
    addRequests : (state , action) => action.payload,
    removeRequest : (state, action) => {
      
    }
  }
});

export const {addRequests} = requestSlice.actions;

export default requestSlice.reducer;