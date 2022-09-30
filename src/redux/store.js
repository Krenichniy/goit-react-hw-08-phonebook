import {  configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactSlice from './contacts/contacts-slice';
import filterSlice from './filters/reducer-filter';
import authReducer from './auth/auth-slice';

// const rootReducer = combineReducers({
//   auth:authReducer,
//   contacts: contactSlice,
//   filter: filterSlice,
// });

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterSlice,
    auth: persistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }),
});

export const persistor = persistStore(store);