import { createSlice, createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import authService from "./authService";

type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: authInitialStatetype;
  /** type for `thunkApi.dispatch` */
  dispatch?: Dispatch;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: string;
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: {};
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: string;
};
interface IuserData {
  email: string;
  password: string;
}
export interface authInitialStatetype {
  user: {};
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

interface User {
  id: string;
  name: string;
  token: string;
}
const authInitialState: authInitialStatetype = {
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// login
export const login = createAsyncThunk<User, IuserData, AsyncThunkConfig>(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      const message: string =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

// Register
export const register = createAsyncThunk<{}, IuserData, AsyncThunkConfig>(
  "auth/register",
  async (userData, thunkApi) => {
    console.log(userData);
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = {};
      });
  },
});

export default authSlice.reducer;
