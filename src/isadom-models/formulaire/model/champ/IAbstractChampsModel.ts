import { IContrainteModel } from "../contrainte/IContrainteModel";
import { ITypeChampsModel } from "./ITypeChampsModel";
import { IAbstractValeurModel } from './IAbstractValeurModel';

export interface IAbstractChampsModel<TypeValeur = any, Valeur extends IAbstractValeurModel<TypeValeur> = IAbstractValeurModel<any>>{
     id:string;
     libelle:string;
     information:string;
     module:string;
     ordre:number;
     actif:boolean;
     typeChamps : ITypeChampsModel;
     contraintes: IContrainteModel[];
     version:number;
     valeur: Valeur

}