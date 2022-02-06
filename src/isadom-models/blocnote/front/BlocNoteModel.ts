import { BlocNoteTypeNoteModel } from "./BlocNoteTypeNoteModel";

export interface BlocNoteModel {
  id: number;
  information: string;
  masquer: boolean;
  typeNote: BlocNoteTypeNoteModel;
  date: string;
}
