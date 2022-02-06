import { RendezVousAPI } from './RendezVousAPI';
import { VisiteAPI } from './VisiteAPI';

export interface FeuilleDeRouteAPI {
  tRdvAFaire: RendezVousAPI[];
  tVisiteEnCours: VisiteAPI[];
  tVisiteTermine: VisiteAPI[];
}
