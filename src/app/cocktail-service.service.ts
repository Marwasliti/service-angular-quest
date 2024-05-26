import { Injectable } from '@angular/core';
import { cocktail } from './models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
private cocktails:cocktail[]=[ { nom: 'Mojito', prix: 10, image: "imag1" },
{ nom: 'baneorang', prix: 12, image: "imag2" },
{ nom: 'kiwifraise', prix: 15, image: "imag3" }];
  constructor() { }
  getCocktails(){return this.cocktails}
}
