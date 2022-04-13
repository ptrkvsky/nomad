import { baseApi } from '@/services/baseApi';
import getConfiguration from './getConfiguration/api';

export const appareilSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getConfiguration: getConfiguration(build),
  }),
  overrideExisting: false,
});

export const { useGetConfigurationQuery, useLazyGetConfigurationQuery } =
  appareilSlice;
