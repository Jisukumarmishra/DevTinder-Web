import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name : 'feed',
  initialState : null ,
  reducers : {
    addFeed : (state , action ) => action.payload,
    removeUserFromFeed : (state, action) => {
     const newFeed = state.filter(user => user._id !== state.payload) // action.payload is the id that will be sending 
     return newFeed;
    }
     
    
  },
})

export const {addFeed, removeUserFromFeed} = feedSlice.actions

export default feedSlice.reducer;