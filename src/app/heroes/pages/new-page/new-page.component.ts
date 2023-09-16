import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  publishers = [
    { id: 'DC Comics', value: 'DC - Comics'},
    { id: 'Marvel Comics', value: 'Marvel - Comics!'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
