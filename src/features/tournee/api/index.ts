import { baseApi } from '@/services/baseApi';
import getTournee from './getTournee/api';
import getIntervenants from './getIntervenants/api';

export const tourneeSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTournee: getTournee(build),
    getIntervenants: getIntervenants(build),
  }),
  overrideExisting: false,
});

export const {
  useGetTourneeQuery,
  useLazyGetTourneeQuery,
  useGetIntervenantsMutation,
} = tourneeSlice;
