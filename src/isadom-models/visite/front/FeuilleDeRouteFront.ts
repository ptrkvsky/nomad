import { RendezVousAPI, VisiteAPI } from '..';

export interface FeuilleDeRouteFront {
  rdvAFaire: RendezVousAPI[];
  visiteEnCours: VisiteAPI[];
  visiteTerminee: VisiteAPI[];
}
