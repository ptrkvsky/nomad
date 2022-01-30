import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/services/baseApi';
import { messagerieSlice } from '@/features/messagerie/api';
import { rechercheAppareilSlice } from '@/features/rechercheAppareil/api';
import rechercheAppareilReducer from '@/features/rechercheAppareil/slices/rechercheAppareilSlice';

export const store = configureStore({
  reducer: {
    rechercheAppareils: rechercheAppareilReducer,
    [messagerieSlice.reducerPath]: messagerieSlice.reducer,
    [rechercheAppareilSlice.reducerPath]: rechercheAppareilSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
