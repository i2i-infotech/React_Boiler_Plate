import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  autherData: []
};

const autherSlice = createSlice({
  name: "auther",
  initialState: initialState,
  reducers: {
    reset: (state) => initialState,
    addAuther: (state, action) => {
      if (state.autherData)
        state.autherData = [...state.autherData, action.payload];
      else
        state.autherData = [action.payload]
    },
    deleteAuther: (state, action) => {
      // if(action.payload.id){
      //   state.autherData.splice(action.payload.id, 1);
      // }
      state.autherData = state.autherData.filter((_, index) => index !== action.payload.id);
    }
  },
});

const { reset, addAuther, deleteAuther } = autherSlice.actions;

export default autherSlice.reducer;

export { reset, addAuther, deleteAuther };
