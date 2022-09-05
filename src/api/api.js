import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk (
  'users/getUser',
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await response.json();
    return json;
  }
);

export const getPosts = createAsyncThunk (
  'users/getPosts',
  async (userid) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}/todos`);
    const json = await response.json();
    return json;
  }
);

export const getAlbums = createAsyncThunk (
  'users/getAlbums',
  async (userid) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}/albums`);
    const json = await response.json();
    return json;
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    posts: [],
    albums: [],
    isLoading: false,
  },
  extraReducers: {
    [getUser.pending]:(state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]:(state,action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [getUser.rejected]:(state) => {
      state.isLoading = false;
    },
    [getPosts.pending]:(state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]:(state,action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    [getPosts.rejected]:(state) => {
      state.isLoading = false;
    },
    [getAlbums.pending]:(state) => {
      state.isLoading = true;
    },
    [getAlbums.fulfilled]:(state,action) => {
      state.albums = action.payload;
      state.isLoading = false;
    },
    [getAlbums.rejected]:(state) => {
      state.isLoading = false;
    }
  }
}
);

export default userSlice.reducer;



