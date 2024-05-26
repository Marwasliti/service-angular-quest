import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';
import { cocktail } from '../models/cocktail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})

export class CocktailListComponent implements OnInit {
  cocktails: cocktail[] = [];

  constructor(private cocktailService: CocktailServiceService) { }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
