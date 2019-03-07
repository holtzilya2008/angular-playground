import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pg-portal-second',
  templateUrl: './portal-second.component.html',
  styleUrls: ['./portal-second.component.scss']
})
export class PortalSecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSecond() {
      console.log('Second');
  }

}
