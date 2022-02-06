import { RendezVousModel, TypeVisiteModel } from ".";
import { TiersModel } from "../..";
import { IntervenantModel } from "../..";

import { AdresseModel } from "../../";

export interface VisiteModel {
  ID: number;
  adresse: AdresseModel;
  tiersVisite: TiersModel;
  intervenantPrincipal: IntervenantModel;
  tIntervenantsAutre: IntervenantModel[];
  tTypeVisite: TypeVisiteModel[];
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
  Rdv: RendezVousModel;
}
