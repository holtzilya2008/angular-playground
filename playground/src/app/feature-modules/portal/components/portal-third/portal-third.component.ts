import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-portal-third',
  templateUrl: './portal-third.component.html',
  styleUrls: ['./portal-third.component.scss']
})
export class PortalThirdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onThird() {
    console.log('Third');
  }

}
