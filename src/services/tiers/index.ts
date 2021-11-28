import { baseApi } from '@/services/baseApi';
import searchTiers from './searchTiers/api';

export const tiersSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    searchTiers: searchTiers(build),
  }),
  overrideExisting: false,
});

export const { useSearchTiersMutation } = tiersSlice;
