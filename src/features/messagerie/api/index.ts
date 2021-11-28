import { baseApi } from '@/services/baseApi';
import getTypesObjets from './getTypeObjet/api';
import getDestinataires from './getDestinataires/api';
import postMessage from './postMessage/api';

export const messagerieSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTypesObjets: getTypesObjets(build),
    getDestinataires: getDestinataires(build),
    postMessage: postMessage(build),
  }),
  overrideExisting: false,
});

export const {
  useGetTypesObjetsQuery,
  useLazyGetDestinatairesQuery,
  usePostMessageMutation,
} = messagerieSlice;
