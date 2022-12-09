import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sessionReducer from "../features/session/sessionSlice";
import objReducer from "../features/obj/objSlice";
import snackbarReducer from "../features/snackbar/snackbarSlice";

export const store = configureStore({
   reducer: {
      session: sessionReducer,
      snackbar: snackbarReducer,
      obj: objReducer,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
