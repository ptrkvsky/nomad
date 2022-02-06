import { RendezVousAPI, TypeVisiteAPI } from ".";
import { TiersAPI } from "../../tiers/api/TiersAPI";
import { IntervenantAPI } from "../../tiers/intervenant/api/IntervenantAPI";

import { AdresseAPI } from "../../localisation/api/AdresseAPI";

export interface VisiteAPI {
  ID: number;
  adresse: AdresseAPI;
  tiersVisite: TiersAPI;
  intervenantPrincipal: IntervenantAPI;
  tIntervenantsAutre: IntervenantAPI[];
  tTypeVisite: TypeVisiteAPI[];
  sInformation: string;
  date: string;
  hDebut: string;
  hFin: string;
  iFKCodeLieuVisite: number;
  sCodeLieuVisite: number;
  bValide: boolean;
  sNatureLocalisationPreleveDMC: string;
  iFKLocalisationPreleveDMC: number;
  sNatureLocalisationPreleveDM: string;
  iFKLocalisationPreleveDM: number;
  sNatureLocalisationPreleveO2: string;
  iFKLocalisationPreleveO2: number;
  Rdv: RendezVousAPI;
}
