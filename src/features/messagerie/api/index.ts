import { baseApi } from '@/app/baseApi';
import getTypeObjets from './getTypeObjet/api';

export const messagerieSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTypeObjets: getTypeObjets(build),
  }),
  overrideExisting: false,
});

export const { useGetTypeObjetsQuery } = messagerieSlice;
