import { Adapter } from '../..';
import { BlocNoteVisiteAPI } from '../api';
import { BlocNoteVisiteModel } from '../front';
import { BlocNoteTypeNoteAdapter } from './BlocNoteTypeNoteAdapter';

export class BlocNoteVisiteAdapter extends Adapter<
  BlocNoteVisiteModel,
  BlocNoteVisiteAPI
> {
  adapterBlocNoteTypeNote = new BlocNoteTypeNoteAdapter();

  toClient(src: BlocNoteVisiteAPI): BlocNoteVisiteModel {
    return {
      id: src.blocNoteID,
      information: src.sInformation,
      masquer: src.bMasquer,
      typeNote: this.adapterBlocNoteTypeNote.toClient(src.typeNote),
      date: src.dInsert,
      idBlocNoteVisite: src.blocNoteVisiteID,
    };
  }
  toAPI(src: BlocNoteVisiteModel): BlocNoteVisiteAPI {
    return {
      bMasquer: src.masquer,
      blocNoteID: src.id,
      sInformation: src.information,
      typeNote: this.adapterBlocNoteTypeNote.toAPI(src.typeNote),
      dInsert: src.date,
      blocNoteVisiteID: src.idBlocNoteVisite,
    };
  }
}
