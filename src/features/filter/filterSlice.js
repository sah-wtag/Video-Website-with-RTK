import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
  page: 1,
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    pageChanged: (state, action) => {
      state.page = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, pageChanged } =
  filterSlice.actions;
