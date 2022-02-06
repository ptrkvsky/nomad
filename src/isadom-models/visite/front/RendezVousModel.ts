import { TypeVisiteModel } from ".";
import { TiersModel } from "../..";
import { IntervenantModel } from "../..";
import { AdresseModel } from "../..";

export type RdvTypeModel = "a-faire" | "en-cours" | "effectue" | "ajouter-rdv";

export interface RendezVousModel {
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
}
