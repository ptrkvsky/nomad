import { ReponseModel } from '.';

export interface QuestionModel {
  questionID: number;
  libelle: string;
  ordre: number;
  itemPrioritaire: boolean;
  comptabilise: boolean;
  reponsesPossibles: ReponseModel[];
  reponseSaisie: ReponseModel;
}
