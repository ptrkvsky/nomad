import { FeuilleDeRouteFront } from '@/isadom-models/visite/front/FeuilleDeRouteFront';
import { FeuilleDeRouteAPI } from '@/isadom-models/visite/api/FeuilleDeRouteAPI';

export const feuilleDeRouteBackToFront = (
  feuilleDeRouteBack: FeuilleDeRouteAPI,
): FeuilleDeRouteFront => {
  const feuilleDeRouteFront: FeuilleDeRouteFront = {
    rdvAFaire: feuilleDeRouteBack.tRdvAFaire,
    visiteEnCours: feuilleDeRouteBack.tVisiteEnCours,
    visiteTerminee: feuilleDeRouteBack.tVisiteTermine,
  };
  return feuilleDeRouteFront;
};
