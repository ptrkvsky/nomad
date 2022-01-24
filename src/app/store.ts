import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/services/baseApi';
import { messagerieSlice } from '@/features/messagerie/api';
import { rechercheAppareilSlice } from '@/features/rechercheAppareil/api';

export const store = configureStore({
  reducer: {
    [messagerieSlice.reducerPath]: messagerieSlice.reducer,
    [rechercheAppareilSlice.reducerPath]: rechercheAppareilSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
