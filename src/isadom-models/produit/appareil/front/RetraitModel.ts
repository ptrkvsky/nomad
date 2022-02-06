import { CompteurModel, MotifRetraitDMModel } from ".";
import { LocalisationInterneModel } from "../../..";

export interface RetraitModel {
  localisation: LocalisationInterneModel;
  motif: MotifRetraitDMModel;
  compteur: CompteurModel;
}
