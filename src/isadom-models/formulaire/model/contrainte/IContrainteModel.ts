import { CategorieContrainte } from "./CategorieContrainte";
import { ITypeContrainteModel } from "./ITypeContrainteModel";
import { Module } from "../groupe/Module";

export interface IContrainteModel {
     categorie: CategorieContrainte;
     module : Module;
     typeContrainte: ITypeContrainteModel;
     id:string;

}