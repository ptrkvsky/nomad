import { baseApi } from '@/services/baseApi';
import getFamillesProduit from './getFamilles/api';
import getTypesProduits from './getTypesProduits/api';
import getModeles from './getModeles/api';

export const rechercheAppareilSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFamillesProduit: getFamillesProduit(build),
    getModeles: getModeles(build),
    getTypesProduits: getTypesProduits(build),
  }),
  overrideExisting: false,
});

export const {
  useGetFamillesProduitQuery,
  useGetModelesMutation,
  useGetTypesProduitsQuery,
} = rechercheAppareilSlice;
