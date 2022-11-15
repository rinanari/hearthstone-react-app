import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import favReducer from "./slices/favouriteSlice";
import historyReducer from "./slices/historySlice";
import { cardsApi } from "./cardsApi";

const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
  user: userReducer,
  auth: authReducer,
  favourites: favReducer,
  history: historyReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat(cardsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
