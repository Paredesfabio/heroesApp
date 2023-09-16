import { Component, OnInit, Input } from '@angular/core';
import { Heroes } from '@heroes/interfaces/heroes.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public hero!: Heroes;

  constructor() { }

  ngOnInit(): void {
    if(!this.hero){
      throw Error("Hero property is required");
    }
  }

}
