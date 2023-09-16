import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Heroes } from '@heroes/interfaces/heroes.interface';
import { HeroesService } from '@heroes/services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  // GET HEROES USING THE ASYNC PIPE
  // public heroes$: Observable<Heroes[]> = this.heroesService.getHeroes();
  public heroes: Heroes[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    })
  }

}
