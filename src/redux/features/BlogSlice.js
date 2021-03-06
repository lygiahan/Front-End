import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  listsPagi: [],
  _page: 1,
  _limit: 10,
  isModal: false,
  detail: {},
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    getLists: (state, action) => {
      state.lists = action.payload;
    },
    getListPagi: (state, action) => {
      state.listsPagi = action.payload;
    },
    detailBlog: (state, action) => {
      state.detail = action.payload;
    },
    searchBlog: (state, action) => {
      state.listsPagi = action.payload;
    },
    filterBlog: (state, action) => {
      state.listsPagi = action.payload;
    },
    sortBlog: (state, action) => {
      state.listsPagi = action.payload;
    },
    onChangePagePagination: (state, action) => {
      state._page = action.payload;
    },
    toggleModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const {
  getLists,
  getListPagi,
  postBlog,
  sortBlog,
  editBlog,
  filterBlog,
  detailBlog,
  searchBlog,
  onChangePagePagination,
  toggleModal,
} = blogSlice.actions;

export default blogSlice.reducer;
