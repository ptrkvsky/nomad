import { TypeVisiteAPI } from ".";
import { TiersAPI } from "../../tiers";
import { IntervenantAPI } from "../../tiers/intervenant/api/IntervenantAPI";
import { AdresseAPI } from "../../localisation/api/AdresseAPI";

export type RdvType = "a-faire" | "en-cours" | "effectue" | "ajouter-rdv";

export interface RendezVousAPI {
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
}
