import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  selectSort: { name: "популярности+", sort: "rating" },
  value: ''
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSelectSort(state, action) {
      state.selectSort = action.payload;
    },
    setValue(state, action) {
      state.value = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {setCategoryId,  setSelectSort, setValue} = filterSlice.actions;
export default filterSlice.reducer;
