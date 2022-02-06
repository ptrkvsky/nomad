// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TourneeState {
  dateTournee: string;
  idIntervenant: string;
}

const initialState: TourneeState = {
  dateTournee: ``,
  idIntervenant: ``,
};

const tourneeSlice = createSlice({
  name: `tournee`,
  initialState,
  reducers: {
    setTourneeInfos(state, action: PayloadAction<TourneeState>) {
      state.dateTournee = action.payload.dateTournee;
      state.idIntervenant = action.payload.idIntervenant;
    },
  },
});

export const { setTourneeInfos } = tourneeSlice.actions;
export default tourneeSlice.reducer;
