import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '@heroes/interfaces/heroes.interface';

import { HeroesService } from '@heroes/services/heroes.service';
import { switchMap, delay } from 'rxjs';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public hero?: Heroes;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        // delay(2000),
        switchMap( ({id}) => this.heroesService.getHeroById(id) ),
      )
      .subscribe((hero) => {
        if(!hero) return this.router.navigate(['/heroes/list']);
        this.hero = hero;
        console.log(this.hero)
        return;
      });
  }

  goBack() {
    this.router.navigateByUrl('/heroes/list');
  }

}
