import { IAbstractChampsModel } from '../champ/IAbstractChampsModel';
import { Module } from './Module';

export interface IGroupeModel {
  champs: IAbstractChampsModel[];
  libelle: string;
  id: string;
  version: string;
  ordre: number;
  module: Module;
}
