const { createSlice } = require("@reduxjs/toolkit");

const connectionsSlice = createSlice ( {
  name : 'connection',
  initialState : null,
  reducers : {
    addConnections : (state , action) => action.payload,
    removeConnections : () => null
  }
})

export default connectionsSlice.reducer;