import { BlocNoteTypeNoteAPI } from "./BlocNoteTypeNoteAPI";

export interface BlocNoteAPI {
  blocNoteID: number;
  sInformation: string;
  bMasquer: boolean;
  typeNote: BlocNoteTypeNoteAPI;
  dInsert: string;
}
