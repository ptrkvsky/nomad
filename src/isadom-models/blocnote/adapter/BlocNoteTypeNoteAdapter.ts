import { Adapter } from '../..';
import { BlocNoteTypeNoteAPI } from '../api';
import { BlocNoteTypeNoteModel } from '../front';

export class BlocNoteTypeNoteAdapter extends Adapter<
  BlocNoteTypeNoteModel,
  BlocNoteTypeNoteAPI
> {
  toClient(src: BlocNoteTypeNoteAPI): BlocNoteTypeNoteModel {
    return {
      id: src.typeNoteID,
      libelle: src.sLibelle,
      texteParDefaut: src.sTexteParDefaut,
      reserver: src.bReserver,
    };
  }
  toAPI(src: BlocNoteTypeNoteModel): BlocNoteTypeNoteAPI {
    return {
      typeNoteID: src.id,
      sLibelle: src.libelle,
      sTexteParDefaut: src.texteParDefaut,
      bReserver: src.reserver,
    };
  }
}
