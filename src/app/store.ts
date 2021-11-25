import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/app/baseApi';
import { messagerieSlice } from '@/features/messagerie/api';

export const store = configureStore({
  reducer: {
    [messagerieSlice.reducerPath]: messagerieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
