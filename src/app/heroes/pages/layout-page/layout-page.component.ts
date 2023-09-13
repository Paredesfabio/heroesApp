import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit {

  public sideBarItems = [
    { label: 'List', icon: 'label', url: './list' },
    { label: 'Add new', icon: 'add', url: './new' },
    { label: 'Search', icon: 'search', url: './search' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
