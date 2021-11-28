import { TiersBack, TiersFront } from '@/interfaces';

export const tiersBackToFront = (tiers: TiersBack[]): TiersFront[] => {
  return tiers.map((tiers) => ({
    ...tiers,
    idTiers: tiers.iPKTiers,
    idTypeTiers: tiers.sTypeTiers,
    codeTiers: tiers.sCodeTiers,
    nom: tiers.sNom,
    prenom: tiers.sPrenom,
  }));
};
