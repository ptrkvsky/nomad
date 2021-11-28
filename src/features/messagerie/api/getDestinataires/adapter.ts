import {
  DestinataireBack,
  DestinataireFront,
} from '@/features/messagerie/interfaces';

export const destinatairesBackToFront = (
  destinataires: DestinataireBack[],
): DestinataireFront[] => {
  return destinataires.map((destinataire) => ({
    idTypeTiers: destinataire.typetiersID,
    idTiers: destinataire.tiersID,
    nom: destinataire.nom,
    prenom: destinataire.prenom,
    codeAnnuaire: destinataire.codeAnnuaire,
  }));
};
