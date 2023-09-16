import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroes } from '@heroes/interfaces/heroes.interface';
import { HeroesService } from '@heroes/services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent implements OnInit {

  searchInput = new FormControl('');
  heroes: Heroes[] = [];
  selectedHero?: Heroes;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroesService.searchHeroes(value)
      .subscribe( (heroes) => {
        this.heroes = heroes;
      });
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if(!event.option.value){
      this.selectedHero = undefined;
      return;
    }
    const hero: Heroes =  event.option.value;
    this.searchInput.setValue( hero.superhero );
    this.selectedHero = hero;
  }

}
