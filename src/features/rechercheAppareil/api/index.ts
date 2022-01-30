import { baseApi } from '@/services/baseApi';
import getAppareils from './getAppareils/api';
import getFamillesProduit from './getFamilles/api';
import getModeles from './getModeles/api';
import getTypesLocalisations from './getTypesLocalisations/api';
import getTypesProduits from './getTypesProduits/api';

export const rechercheAppareilSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAppareils: getAppareils(build),
    getFamillesProduit: getFamillesProduit(build),
    getModeles: getModeles(build),
    getTypesProduits: getTypesProduits(build),
    getTypesLocalisations: getTypesLocalisations(build),
  }),
  overrideExisting: false,
});

export const {
  useGetAppareilsMutation,
  useGetFamillesProduitQuery,
  useGetModelesMutation,
  useGetTypesLocalisationsQuery,
  useGetTypesProduitsQuery,
} = rechercheAppareilSlice;
