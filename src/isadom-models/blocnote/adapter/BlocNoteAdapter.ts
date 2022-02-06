import { BlocNoteAPI } from '..';
import { Adapter } from '../../_adapter';
import { BlocNoteModel } from '../front';
import { BlocNoteTypeNoteAdapter } from './BlocNoteTypeNoteAdapter';

export class BlocNoteAdapter extends Adapter<BlocNoteModel, BlocNoteAPI> {
  adapterBlocNoteTypeNote = new BlocNoteTypeNoteAdapter();

  toClient(src: BlocNoteAPI): BlocNoteModel {
    return {
      id: src.blocNoteID,
      information: src.sInformation,
      masquer: src.bMasquer,
      typeNote: this.adapterBlocNoteTypeNote.toClient(src.typeNote),
      date: src.dInsert,
    };
  }
  toAPI(src: BlocNoteModel): BlocNoteAPI {
    return {
      bMasquer: src.masquer,
      blocNoteID: src.id,
      sInformation: src.information,
      typeNote: this.adapterBlocNoteTypeNote.toAPI(src.typeNote),
      dInsert: src.date,
    };
  }
}
