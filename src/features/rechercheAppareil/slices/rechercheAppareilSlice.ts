// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResultatRechercheAppareil } from '../interfaces';

interface AppareilsState {
  appareils: ResultatRechercheAppareil[];
}

const initialState: AppareilsState = {
  appareils: [],
};

const rechercheAppareilSlice = createSlice({
  name: `appareils`,
  initialState,
  reducers: {
    setAppareils(state, action: PayloadAction<ResultatRechercheAppareil[]>) {
      state.appareils = action.payload;
    },
  },
});

export const { setAppareils } = rechercheAppareilSlice.actions;
export default rechercheAppareilSlice.reducer;
