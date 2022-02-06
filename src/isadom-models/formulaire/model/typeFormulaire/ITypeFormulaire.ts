
import { Validable } from './Validable';
import { Scorable } from './Scorable';
import { Module } from '../groupe/Module';


export interface ITypeFormulaire extends  Validable, Scorable{
     id:string;
     module: Module;
     validable: boolean;
     score :number;
     definitionCalculScore:string;
}
