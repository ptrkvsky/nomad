import {
  TypeObjetBack,
  TypeObjetFront,
} from '@/features/messagerie/interfaces/typeObjet';

export const typesObjetsBackToFront = (
  typesObjets: TypeObjetBack[],
): TypeObjetFront[] => {
  return typesObjets.map((typeObjet) => ({
    idTypeobjet: typeObjet.typeObjetID,
    libelle: typeObjet.sLibelle,
    texteParDefaut: typeObjet.sTexteParDefaut,
  }));
};
